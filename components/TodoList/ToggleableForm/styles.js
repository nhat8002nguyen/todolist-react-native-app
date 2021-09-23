import { StyleSheet } from "react-native";
import {colors} from '../../../constants/colors';
import { fonts } from "../../../constants/fonts";

export default StyleSheet.create({
	container: {
		paddingHorizontal: 10,
	},
	addBox: {
		borderWidth: 1,
		borderColor: colors.BLUE,
		borderRadius: 20,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 5,
		marginBottom: 10,
	},
});