import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class FacebookTabBar extends React.Component {
  icons = [];
  constructor(props) {
    super(props);
    this.icons = [];
  }

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue.bind(this));
  }

  setAnimationValue({ value, }) {
    this.icons.forEach((icon, i) => {
      const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      });
    });
  }

  //color between rgb(59,89,152) and rgb(204,204,204)
  iconColor(progress) {
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  render() {
    return (
      <View style={[this.props.style,]}>
        <View style={{width:'100%',height:120,backgroundColor:'#ff0'}}>

        </View>
        <View style={[styles.tabs, this.props.style,]}>
          {this.props.tabs.map((tab, i) => {
            return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <Icon
                name={tab}
                size={30}
                color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
                ref={(icon) => { this.icons[i] = icon; }}
              />
            </TouchableOpacity>;
          })}
        </View>
        <View style={styles.attrCates}>
          <TouchableOpacity onPress={()=>{
            Alert.alert('clicked','info');
          }}>
            <View style={styles.attrCate}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            Alert.alert('clicked','info');
          }}>
            <View style={styles.attrCate}></View>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },

  attrCates:{
    width:'100%',
    height:44,
    flexDirection:'row',
    marginTop:20,
  },

  attrCate: {
    width:100,
    height:40,
    borderWidth:1,
    borderColor:'skyblue',
    backgroundColor:'#ccc',
    marginLeft:12
  },

});

export default FacebookTabBar;