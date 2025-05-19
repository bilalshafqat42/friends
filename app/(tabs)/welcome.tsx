import { ImageBackground } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/welcome.png")}
      style={styles.welcomeScreenContainer}
      contentFit="cover"
    >
      <View style={styles.welcomeScreenContainer}>
        <Link href="/welcome">
          <Image
            source={require("../../assets/images/learning.png")}
            style={styles.playButtonImage}
          />
        </Link>
        <Link href="/welcome">
          <Image
            source={require("../../assets/images/quiz.png")}
            style={styles.playButtonImage}
          />
        </Link>

        <Link href="/">
          <Text>Back to Home</Text>
        </Link>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcomeScreenContainer: {
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
  playButtonImage: {
    width: 135,
    height: 97,
  },
});
