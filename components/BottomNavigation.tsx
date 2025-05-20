import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Image } from "react-native";
import React from "react";

const BottomNavigation = () => {
  return (
    <View style={styles.bottomNavigation}>
      <Link href="/welcome">
        <Image source={require("../assets/images/left.png")} />
      </Link>
      <Link href="/welcome">
        <Image source={require("../assets/images/right.png")} />
      </Link>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  bottomNavigation: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    width: "90%",
  },
});
