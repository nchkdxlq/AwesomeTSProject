import React from 'react';
import { View, Text, Button } from 'react-native';

// props 如何定义类型
const HomePage = (props: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomePage</Text>
      <Button 
        title='Go to Details'
        onPress={ () => props.navigation.navigate('Detail') }
      />
      <Button 
        title='Go to Chat List'
        onPress={ () => props.navigation.navigate('ChatList') }
      />
      <Button
        title='Event'
        onPress={ () => props.navigation.navigate('Event') }
      />
      <Button
        title='User Profile'
        onPress={ () => props.navigation.navigate('UserProfile') }
      />
    </View>
  );
};

export default HomePage;