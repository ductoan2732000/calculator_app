import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function calculator() {
  return (
    <View style={styles.calculator}>
      <View style={styles.board}></View>
      <View style={styles.control}>
        {/* <Button
          style={styles.buttonEqual}
          onPress={console.log(1181)}
          title="Learn More"
          color="#841584"
        ></Button> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
  },
  board: {
    flex: 1,
    backgroundColor: "red",
  },
  control: {
    flex: 1,
    backgroundColor: "green",
  },
  // buttonEqual: {
  //   width: "20%",
  //   height: "20%",
  // },
});
