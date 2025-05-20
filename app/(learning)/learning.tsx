import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { ImageBackground } from "expo-image";
import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";
import { spells } from "../../assets/db/spell";
import LearnComponent from "@/components/Learn";
import { FlatList } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

const LearningScreen = () => {
  const router = useRouter();
  // const myData = [
  //   { id: 1, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 2, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 3, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 4, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 5, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 6, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 7, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 8, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 9, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 10, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 11, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 12, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 13, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 14, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 15, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 16, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 17, name: "Bilal", desc: "welcome i am bilal the developer" },
  //   { id: 18, name: "Bilal", desc: "welcome i am bilal the developer" },
  // ];
  return (
    <ImageBackground
      source={require("../../assets/images/welcome.png")}
      style={styles.learningScreen}
    >
      <TopNavigation />
      {/* <View style={styles.learningScreenList}> */}
      <FlatList
        data={spells}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.miniContainer}>
            <Text style={styles.heading}>
              {item.id} - {item.name}
            </Text>
            <Image source={item.image} style={styles.singleLearningImage} />
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => router.push("/details")}
            >
              <Text style={styles.singleButtonText}>Play</Text>
              <Image
                source={item.iconImage}
                style={styles.singleLearningButtonImage}
              />
            </TouchableOpacity>
          </View>
        )}
      />
      {/* </View> */}
      {/* flat list ends here  */}
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
  headingSingle: {
    fontSize: 70,
    fontFamily: "bubbles",
    textAlign: "center",
  },
  miniContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 30,
    rowGap: 30,
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 20,
    borderRadius: 60,
    width: "95%",
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
    width: 50,
    height: 50,
  },
  heading: {
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  playButton: {
    backgroundColor: "#FF049B",
    color: "#fff",
    borderRadius: 45,
    width: 120,
    height: 55,
    textAlign: "center",
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 10,
  },
  singleButtonText: {
    color: "#fff",
    fontSize: 20,
  },
  singleLearningButtonImage: {
    width: 30,
    height: 20,
  },
});
