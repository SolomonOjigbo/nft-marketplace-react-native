import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import React from "react";

const FocusedStatusBar = () => {
	const useIsFocused = useIsFocused();

	return useIsFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
