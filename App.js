import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: "transparent",
	},
};

const App = () => {
	const [loaded] = useFonts({
		interBold: require("./assets/fonts/Inter-Bold.ttf"),
		interSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
		interMedium: require("./assets/fonts/Inter-Medium.ttf"),
		interRegular: require("./assets/fonts/Inter-Regular.ttf"),
		interLight: require("./assets/fonts/Inter-Light.ttf"),
	});

	if (!loaded) return null;

	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="Home"
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name={Details} component={Details} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default App;
