import Constants from "expo-constants";
import { StyleSheet, View, Platform, StatusBar } from "react-native";
import CardsScreen from "./src/screens/CardsScreen.jsx";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar />
			<CardsScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop:
			Platform.OS === "android"
				? StatusBar.currentHeight
				: Constants.statusBarHeight,
	},
});
