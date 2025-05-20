import { ImageBackground } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BottomNavigation from "@/components/BottomNavigation";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/welcome.png")}
      style={styles.welcomeScreenContainer}
      contentFit="cover"
    >
      <View style={styles.welcomeScreenContainer}>
        <View style={styles.miniContainer}>
          <Link href="/learning">
            <Image
              source={require("../../assets/images/learning.png")}
              style={styles.learningButtonImage}
            />
          </Link>
          <Link href="/quiz">
            <Image
              source={require("../../assets/images/quiz.png")}
              style={styles.quizButtonImage}
            />
          </Link>
        </View>
        <BottomNavigation />
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    rowGap: 20,
    width: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },

  learningButtonImage: {
    width: 309,
    height: 170,
  },
  quizButtonImage: {
    width: 309,
    height: 170,
    marginTop: 30,
  },
});
