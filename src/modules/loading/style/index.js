import React from "react";
import { StyleSheet, Animated } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19c6ff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  imgageBus: {
      width: 230,
      height: 230
  },
  imageParent: {
      width: 90,
      height: 90
  },
  busContainer: {
      position: "absolute",
      width: "100%",
      backgroundColor: "cyan",
      justifyContent: "center",
      alignItems: "center",
      bottom: "40%"
  },
  parentContainer: {
    position: "absolute",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      bottom: "5%"
  },
  textContainer: {
    position: "absolute",
    bottom: 50,
    fontSize: 30,
    color: "#ffffff",
  }
});