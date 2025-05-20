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
        <View style={styles.miniContainer}>
          <Link href="/welcome">
            <Image
              source={require("../../assets/images/learning.png")}
              style={styles.learningButtonImage}
            />
          </Link>
          <Link href="/welcome">
            <Image
              source={require("../../assets/images/quiz.png")}
              style={styles.quizButtonImage}
            />
          </Link>
        </View>
        <View style={styles.bottomNavigation}>
          <Link href="/" style={styles.leftNav}>
            <Image
              source={require("../../assets/images/left.png")}
              style={styles.navigationLeft}
            />
          </Link>
          <Link href="/" style={styles.rightNav}>
            <Image
              source={require("../../assets/images/right.png")}
              style={styles.navigationRight}
            />
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcomeScreenContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
  },
  miniContainer: {
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
  bottomNavigation: {
    // width: 100,
    // position: "fixed",
    // bottom: 0,
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    width: "90%",
  },
  learningButtonImage: {
    width: 309,
    height: 170,
    // marginBottom: 30,
  },
  quizButtonImage: {
    width: 309,
    height: 170,
    marginTop: 30,
  },
  // leftNav: {
  //   width: "50%",
  //   position: "fixed",
  //   left: 20,
  //   bottom: 20,
  // },
  // rightNav: {
  //   position: "fixed",
  //   right: 20,
  //   bottom: 20,
  //   width: "50%",
  // },
  // navigationLeft: {
  //   width: 50,
  //   right: 50,
  //   marginBottom: 20,
  // },
  // navigationRight: {
  //   width: 50,
  //   right: 50,
  //   marginBottom: 20,
  // },
});
