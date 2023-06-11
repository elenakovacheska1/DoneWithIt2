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
		lineHeight: 60,
		fontSize: 18,
		fontFamily: "Roboto",
	},
});

export default AppText;
