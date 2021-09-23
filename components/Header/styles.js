import { StyleSheet } from "react-native";
import {colors} from '../../constants/colors';
import { fonts } from "../../constants/fonts";

export default StyleSheet.create({
	header: {
		width: "90%",
		paddingTop: 30,
		paddingBottom: 10,
		paddingHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: 1,
		borderBottomColor: colors.BLUE,
	},
	title: {
		fontSize: fonts.header.fontSize,
		fontWeight: fonts.header.fontWeight,
		color: colors.BLUE,
	}
})