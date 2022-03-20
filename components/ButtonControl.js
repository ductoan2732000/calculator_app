import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ButtonControl = ({
  color = "lightblue",
  widthItem,
  heightItem,
  backgroundItem = "white",
  content,
  buttonPress,
  fontSize,
}) => (
  <View style={{ padding: 10 }}>
    <TouchableOpacity
      onPress={() => buttonPress(content)}
      style={[
        styles.button,
        {
          width: widthItem,
          height: heightItem,
          backgroundColor: backgroundItem,
        },
      ]}
    >
      <Text style={{ color: color, fontSize: fontSize }}>{content}</Text>
    </TouchableOpacity>
  </View>
);
export default ButtonControl;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 70,
    borderWidth: 1,
    borderColor: "gray"
  },
});
