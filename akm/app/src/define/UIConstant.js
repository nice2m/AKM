
import { Dimensions } from "react-native";

const UIConstant = {

    space:{
        margin: 12,
        marginHalf: 6
    },

    color: {

        // 主题颜色
        themeColor: '#44B5EE',

        // app 标题 灰色
        appTitleColor: '#B5B5B6',

        // 新闻子类别标题颜色
        cateNormalColor: '#656566',

        // 背景灰色
        bgColor:'#F8F8F8',

        // 新闻标题颜色，黑色
        textNormalColor: '#4B4B4B',

        // 交互控件可用时候颜色 蓝色
        activeColor: '#44B5EE',

        // 交互控件不可用颜色 灰色
        inActiveColor: '#979797',
    },

    device: {
        // 屏幕宽度
        width: Dimensions.get('window').width,
        // 屏幕高度
        height: Dimensions.get('window').height,
        // 屏幕点 ：像素 比例
        scale: Dimensions.get('window').scale
    }
}

export default UIConstant