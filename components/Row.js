import { Dimensions, StyleSheet, View } from "react-native";

const Row = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const screen = Dimensions.get("window");

// create styles of Row
const styles = StyleSheet.create({
  container: {
      flexDirection: "row",
      paddingLeft: 16,
      paddingRight: 16,
  },
});

export default Row;