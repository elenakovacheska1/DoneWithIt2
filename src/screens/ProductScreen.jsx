import { View, StyleSheet, StatusBar, Image } from "react-native";

import colors from "../../config/colors";

const ProductView = () => {
	return (
		<View style={styles.containerMain}>
			<StatusBar backgroundColor="black" />
			<View style={styles.containerSquares}>
				<View style={styles.redSquare}></View>
				<View style={styles.blueSquare}></View>
			</View>
			<Image
				source={require("../../assets/chair.webp")}
				style={styles.imageMain}
			></Image>
		</View>
	);
};

const styles = StyleSheet.create({
	containerMain: {
		flex: 1,
		backgroundColor: "black",
	},
	containerSquares: {
		flex: 0.5,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		height: "15%",
		backgroundColor: colors.black,
		paddingHorizontal: 10,
	},
	imageMain: {
		width: "100%",
		height: "70%",
		resizeMode: "cover",
	},
	redSquare: {
		width: 50,
		height: 50,
		backgroundColor: colors.primary,
	},
	blueSquare: {
		width: 50,
		height: 50,
		backgroundColor: colors.secondary,
	},
});

export default ProductView;
