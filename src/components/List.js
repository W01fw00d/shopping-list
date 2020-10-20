import React from "react";

import { StyleSheet, Text, View } from "react-native";

export default () => {
  //add emojis
  const list = [
    {
      id: 0,
      name: "Eggs",
      quantity: 6,
    },
    {
      id: 1,
      name: "Milk",
      fixed: true,
    },
    {
      id: 2,
      name: "Bread",
    },
  ];

  return (
    <View style={styles.container}>
      {list.map((item) => (
        <Text key={item.id}>
          {item.quantity ? `${item.quantity} ` : ""}
          {item.name}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
