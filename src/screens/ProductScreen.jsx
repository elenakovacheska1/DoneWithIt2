import { View, StyleSheet, StatusBar, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import placeholderImagesData from "../data/placeholderImagesData";
import colors from "../../config/colors";

const ProductScreen = () => {
	return (
		<View style={styles.containerMain}>
			<StatusBar backgroundColor="black" />
			<View style={styles.containerSquares}>
				<View style={styles.closeIcon}>
					<MaterialCommunityIcons name="close" color="white" size={35} />
				</View>
				<View style={styles.deleteIcon}>
					<MaterialCommunityIcons
						name="trash-can-outline"
						color="white"
						size={35}
					/>
				</View>
			</View>
			<Image
				source={{ uri: placeholderImagesData.notFoundImageUri }}
				style={styles.imageMain}
			></Image>
		</View>
	);
};

const styles = StyleSheet.create({
	containerMain: {
		backgroundColor: colors.black,
		height: "100%",
	},
	containerSquares: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		height: 80,
		backgroundColor: colors.black,
		paddingHorizontal: 10,
		marginBottom: 40,
	},
	imageMain: {
		width: "100%",
		height: 500,
		resizeMode: "cover",
	},
	closeIcon: {},
	deleteIcon: {},
});

export default ProductScreen;
