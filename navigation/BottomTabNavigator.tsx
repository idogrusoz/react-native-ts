import { Ionicons, Fontisto } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Search from "../screens/Search";
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
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="SearchTab"
                component={Search}
                options={{ headerTitle: "Search By Ingredients" }}
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
