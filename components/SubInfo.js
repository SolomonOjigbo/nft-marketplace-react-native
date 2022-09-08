import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

export const NFTTitle = () => {
	return (
		<View>
			<Text>SubInfo</Text>
		</View>
	);
};

export const EthPrice = () => {
	return (
		<View>
			<Text>SubInfo</Text>
		</View>
	);
};

export const ImgageCmp = () => {
	return (
		<Image
			source={imgUrl}
			resizeMode="contain"
			style={{
				width: 48,
				height: 48,
				marginLeft: index === 0 ? 0 : -SIZES.font,
			}}
		/>
	);
};

export const People = () => {
	return (
		<View style={{ flexDirection: "row" }}>
			{[assests.person02, assets.person03, assests.person04].map(
				(imgUrl, index) => (
					<ImgageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
				)
			)}
		</View>
	);
};

export const EndDate = () => {
	return (
		<View
			style={{
				paddingHorizontal: SIZES.font,
				paddingVertical: SIZES.base,
				backgroundColor: COLORS.white,
				borderRadius: SIZES.font,
				justifyContent: "center",
				alignItems: "center",
				...SHADOWS.light,
				elevation: 1,
				maxWidth: "50%",
			}}
		>
			<Text
				style={{
					fontFamily: FONTS.regular,
					fontSize: SIZES.small,
					color: COLORS.primary,
				}}
			>
				Ending in
			</Text>
			<Text
				style={{
					fontFamily: FONTS.semiBold,
					fontSize: SIZES.medium,
					color: COLORS.primary,
				}}
			>
				12h 30min
			</Text>
		</View>
	);
};

export const SubInfo = () => {
	return (
		<View
			style={{
				width: "100%",
				paddingHorizontal: SIZES.font,
				marginTop: -SIZES.extraLarge,
				flexDirection: "row",
				justifyContent: "space-between",
			}}
		>
			<Text>SubInfo</Text>
		</View>
	);
};
