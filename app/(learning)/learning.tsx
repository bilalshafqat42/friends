import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "expo-image";
import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";
import { spells } from "../../assets/db/spell";
import LearnComponent from "@/components/Learn";
import { FlatList } from "react-native-gesture-handler";

const LearningScreen = () => {
  const myData = [
    { id: 1, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 2, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 3, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 4, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 5, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 6, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 7, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 8, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 9, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 10, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 11, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 12, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 13, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 14, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 15, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 16, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 17, name: "Bilal", desc: "welcome i am bilal the developer" },
    { id: 18, name: "Bilal", desc: "welcome i am bilal the developer" },
  ];
  return (
    <ImageBackground
      source={require("../../assets/images/welcome.png")}
      style={styles.learningScreen}
    >
      <TopNavigation />
      <View style={styles.learningScreen}>
        <Text>Learning</Text>
        <FlatList
          data={myData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.miniContainer}>
              <Text style={styles.heading}>
                {item.id} - {item.name}
              </Text>
              <Text style={styles.normalText}>{item.desc}</Text>
            </View>
          )}
        />
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
  // mainContainer: {
  //   flex: 1,
  //   backgroundColor: "#000",
  // },
  miniContainer: {
    padding: 20,
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    rowGap: 5,
  },
  heading: {
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  normalText: {
    fontSize: 16,
  },
});
