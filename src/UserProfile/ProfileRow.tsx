import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {
  /** 标题 */
  title: string;
  /** 描述 */
  desc: string;
}

const ProfileRow: React.FC<Props> = ({ title, desc}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container} >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 10,
    paddingRight: 10,
  },
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
    // backgroundColor: 'blue',
  },

  desc: {
    fontSize: 18,
    color: '#484747',
    flexShrink: 1,
    // backgroundColor: 'orange',
  },

  line: {
    height: 1,
    backgroundColor: 'lightgray'
  }
});

export default ProfileRow;