import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons'
class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Fenil Modi</Text>
        <Text></Text>
        <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FPEACOCKRIDE-Foodie-Lover-Badge-Multicolour%2Fdp%2FB08152Y6KS&psig=AOvVaw2Nc4YclkXaDzesffJRpjiQ&ust=1665151805767000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDAyv_jy_oCFQAAAAAdAAAAABAE'></img>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default TopBar;