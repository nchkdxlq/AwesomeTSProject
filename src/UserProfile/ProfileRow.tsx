import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import localImages from '@/constants/local-images';

interface Props {
  /** 标题 */
  title: string;
  /** 描述 */
  desc: string;
}

const ProfileRow: React.FC<Props> = ({ title, desc}) => {
  return (
    <>
      <View style={styles.container} >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
        <Image style={styles.direction} source={localImages.DIRECTION.RIGHT} />
      </View>
      <View style={styles.line} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    paddingBottom: 18,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  title: {
    fontSize: 18,
    color: '#0f0f0f',
    marginRight: 30,
    flexGrow: 1,
    // backgroundColor: 'blue',
  },

  desc: {
    fontSize: 18,
    color: '#484747',
    flexShrink: 1,
    marginRight: 10,
    // backgroundColor: 'orange',
  },

  direction: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },

  line: {
    height: 1,
    backgroundColor: 'lightgray'
  }
});

export default ProfileRow;