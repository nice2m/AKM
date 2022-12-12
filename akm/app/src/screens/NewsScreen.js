import React, { Component, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SectionList, Image, Alert } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import UIConstant from '../define/UIConstant'
import IndexCateJSON from '../define/IndexCateJSON'

NewsScreen = ({ navigation, route }) => {
    // data cook
    // 主要数据队列
    const [sectionData, setSectionData] = useState([]);

    // hooks 对表 React.Component 生命周期
    useEffect(() => {
        console.log('render commit 阶段-componentDidMount');
        console.log('render-update componentDidUpdate');
        const json = JSON.parse(IndexCateJSON);
        const cats = json.cats;
        if (cats) {
            let catsList = cats.map((aCat) => {
                return {
                    title: aCat.attrs.cname,
                    data: [aCat]
                }
            });

            console.log("catsList");
            console.log(catsList);
            setSectionData(catsList);
        }
        // 清理函数
        return () => {
            console.log("清理函数-componentWillUnMount");
        }
    }, []);

    const itemClick = (item) => {
        console.log(JSON.stringify(item));
    }

    const renderItem = (item) => {
        // console.log(JSON.stringify(item));
        return (<View style={styles.sectionItemRow}>
            {
                item.item.sites.map((aSite) => {
                    return(
                    <TouchableOpacity style={styles.sectionItem}
                    onPress={()=>itemClick(aSite)}
                    >
                        <Image style={styles.sectionItemImg} 
                        resizeMode={'contain'} 
                        source={{ uri: aSite.attrs.logo }}
                        defaultSource={require('../../asset/zhanweitu.png')}
                         ></Image>
                    </TouchableOpacity>
                    );

                })
            }
        </View>);
    }

    const renderSectionHeader = (section) => {
        // console.log(JSON.stringify(section));
        return (<View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderLeftTitle}>{section.section.title}</Text>
        </View>);
    }

    return (<SectionList
        sections={sectionData}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={(item, index) => {
            return renderSectionHeader(item);
        }}
        renderItem={(item, index) => {
            return renderItem(item);
        }}
    >
    </SectionList>);
}


export default NewsScreen

const styles = StyleSheet.create({
    tabText: {
        fontSize: 16,
        fontWeight: 'normal'
    },
    tabUnderlineStyle: {
        height: 3,
        backgroundColor: UIConstant.color.themeAgainstColor,
    },


    sectionItemRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',

    },
    sectionItem: {
        width: (UIConstant.device.width - UIConstant.space.margin * 4) / 3,
        height: (UIConstant.device.width - UIConstant.space.margin * 4) / 3,
        marginLeft: UIConstant.space.margin,
        marginTop: UIConstant.space.margin,
        backgroundColor: UIConstant.color.bgColor,
        borderRadius: UIConstant.space.marginHalf,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionItemImg: {
        width: 80,
        height: 80,
    },

    sectionHeader: {
        height: 44,
        width: '100%',
        backgroundColor: UIConstant.color.bgColor
    },

    sectionHeaderLeftTitle: {
        color: UIConstant.color.cateNormalColor,
        fontSize: 18,
        fontWeight: '400',
        alignItems: 'center',
        marginLeft: UIConstant.space.margin,
        lineHeight: 44
    },
});
