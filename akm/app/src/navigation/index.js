import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import NewsStack from './NewsRoute';
import UserStack from './UserRoute';
import UIConstant from '../define/UIConstant';
import { Alert, Button } from 'react-native';


const Tab = createBottomTabNavigator()

const IndexRouteName = {
    NewsTab: 'NewsTab',
    UserTab: 'UserTab'
}

// 页面加载路由管理
export default ({ navigation, route }) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName
                        switch (route.name) {
                            case IndexRouteName.NewsTab:
                                iconName = focused ? 'newspaper' : 'newspaper-outline'
                                break;
                            case IndexRouteName.UserTab:
                                iconName = focused ? 'bookmarks' : 'bookmarks-outline'
                            default:
                                break;
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor:UIConstant.color.themeColor,
                    tabBarInactiveTintColor:UIConstant.color.appTitleColor,
                    tabBarStyle:[{
                        display:'flex'
                    }]
                })}
            >
                <Tab.Screen
                    name={IndexRouteName.NewsTab}
                    component={NewsStack}
                    options={{
                        headerShown: false,
                        title:'新闻',
                    }}
                >
                </Tab.Screen>
                <Tab.Screen
                    name={IndexRouteName.UserTab}
                    component={UserStack}
                    options={{
                        headerRight: (() => {
                            <Button
                                title='check'
                                onPress={() => {
                                    Alert.alert('user', 'info');
                                }}
                            ></Button>
                        }),
                    }}
                >
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>

    );
}
