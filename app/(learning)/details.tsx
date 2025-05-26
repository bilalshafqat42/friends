import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ImageBackground } from "expo-image";
import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";

const DetailsScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/welcome.png")}
      style={styles.learningScreen}
    >
      {/* <TopNavigation/> */}
      <View style={styles.singleLearning}>
        <Image
          source={require("../../assets/images/learning/ant.png")}
          style={styles.singleLearningImage}
        />
        <Text style={styles.headingSingle}>ANT</Text>
        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.singleButtonText}>Play</Text>
          <Image
            source={require("../../assets/images/learning/voice.png")}
            style={{ width: 54, height: 42 }}
          />
        </TouchableOpacity>
      </View>
      {/* <BottomNavigation/> */}
    </ImageBackground>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  learningScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  singleLearning: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: 30,
    width: "100%",
    height: "100%",
  },
  singleLearningImage: {
    width: 180,
    height: 180,
  },
  headingSingle: {
    fontSize: 70,
    fontFamily: "bubbles",
    textAlign: "center",
  },

  playButton: {
    backgroundColor: "#FF049B",
    color: "#fff",
    borderRadius: 45,
    width: 286,
    height: 88,
    textAlign: "center",
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 10,
  },
  singleButtonText: {
    color: "#fff",
    fontSize: 75,
  },
});
