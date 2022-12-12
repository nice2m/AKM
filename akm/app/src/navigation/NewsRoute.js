import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Platform, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import NewsScreen from '../screens/NewsScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import { headerSlogo } from '../../../app.json'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getStatusBarHeight } from 'react-native-safearea-height'
import UIConstant from '../define/UIConstant';

const Stack = createNativeStackNavigator()

// 新闻首页路由管理
export default ({ navigation, route }) => {
    return (
        <Stack.Navigator
            initialRouteName='News'
        >
            <Stack.Screen
                name='News'
                component={NewsScreen}
                options={{
                    title: '',
                    header: () => headerRender(),
                }}
            >
            </Stack.Screen>
            <Stack.Screen
                name='NewsDetail'
                component={NewsDetailScreen}
            >
            </Stack.Screen>

        </Stack.Navigator>
    );
}

// 渲染新闻首页标题内容
const headerRender = () => {
    return (
        <View style={styles.headerStyle}>
            <View style={styles.headerTitle}>
                <Text style={styles.headerHightLightChar}>A</Text>
                <Text style={styles.headerNormalChar}>ny</Text>
                <Text style={styles.headerHightLightChar}> K</Text>
                <Text style={styles.headerNormalChar}>new</Text>
                <Text style={styles.headerHightLightChar}> M</Text>
                <Text style={styles.headerNormalChar}>obile</Text>
            </View>
                <TouchableOpacity style={styles.headerRightBox} onPress={headerRightOnClick}>
                    <Text style={styles.headerRightText}>
                        热点归档
                    </Text>
                    <Image source={require('../../asset/news_header_clock.png')} style={styles.headerRightImg} />
                </TouchableOpacity>
        </View>
    );
}

// actions
const headerRightOnClick = () => {
    console.log('headerRightOnClick');
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        width: '100%',
        backgroundColor: '#fff',
        marginTop: getStatusBarHeight(false),
        alignContent: 'center'
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: UIConstant.space.margin,
    },
    headerNormalChar: {
        fontSize: 18,
        fontWeight: 'bold',
        color: UIConstant.color.appTitleColor,
    },
    headerHightLightChar: {
        fontSize: 18,
        fontWeight: 'bold',
        color: UIConstant.color.themeColor,
    },

    headerRightBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: UIConstant.space.margin
    },
    headerRightText: {
        fontSize: 17,
        color: UIConstant.color.themeColor,
    },
    headerRightImg: {
        marginLeft: UIConstant.space.marginHalf,
        width: 16,
        height: 16,
    },

});
