import { StyleSheet, View, FlatList } from "react-native";
import Card from "../components/Card.jsx";
import DATA from "../data/cardsData.js";
import ListItemSeparator from "../components/elements/ListItemSeparator.jsx";

const CardsScreen = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={({ item }) => (
					<Card
						imageUri={item.imageUri}
						title={item.title}
						subTitle={`$${item.price}`}
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

export default CardsScreen;
