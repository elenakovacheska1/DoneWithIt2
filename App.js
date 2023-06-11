import Constants from "expo-constants";
import { StyleSheet, View, Platform, StatusBar } from "react-native";

import CardsScreen from "./src/screens/CardsScreen.jsx";

export default function App() {
	return (
		<View>
			<StatusBar />
			<CardsScreen />
		</View>
	);
}

const customStyles = StyleSheet.create({
	container: {
		paddingTop:
			Platform.OS === "android"
				? StatusBar.currentHeight
				: Constants.statusBarHeight,
	},
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
