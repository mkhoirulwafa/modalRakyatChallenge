import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, Linking} from 'react-native';
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
import {CustomTabBar} from '../components';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Gap} from '../utils';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ModalScreen({navigation, onPressClose}) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1B77E2" />
      <View style={{flexGrow: 1}}>
        <View style={{flexShrink: 1, flexDirection: 'row'}}>
          <View
            style={{
              flex: 0.2,
              height: 60,
              backgroundColor: '#FFAC23',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 30,
                  fontFamily: 'AkwePro-DemiBold',
                }}>
                X
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.8,
              height: 60,
              backgroundColor: '#1B77E2',
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontFamily: 'AkwePro-DemiBold',
              }}>
              Menu
            </Text>
          </View>
        </View>
        <View
          style={{height: heightPercentageToDP('100'), flexDirection: 'row'}}>
          <View
            style={{
              flex: 0.2,
              backgroundColor: 'transparent',
            }}></View>
          <View
            style={{
              flex: 0.85,
              width: widthPercentageToDP('85'),
              height: heightPercentageToDP('100'),
              backgroundColor: '#1B77E2',
            }}>
            <View
              style={{
                width: widthPercentageToDP('85'),
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: widthPercentageToDP('41.5'),
                  height: heightPercentageToDP('20'),
                  backgroundColor: '#186FD5',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="card-outline" size={30} color="#fff" />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'AkwePro-Regular',
                  }}>
                  Mutasi
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: widthPercentageToDP('42.5'),
                  height: heightPercentageToDP('20'),
                  backgroundColor: '#1666C3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome5Icon name="coins" size={30} color="#fff" />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'AkwePro-Regular',
                  }}>
                  Tarik Dana
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: widthPercentageToDP('85'),
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: widthPercentageToDP('41.5'),
                  height: heightPercentageToDP('20'),
                  backgroundColor: '#1666C3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="vector-triangle"
                  size={30}
                  color="#fff"
                />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'AkwePro-Regular',
                  }}>
                  Refferal
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: widthPercentageToDP('42.5'),
                  height: heightPercentageToDP('20'),
                  backgroundColor: '#186FD5',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="log-out-outline" size={30} color="#fff" />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'AkwePro-Regular',
                  }}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
            <Gap height={heightPercentageToDP('23')} />
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontFamily: 'AkwePro-DemiBold',
                paddingHorizontal: 20,
              }}>
              Butuh Bantuan?
            </Text>
            <Gap height={20} />
            <View
              style={{
                width: widthPercentageToDP('85'),
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: widthPercentageToDP('20.5'),
                  height: heightPercentageToDP('7'),
                  backgroundColor: '#186FD5',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="email-send-outline"
                  size={20}
                  color="#fff"
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => Linking.openURL('mailto:lenders@modalrakyat.id')}
                style={{
                  width: widthPercentageToDP('60.5'),
                  height: heightPercentageToDP('7'),
                  backgroundColor: '#1666C3',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'AkwePro-Regular',
                  }}>
                  lenders@modalrakyat.id
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: widthPercentageToDP('85'),
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: widthPercentageToDP('20.5'),
                  height: heightPercentageToDP('7'),
                  backgroundColor: '#1666C3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="logo-whatsapp" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => Linking.openURL('tel:081324884526')}
                style={{
                  width: widthPercentageToDP('60.5'),
                  height: heightPercentageToDP('7'),
                  backgroundColor: '#186FD5',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'AkwePro-Regular',
                  }}>
                  0813 2488 4526
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

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
