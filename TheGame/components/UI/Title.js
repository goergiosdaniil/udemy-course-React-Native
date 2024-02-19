import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from "../../constants/colors";

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.light,
    textAlign: "center",
    borderWidth: 2,
    borderColor:colors.light,
    padding: 16,
  },
});

export default Title;
