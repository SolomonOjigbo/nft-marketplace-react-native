import { TouchableOpacity, Image, View, Text } from "react-native";
import {} from "react-native";
import React from "react";
import { COLORS, SHADOWS } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
	return (
		<TouchableOpacity
			style={{
				width: 40,
				height: 40,
				backgroundColor: COLORS.white,
				position: "absolute",
				alignItems: "center",
				justifyContent: "center",
				...SHADOWS.light,
				...props,
			}}
			onPress={handlePress}
		>
			<Image
				source={imgUrl}
				resizeMode="contain"
				style={{ width: 24, height: 24 }}
			/>
		</TouchableOpacity>
	);
};

export const RectButton = () => {
	return (
		<View>
			<Text>Circle</Text>
		</View>
	);
};
