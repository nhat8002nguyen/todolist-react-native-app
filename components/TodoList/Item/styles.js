import { StyleSheet } from "react-native";
import {colors} from '../../../constants/colors';
import { fonts } from "../../../constants/fonts";

export default StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: colors.BLUE,
		borderRadius: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		marginBottom: 10,
	},
	itemText: {
		flex: 7,
	},
	title: {
		fontSize: fonts.title.fontSize,
		fontWeight: fonts.title.fontWeight,
	},
	desc: {
		fontSize: fonts.description.fontSize,
		fontWeight: fonts.description.fontWeight,
	},
	editIcon: {
		flex: 2,
	},
	checkIcon: {
		flex: 1,
	},
	ignore: {
		textDecorationLine: "line-through",
		opacity: 0.3,
	}
});