import React from 'react';
import { View, Text, Button } from 'react-native';

// props 如何定义类型
const HomePage = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomePage</Text>
      <Button 
        title='Go to Details'
        onPress={ () => props.navigation.navigate('Detail') }
      />
    </View>
  );
};

export default HomePage;