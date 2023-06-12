import { Image, StyleSheet, View, Platform } from "react-native";
import colors from "../../../config/colors";
import AppText from "./AppText";
import imagesData from "../../data/placeholderImagesData";

const Card = ({
	imageUri,
	title,
	subTitle,
	cardStyle = {},
	imageStyle = {},
	titleStyle = {},
	subTitleStyle = {},
}) => {
	return (
		<View
			style={
				Platform.OS === "android"
					? [styles.container, cardStyle]
					: [styles.container, styles.shadowProp, cardStyle]
			}
		>
			<Image
				style={[styles.image, imageStyle]}
				source={{
					uri: imageUri ? imageUri : imagesData.notFoundImageUri,
				}}
			/>
			<AppText style={[styles.title, titleStyle]}>
				{title ? title : "Title not found!"}
			</AppText>
			<AppText style={[styles.subTitle, subTitleStyle]}>
				{subTitle ? subTitle : "Subtitle not found!"}
			</AppText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.gray,
		width: "100%",
		borderRadius: 30,
		borderColor: colors.gray,
		borderWidth: 1,
		elevation: 10,
	},
	image: {
		width: "100%",
		height: 250,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		resizeMode: "cover",
	},
	title: {
		fontWeight: "bold",
		padding: 20,
		paddingBottom: 10,
		fontSize: 15,
	},
	subTitle: {
		paddingLeft: 20,
		paddingBottom: 40,
		color: colors.secondary,
		fontSize: 15,
	},
	shadowProp: {
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
});

export default Card;
