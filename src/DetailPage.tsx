import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailPage = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>Detail Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  text: {
    backgroundColor: 'blue',
  }
});
export default DetailPage;