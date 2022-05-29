import React from "react";
import { View, Text, FlatList } from "react-native";
import ProfileRow from "./ProfileRow";
import ProfileHeader from "./ProfileHeader";


const data = [
  {
    title: '短号',
    desc: '10086',
  },
  {
    title: '电话',
    desc: '1008610098',
  },
  {
    title: '邮箱',
    desc: '10086@gmail.com',
  },
  {
    title: '二维码',
    desc: '',
  },
  {
    title: '部门',
    desc: '互联网事业部/电商技术中心/移动端技术部/iOS开发',
  },
]


const UserProfile = () => {
  return (
    <>
      <ProfileHeader />
      <FlatList
        data={data}
        renderItem = { ({item}) => <ProfileRow title={item.title} desc={item.desc}/> } 
      />
    </>
  );
}

export default UserProfile;

