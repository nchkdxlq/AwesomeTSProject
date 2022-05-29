import React from "react";
import { Button, View, NativeModules, NativeEventEmitter } from "react-native";

const { UserModule } = NativeModules;

const userEventEmitter = new NativeEventEmitter(UserModule);

// 监听 native 的事件
userEventEmitter.addListener("userDidLogin", (info) => {
  console.log('UserModuleEvent', info);
});

const NativeRNEventPage = () => {
  return (
    <View>
      <Button
        title="Click send event to native"
        onPress={onPressSendEventToNative}
      />
      <Button
        title="get user detail"
        onPress={onPressGetUserDetail}
      />
    </View>
  );
}

const onPressSendEventToNative = () => {
  console.log('onPressSendEventToNative');

  UserModule.userDidUpdated({
    name:"Rose",
    age: 20,
  });
}

const onPressGetUserDetail = async () => {
  try {
    const detail = await UserModule.getUserDetail("swift");
    console.log(detail);
  } catch (error) {
    console.log(error);
  }
}

export default NativeRNEventPage;