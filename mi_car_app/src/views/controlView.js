import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { KorolJoystick } from "korol-joystick";
import { TouchableOpacity } from 'react-native-gesture-handler';

const ControlView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.controllerView}>
        <KorolJoystick color="#c2c2c2" radius={75} onMove={(data) => console.log(data)} />
        <TouchableOpacity style={{ justifyContent: 'center', width: '20%', height: '100%', alignItems: 'center' }}>
          <Image source={require('../assets/images/pedal.png')} style={{ width: 80, height: 80, marginTop: 20 }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  controllerView: {
    position: 'absolute',
    width: '100%',
    bottom: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})


export default ControlView