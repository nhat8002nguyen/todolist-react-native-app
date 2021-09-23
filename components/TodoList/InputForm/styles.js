import { StyleSheet } from "react-native";
import {colors} from '../../../constants/colors';
import { fonts } from "../../../constants/fonts";

export default StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: colors.BLUE,
		borderRadius: 20,
		justifyContent: "space-between",
		padding: 10,
		marginBottom: 10,
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10,
	},
	delete: {
		flex: 7,
	},
	save: {
		flex: 2,
	}, 
	cancel: {
		flex: 1,
	}
});