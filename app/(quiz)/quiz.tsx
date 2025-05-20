import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "expo-image";
import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";

const QuizScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/welcome.png")}
      style={styles.quizScreen}
    >
      <TopNavigation/>
      <View style={styles.quizScreen}>
        <Text>Quiz Screen</Text>
      </View>
      <BottomNavigation/>
    </ImageBackground>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  quizScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
