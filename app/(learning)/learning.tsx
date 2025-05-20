import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "expo-image";
import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";

const LearningScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/welcome.png")}
      style={styles.learningScreen}
    >
      <TopNavigation/>
      <View style={styles.learningScreen}>
        <Text>Learning</Text>
      </View>
      <BottomNavigation />
    </ImageBackground>
  );
};

export default LearningScreen;

const styles = StyleSheet.create({
  learningScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
