import { StyleSheet, Text, View } from "react-native";
import Card from "./elements/Card";
import ListItem from "./elements/ListItem";
import ListItemSeparator from "./elements/ListItemSeparator";

const Listing = ({
	cardImageUri,
	cardTitle,
	cardSubTitle,
	userImage,
	userTitle,
	userSubTitle,
}) => {
	return (
		<View>
			<Card imageUri={cardImageUri} title={cardTitle} subTitle={cardSubTitle} />
			<ListItemSeparator height={20} />
			<ListItem image={userImage} title={userTitle} subTitle={userSubTitle} />
		</View>
	);
};

export default Listing;
