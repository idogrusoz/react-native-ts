import React from "react";
import { ActivityIndicator, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import SingleResult from "../components/SingleResult/SingleResult";
import { View, Text } from "../components/Themed";
import { recipesSelector } from "../redux/selectors";
import { Recipe } from "../types";

const RandomSearchResults = () => {
    const { loading, randomResults } = useSelector(recipesSelector);
    const renderItem = ({ item }: { item: Recipe }) => {
        return <SingleResult id={item.id} title={item.title} image={item.image} key={item.id + item.title} />;
    };

    return loading ? (
        <View style={styles.center}>
            <ActivityIndicator />
        </View>
    ) : randomResults.length > 0 ? (
        <FlatList
            numColumns={2}
            renderItem={renderItem}
            data={randomResults}
            keyExtractor={(item) => item.id + item.title}
        />
    ) : (
        <View style={styles.center}>
            <Text style={styles.text}>No recipes found</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 25,
    },
});

export default RandomSearchResults;
