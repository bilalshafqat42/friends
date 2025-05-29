import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import { ImageBackground } from "expo-image";
import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";
import * as Speech from "expo-speech";
import { spells } from "@/assets/db/spell";
import { useLocalSearchParams } from "expo-router";
import { ImageBackground } from "react-native";

const DetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const spell = spells.find((item) => item.id === Number(id));
  if (!spell) return <Text> Spell not found</Text>;

  const speak = () => {
    // const thingToSay = "1";
    Speech.speak(spell.name);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/welcome.png")}
      style={styles.learningScreen}
    >
      {/* <TopNavigation/> */}
      <View style={styles.singleLearning}>
        <Image
          // source={require("../../assets/images/learning/ant.png")}
          source={spell.image}
          style={styles.singleLearningImage}
        />
        <Text style={styles.headingSingle}>{spell.name}</Text>
        <TouchableOpacity style={styles.playButton} onPress={speak}>
          <Text style={styles.singleButtonText}>Play</Text>
          <Image source={spell.iconImage} style={styles.iconsImagesList} />
        </TouchableOpacity>
      </View>
      <BottomNavigation />
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
    // width: 50,
    height: 180,
    width: "100%",
    resizeMode: "contain",
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
  iconsImagesList: {
    width: 54,
    // height: 42,
    resizeMode: "cover",
  },
});
