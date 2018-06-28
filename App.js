import React from "react"
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native"

import { createStackNavigator } from "react-navigation"

import CameraComponent from "./Components/Camera"

class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>Home Screen</Text>
        <Button
          title="Go to Camera"
          onPress={() => this.props.navigation.navigate("Camera")}
        />
      </View>
    )
  }
}

class CameraScreen extends React.Component {
  render() {
    return <CameraComponent />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  }
})

export default createStackNavigator(
  {
    Home: HomeScreen,
    Camera: CameraScreen
  },
  {
    initialRouteName: "Home"
  }
)
