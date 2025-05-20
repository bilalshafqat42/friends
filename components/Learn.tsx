import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LearnComponent = () => {
  return (
    <View style={styles.learningSection}>
      <Text>Component</Text>
    </View>
  );
};

export default LearnComponent;

const styles = StyleSheet.create({
  learningSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
