import Constants from "expo-constants";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableHighlight,
	TouchableNativeFeedback,
	Image,
	View,
	Button,
	Alert,
	Platform,
	StatusBar,
} from "react-native";

import CardsScreen from "./src/screens/CardsScreen";

export default function App() {
	return (
		<View>
			<StatusBar />
			{/* <MainView />
			<ProductView /> */}
			<CardsScreen />
		</View>
	);
}

const customStyles = StyleSheet.create({
	container: {
		// backgroundColor: Platform.OS === "android" ? "orange" : "pink",
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
