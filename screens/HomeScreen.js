import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Snaks from "../components/Snaks";

const HomeScreen = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("milkshake");

  const App_ID = "1ef57528";
  const App_KEY = "0e0a841bb6213ea072b378ca1c3513c3	";

  const navigation = useNavigation();
  const [recipe, setRecipe] = useState([]);

  const fetchData = async () => {
    try {
      const result = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`
      );
      const body = await result.json();
      setRecipe(body.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(recipe);
  }, [recipe]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    fetchData();
  }, [query]);

  const getSearch = (text) => {
    setSearch(text);
  };
  const updateQuery = () => {
    setQuery(search);
    setSearch("");
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => getSearch(text)}
          value={search}
          placeholder="Search for snack..."
          placeholderTextColor="#ccc"
        />
        <Button onPress={updateQuery} title="Search" color="#2097ce" />
      </View>

      <View>
        <ScrollView>
          {recipe?.map((item) => (
            <Snaks
              id={item.recipe.calories}
              key={item.recipe.calories}
              title={item.recipe.label}
              calories={item.recipe.calories}
              image={item.recipe.image}
              ingredients={item.recipe.ingredientLines}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  safeAreaContainer: {
    marginTop: 25,
  },
  input: {
    height: 40,
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    color: "#000",
  },
});
export default HomeScreen;
