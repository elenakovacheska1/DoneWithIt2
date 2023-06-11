import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

const Card = ({ imageUri, title, price }) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{
					uri: imageUri
						? imageUri
						: "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
				}}
			/>
			<Text style={styles.title}>{title ? title : "Title not found!"}</Text>
			<Text style={styles.price}>
				{price ? `$${parseInt(price)}` : "Price not found!"}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.gray,
		width: "100%",
		borderRadius: 30,
		elevation: 10,
	},
	image: {
		width: "100%",
		height: 250,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		resizeMode: "contain",
	},
	title: {
		fontWeight: "bold",
		padding: 20,
		paddingBottom: 10,
		fontSize: 15,
	},
	price: {
		paddingLeft: 20,
		paddingBottom: 40,
		color: colors.teal,
		fontSize: 15,
	},
});

export default Card;
