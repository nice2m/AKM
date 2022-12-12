import React, { Component } from 'react'
import { View,Text } from 'react-native';
import UserScreen from '../screens/UserScreen';

// 用户路由管理
export default ({navigation,route}) =>{
    return(
        <UserScreen navigation={navigation} route={route} />
    );
}
