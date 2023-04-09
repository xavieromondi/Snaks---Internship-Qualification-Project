import React, { useLayoutEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  const { recipe } = route.params;
  const { ingredients } = route.params;
  const { image } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTintColor: "#fff",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{recipe}</Text>
      <FlatList
        data={ingredients}
        renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
  },
  image: {
    height: 250,
    resizeMode: "cover",
    marginBottom: 10,
  },
});

export default DetailsScreen;
