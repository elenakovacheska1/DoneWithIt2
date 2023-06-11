import { Text } from "react-native";
import styles from "./styles";

const AppTextOld = ({ children }) => {
	return <Text style={styles.text}>{children}</Text>;
};

export default AppTextOld;
