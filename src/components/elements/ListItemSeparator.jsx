import { View } from "react-native";

const ListItemSeparator = ({ children, width = "100%", height = 30 }) => {
	return <View style={{ width, height }}>{children}</View>;
};

export default ListItemSeparator;
