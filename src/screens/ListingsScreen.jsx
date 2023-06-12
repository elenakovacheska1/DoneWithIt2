import { StyleSheet, View, FlatList } from "react-native";
import Card from "../components/elements/Card.jsx";
import DATA from "../data/listingsData.js";
import ListItemSeparator from "../components/elements/ListItemSeparator.jsx";
import Listing from "../components/Listing.jsx";

const ListingsScreen = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={({ item }) => (
					<Listing
						cardImageUri={item.itemImageUri}
						cardTitle={item.itemTitle}
						cardSubTitle={`$${item.itemPrice}`}
						userImage={item.userImageUri}
						userTitle={item.userTitle}
						userSubTitle={item.userSubTitle}
					/>
				)}
				keyExtractor={(item) => item.id}
				ItemSeparatorComponent={<ListItemSeparator />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
});

export default ListingsScreen;
