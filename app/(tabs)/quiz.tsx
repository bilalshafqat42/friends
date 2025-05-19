import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const quiz = () => {
  const bgImage = { uri: "" };
  return (
    <ImageBackground
      source={require("../../assets/images/bg.png")}
      resizeMode="cover"
    >
      <View style={styles.quizContianer}>
        <Text>quiz</Text>
      </View>
    </ImageBackground>
  );
};

export default quiz;

const styles = StyleSheet.create({
  quizContianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
