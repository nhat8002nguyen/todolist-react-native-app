import { StyleSheet } from "react-native";
import {colors} from '../../constants/colors';
import { fonts } from "../../constants/fonts";

export default StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around"
	},
	button: {
		width: 90,
		height: 40,
		borderWidth: 1,
		borderColor: colors.BLUE,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	}
})