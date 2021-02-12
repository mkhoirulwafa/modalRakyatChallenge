import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Dashboard,
  Details,
  Dompet,
  Explore,
  Lainnya,
  Portofolio,
} from '../screens';
import {CustomTabBar, ModalScreen} from '../components';
const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Stack.Navigator initialRouteName={'Dashboard'}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="MyModal"
        component={ModalScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default function Router({navigation}) {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={RootStackScreen} />
      <Tab.Screen name="Portofolio" component={Portofolio} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Dompet" component={Dompet} />
      <Tab.Screen name="Lainnya" component={Lainnya} />
    </Tab.Navigator>
  );
}
