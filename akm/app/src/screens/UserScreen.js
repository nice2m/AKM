import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

export default () => {
  list = [
    'Tab #1',
    'Tab #2 word word',
    'Tab #3 word word word',
   'Tab #4 word word word word',
   'Tab #5',
   'Tab #6 word word word word',
  ]

  return <ScrollableTabView
    style={{ marginTop: 20 }}
    initialPage={0}
    renderTabBar={() => <ScrollableTabBar />}
  >
    {
      list.map((item,index)=>{
        console.log(index);
        return <Text tabLabel={item}>{`${item}_${index}`}</Text>
      })
    }
  </ScrollableTabView>;
}