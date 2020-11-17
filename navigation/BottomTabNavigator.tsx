import { Ionicons, Fontisto } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useSelector } from "react-redux";
import Recipe from "../components/Recipe/Recipe";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { recipesSelector } from "../redux/selectors";
import Search from "../screens/Search";
import SearchResults from "../screens/SearchResults";
import TabTwoScreen from "../screens/TabTwoScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator initialRouteName="Search" tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
            <BottomTab.Screen
                name="Search"
                component={SearchTabNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons size={30} style={{ marginBottom: -3 }} name="ios-search" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Random"
                component={RandomTabNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="random" color={color} size={20} style={{ marginBottom: -3 }} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function SearchTabNavigator() {
    const { recipe } = useSelector(recipesSelector);
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="SearchTab"
                component={Search}
                options={{ headerTitle: "Search By Ingredients" }}
            />
            <TabOneStack.Screen
                name="SearchResults"
                component={SearchResults}
                options={{ headerTitle: "Matching Recipes" }}
            />
            <TabOneStack.Screen
                name="Recipe"
                component={Recipe}
                options={{ headerTitle: recipe?.title.toUpperCase() }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function RandomTabNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen name="RandomTab" component={TabTwoScreen} options={{ headerTitle: "Random Recipes" }} />
        </TabTwoStack.Navigator>
    );
}
