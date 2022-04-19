import React, { Component, useEffect } from 'react';
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const SplashView = () => {

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <Text>SplashView</Text>
    </View>
  )
}

export default SplashView