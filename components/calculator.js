import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ButtonControl from "./ButtonControl";
const calculator = () => {
  const [textShow, setTextShow] = useState("");
  const [textEvent, setTextEvent] = useState([]);
  let controls = [],
    buttons = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", "AC", 0, ".", "="];
  var lastEvents = [];
  const buttonPress = (content) => {
    try {
      if (typeof content === "string" && content === "=") {
        if (typeof textShow === "string" && textShow.includes("/0")) {
          setTextShow("Không thể chia cho 0");
        } else {
          setTextShow(eval(textShow));
        }
        // setTextShow(eval(textShow));
        textEvent.push(
          <Text
            key={textEvent.length}
            style={{ marginTop: 10, fontSize: 25, padding: 20 }}
          >
            {textShow}
          </Text>
        );
        setTextEvent(textEvent);
      } else if (typeof content === "string" && content === "AC") {
        setTextShow("");
        setTextEvent([]);
      } else {
        setTextShow(textShow + content);
      }
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert(e.message);
      }
    }
  };

  buttons.forEach((item, index) => {
    if (Number.isInteger(item)) {
      controls.push(
        <ButtonControl
          buttonPress={buttonPress}
          widthItem={70}
          heightItem={70}
          backgroundItem="white"
          content={item}
          color="black"
          fontSize={20}
          key={index}
        ></ButtonControl>
      );
    } else {
      controls.push(
        <ButtonControl
          buttonPress={buttonPress}
          widthItem={70}
          heightItem={70}
          backgroundItem="white"
          content={item}
          fontSize={24}
          key={index}
        ></ButtonControl>
      );
    }
  });
  return (
    <View style={styles.contain}>
      <View style={styles.board}>
        <View style={styles.lastEvent}>{textEvent}</View>
        <View style={styles.result}>
          <Text style={{ fontSize: 30, padding: 20 }}>{textShow}</Text>
        </View>
      </View>
      <View style={styles.control}>{controls}</View>
    </View>
  );
};

export default calculator;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    padding: 10,
  },
  board: {
    flex: 1,
  },
  lastEvent: {
    position: "absolute",
    right: 0,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    bottom: 50,
  },
  result: {
    width: "100%",
    height: 50,
    position: "absolute",
    bottom: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 50,
  },
  control: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
});
