import { Text, StyleSheet } from "react-native";

const AppText = ({ children, style }) => {
	return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontFamily: "Avenir",
	},
});

export default AppText;
