import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Snaks = ({ title, calories, image, ingredients }) => {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate("Details", { ingredients, image });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navigateToDetails}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.calories}>{calories} calories</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 5,
  },
  calories: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});
export default Snaks;
