import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const TopNavigation = () => {
  return (
    <View style={styles.topNavigationSection}>
      <Image
        source={require("../assets/images/reload.png")}
        style={styles.reloadImage}
      />
      <Image
        source={require("../assets/images/bar.png")}
        style={styles.barImage}
      />
      <Image
        source={require("../assets/images/pause.png")}
        style={styles.pauseImage}
      />
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  topNavigationSection: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
    marginTop: 40,
    columnGap: 5
  },
  reloadImage: {
    width: 45,
    height: 45,
  },
  barImage: {
    width: 272,
    height: 30,
  },
  pauseImage: {
    width: 45,
    height: 45,
  },
});
