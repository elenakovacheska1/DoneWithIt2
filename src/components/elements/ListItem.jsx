import { Image, StyleSheet, View } from "react-native";
import imagesData from "../../data/placeholderImagesData";
import AppText from "./AppText";

const ListItem = ({ image, title, subTitle }) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{ uri: image ? image : imagesData.notFoundImageUri }}
			></Image>
			<View style={styles.containerText}>
				<AppText style={styles.title}>
					{title ? title : "Title not found"}
				</AppText>
				<AppText>{subTitle ? subTitle : "Subtitle not found"}</AppText>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		width: "100%",
		height: 100,
		margin: 10,
	},
	image: {
		borderRadius: 50,
		height: 100,
		width: 100,
	},
	containerText: {
		flex: 1,
		justifyContent: "center",
		width: 100,
		height: 100,
		paddingHorizontal: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 15,
	},
});

export default ListItem;
