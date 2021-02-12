import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function CustomTabBar(props) {
  const navigateToFirstScreen = () => {
    props.navigation.navigate('Home');
  };

  const navigateToSecondScreen = () => {
    props.navigation.navigate('Portofolio');
  };

  const navigateToThirdScreen = () => {
    props.navigation.navigate('Explore');
  };
  const navigateToFourthScreen = () => {
    props.navigation.navigate('Dompet');
  };
  const navigateToFifthScreen = () => {
    props.navigation.navigate('Lainnya');
  };

  return (
    <View style={styles.TabBarMainContainer}>
      <TouchableOpacity
        onPress={navigateToFirstScreen}
        activeOpacity={0.6}
        style={styles.button}>
        <Icon name="home-outline" color="#B6B6B6" size={30} />
        <Text style={styles.TextStyle}> Beranda </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={navigateToSecondScreen}
        activeOpacity={0.6}
        style={styles.button}>
        <Icon name="briefcase-outline" color="#B6B6B6" size={30} />
        <Text style={styles.TextStyle}> Portofolio </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={navigateToThirdScreen}
        activeOpacity={0.6}
        style={styles.explore}>
        <MaterialIcon name="clean-hands" color="#fff" size={30} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={navigateToFourthScreen}
        activeOpacity={0.6}
        style={styles.button}>
        <Icon name="wallet-outline" color="#B6B6B6" size={30} />
        <Text style={styles.TextStyle}> Dompet </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={navigateToFifthScreen}
        activeOpacity={0.6}
        style={styles.button}>
        <Icon name="ellipsis-horizontal" color="#B6B6B6" size={30} />
        <Text style={styles.TextStyle}> Lainnya </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  TabBarMainContainer: {
    justifyContent: 'space-around',
    height: 55,
    flexDirection: 'row',
    width: '100%',
    elevation: 4,
  },

  button: {
    height: 55,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  explore: {
    height: 55,
    borderRadius: 25.25,
    position: 'relative',
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#1B78E2',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  TextStyle: {
    color: '#B6B6B6',
    textAlign: 'center',
    fontSize: 13,
  },
});
