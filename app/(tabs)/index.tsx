import { ImageBackground } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.mainBG}
        contentFit="cover"
        source={require("../../assets/images/newBg.jpg")}
      >
        <Image
          source={require("../../assets/images/friends.png")}
          style={styles.logoImage}
        />
        <Link href="/welcome">
          <Image
            source={require("../../assets/images/play.png")}
            style={styles.playButtonImage}
          />
        </Link>
      </ImageBackground>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainBG: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 20,
    borderRadius: 10,
    width: "100%", // makes it take full width of parent
    alignItems: "center", // center text inside
  },
  logoImage: {
    width: 376,
    height: 220,
    marginBottom: 20,
  },
  playButtonImage: {
    width: 135,
    height: 97,
  },
});
