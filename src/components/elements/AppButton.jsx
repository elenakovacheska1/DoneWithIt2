import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../../config/colors";

const AppButton = ({ children, onPress = () => {}, style }) => {
	return (
		<TouchableOpacity
			style={{ ...styles.container, ...style }}
			onPress={onPress}
		>
			<Text style={styles.buttonText}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		width: "100%",
		height: 50,
		flex: 0.1,
		justifyContent: "center",
		alignItems: "center",
		elevation: 20,
		borderRadius: 30,
		margin: 10,
	},
	buttonText: {
		fontWeight: "bold",
		fontSize: 20,
		textTransform: "uppercase",
	},
});

export default AppButton;
