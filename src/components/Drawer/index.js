// import React from 'react';
// import {
//   createDrawerNavigator,
//   DrawerItem,
//   DrawerItemList,
// } from '@react-navigation/drawer';
// import {Linking, Text, View} from 'react-native';
// import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
// const Drawer = createDrawerNavigator();
// const renderContent = () => {
//   return (
//     <>
//       <View>
//         <Text>Hello</Text>
//       </View>
//     </>
//   );
// };
// export function MyDrawer() {
//   return (
//     <Drawer.Navigator
//       drawerPosition="right"
//       overlayColor="transparent"
//       drawerType="slide"
//       drawerContent={renderContent}
//       drawerStyle={{
//         backgroundColor: '#1B77E2',
//         width: wp('100'),
//       }}>
//       <DrawerItem
//         label="Help"
//         onPress={() => Linking.openURL('https://mywebsite.com/help')}
//       />
//     </Drawer.Navigator>
//   );
// }
