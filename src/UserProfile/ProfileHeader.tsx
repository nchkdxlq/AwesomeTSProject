import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import localImages from '@/constants/local-images';

const ProfileHeader = () => {
  return (
    <>
      <View style={styles.container}>
        <Image style={ {width:70, height:70} } source={localImages.AVATAR.MALE} />
        <View style={styles.center}>
          <View style={styles.info}>
            <Text style={styles.name} numberOfLines={1}>
              {'Knox(诺克斯)'}
            </Text>
            <Image style={ {width:20, height:20} } source={localImages.GENDER.FEMALE}/>
          </View>
          <Text style={styles.signature} >{'学会偷懒，勤于思考！'}</Text>
        </View>
        <Image style={styles.direction} source={localImages.DIRECTION.RIGHT}/>
      </View>
      <View style={styles.line}/>
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  center: {
    // backgroundColor: 'red',
    alignSelf: 'stretch',
    flex: 1,
    paddingTop: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    justifyContent: 'space-between',
  },

  info: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    // backgroundColor: 'blue',
    flexShrink: 1,
    paddingRight: 6,
    fontSize: 20,
    color: '#4d4d4d',
  }, 

  signature: {
    fontSize: 18,
    color: '#6f6f6f',
  },

  direction: {
    height: 20,
    width: 20,
  },

  line: {
    height: 1,
    backgroundColor: 'lightgray',
  }
});

export default ProfileHeader;