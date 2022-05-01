import React from "react";
import { 
  Text, 
  View,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Image,
} from "react-native";

import { Chat } from "./Chat/Chat"

const chatList: Chat[] = [
  {
    identifier: 'zhangsan',
    name: '张三',
    preview: 'OK, I will do it.'
  },
  {
    identifier: 'lisi',
    name: '李四',
    preview: 'OK, I will do it.'
  },
  {
    identifier: 'wangwu',
    name: '王五',
    preview: 'OK, I will do it.'
  },
];


const ChatRenderItem = ({ item }: ListRenderItemInfo<Chat>) => {
  const avatar = {uri: "https://reactnative.dev/img/tiny_logo.png"};
  return (
    <View style={styles.item}>
      <Image style={styles.avatar} source={avatar}/>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{'14:28'}</Text>
        </View>
        <Text style={styles.preview}>{item.preview}</Text>
      </View>
    </View>
  );
};

const ChatListPage = () => {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={chatList}
        renderItem={ChatRenderItem}
        keyExtractor={item => item.identifier}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    height: '100%',
  },

  item: {
    height: 70,
    padding: 10,
    backgroundColor: 'gray',
    
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center', // 默认值 stretch
  },

  avatar: {
    height: 50,
    width: 50,
  },

  content: {
    backgroundColor: 'red',
    paddingLeft: 10,
    height: 50,

    flex: 1, // 在父容器的`主轴`上如何填满可用区域
    flexDirection: "column", // 默认值为 column
    justifyContent: "space-between",
  },

  contentTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#bb00ff',
  },

  name: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#00ff00',
  },

  time: {
    fontSize: 12,
    color: '#a9a9a9',
    backgroundColor: '#6b906b',
    alignSelf: 'flex-end', // 设置单个元素在 `次轴` 上的布局方式
  },
  
  preview: {
    fontSize: 14,
    color: '#a9a9a9',
    backgroundColor: '#0000ff',
  },

});

export default ChatListPage;