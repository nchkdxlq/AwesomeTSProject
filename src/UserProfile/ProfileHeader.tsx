import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
// import localImages from '@/constants/local-images';
import localImages from '../constants/local-images';


const ProfileHeader = () => {
  return (
    <View>
      <Image source={localImages.AVATAR_MALE} />
      <View>
        <View>
          <Text>{'Knox'}</Text>
          {/* <Image source={avatar}/> */}
        </View>
        <Text>{'学会偷懒，勤于思考！'}</Text>
      </View>
      <Image source={localImages.DIRECTION_RIGHT}/>
    </View>
  );
}

const styles = StyleSheet.create({

  wrapper: {

  },

  avatar: {

  },

  info: {

  },



});

export default ProfileHeader;