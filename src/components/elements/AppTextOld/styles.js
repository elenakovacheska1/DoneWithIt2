import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		fontStyle: "italic",
		fontWeight: "600",
		color: "tomato",
		textTransform: "capitalize",
		textAlign: "center",
		lineHeight: 30,
		// fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		...Platform.select({
			ios: {
				fontSize: 20,
				fontFamily: "Avenir",
			},
			android: {
				fontSize: 18,
				fontFamily: "Roboto",
			},
		}),
	},
});

export default styles;
