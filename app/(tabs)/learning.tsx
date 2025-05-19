import React from "react";
import { StyleSheet, Text, View } from "react-native";

const learning = () => {
  return (
    <View style={styles.learningContainer}>
      <Text>learning</Text>
    </View>
  );
};

export default learning;

const styles = StyleSheet.create({
  learningContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
