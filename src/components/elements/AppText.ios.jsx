import { Text, StyleSheet } from "react-native";

const AppText = ({ children }) => {
	return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontStyle: "italic",
		fontWeight: "600",
		color: "tomato",
		textTransform: "capitalize",
		textAlign: "center",
		lineHeight: 30,
		fontSize: 20,
		fontFamily: "Avenir",
	},
});

export default AppText;
