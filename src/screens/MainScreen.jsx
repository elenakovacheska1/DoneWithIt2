import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	Platform,
	ImageBackground,
	Image,
} from "react-native";

import colors from "../../config/colors";
import AppButton from "../components/elements/AppButton";

const MainView = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				blurRadius={10}
				source={require("../../assets/background.jpg")}
				resizeMode="cover"
				style={styles.backgroundImage}
			>
				<Image
					source={require("../../assets/logo.png")}
					style={styles.logoImage}
				/>
				<Text style={styles.logoText}>Sell What You Don't Need</Text>
				<AppButton style={styles.placeholderRed}>Log in</AppButton>
				<AppButton style={styles.placeholderBlue}>Register</AppButton>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	backgroundImage: {
		flex: 1,
	},
	logoImage: {
		width: 100,
		height: 100,
		alignSelf: "center",
		marginTop: "10%",
	},
	logoText: {
		alignSelf: "center",
		fontWeight: "600",
		fontSize: 25,
		paddingVertical: 20,
	},
	placeholderRed: {
		backgroundColor: colors.primary,
		bottom: 60,
		position: "absolute",
		width: "95%",
	},
	placeholderBlue: {
		backgroundColor: colors.secondary,
		width: "95%",
		bottom: 0,
		position: "absolute",
	},
});

export default MainView;
