import React from "react";
import { useSelector } from "react-redux";
import { recipesSelector } from "../../redux/selectors";
import * as WebBrowser from "expo-web-browser";
import { View, Text } from "../Themed";
import { ActivityIndicator, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ExtendedIngredient } from "../../types";
import { primary } from "../../constants/Colors";

const Recipe = () => {
    const { recipe, loading } = useSelector(recipesSelector);
    const handlePress = async () => {
        const uri: string = recipe!.spoonacularSourceUrl || recipe!.sourceUrl;
        await WebBrowser.openBrowserAsync(uri);
    };
    return !loading && recipe ? (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: recipe.image }} style={{ flex: 1 }} />

            <View style={styles.info}>
                <Text style={styles.title}>Ingredients</Text>
                {recipe.extendedIngredients.map((item: ExtendedIngredient) => {
                    return (
                        <Text style={styles.listItem} key={item.id + item.name}>
                            - {item.name}
                        </Text>
                    );
                })}
                <TouchableOpacity onPress={handlePress} style={styles.button}>
                    <Text>More Info</Text>
                </TouchableOpacity>
            </View>
        </View>
    ) : (
        <View style={styles.center}>
            <ActivityIndicator />
        </View>
    );
};

const styles = StyleSheet.create({
    info: {
        display: "flex",
        flexDirection: "column",
    },
    center: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        color: "#fff",
        backgroundColor: primary,
        height: 40,
        width: 90,
        alignSelf: "center",
        marginVertical: 15,
    },
    listItem: {
        fontSize: 25,
    },
    title: {
        fontSize: 30,
        textAlign: "center",
    },
});

export default Recipe;
