import Constants from "expo-constants";
import { StyleSheet, View, Platform, StatusBar } from "react-native";
import ListingsScreen from "./src/screens/ListingsScreen.jsx";
import ProductScreen from "./src/screens/ProductScreen.jsx";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar />
			{/* <ListingsScreen /> */}
			<ProductScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: Platform.OS === "android" ? 0 : Constants.statusBarHeight,
	},
});
