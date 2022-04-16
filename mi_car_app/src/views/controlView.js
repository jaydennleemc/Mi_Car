import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { KorolJoystick } from "korol-joystick";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { io } from "socket.io-client";

let socket = null;

const ControlView = () => {

  // const [ws, setWs] = useState(null);

  // useEffect(() => {
  //   ws ? initConnectSocket() : setWs(io('http://192.168.0.106:3000', {path:'/socket'}));
  //   return () => {
  //     ws && ws.close();
  //   };
  // }, [ws]);

  // const initConnectSocket = () => {
  //   console.log('initConnectSocket');
  //   ws.on('connect', () => {
  //     console.log('mi_car_client connect success');
  //   });

  //   ws.on('disconnect', () => {
  //     console.log('mi_car_client disconnect');
  //   });

  //   ws.on('error', error => {
  //     console.log(error);
  //   });
  // };

  const connectSocket = () => {
    console.log('connectSocket');
    socket = io('http://192.168.0.116:3000', {autoConnect:false});
    socket.connect()
    socket.on('connect', () => {
      console.log('mi_car_client connect success');
    });

    socket.on('disconnect', () => {
      console.log('mi_car_client disconnect');
    });
  };

  const disconnectSocket = () => {
    console.log('disconnectSocket');
    socket.close();
  };

  const sendMessage = () => {
    console.log('sendMessage');
    socket.emit('message', 'Hello World');
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 30, marginTop: 20, flexDirection: 'row' }}>
        <Button title="Connect Socket" onPress={connectSocket} />
        <Button title="Disconnect Socket" onPress={disconnectSocket} />
        <Button title="Send Socket" onPress={sendMessage} />
      </View>

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