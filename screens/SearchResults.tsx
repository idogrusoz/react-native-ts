import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import SingleResult from "../components/SingleResult/SingleResult";
import { View, Text } from "../components/Themed";
import { recipesSelector } from "../redux/selectors";
import { RecipeSummary } from "../types";

const SearchResults = () => {
    const { loading, searchResults } = useSelector(recipesSelector);

    return loading ? (
        <View style={styles.center}>
            <ActivityIndicator />
        </View>
    ) : searchResults.length > 0 ? (
        <View style={styles.results}>
            {searchResults.map((item: RecipeSummary) => {
                return <SingleResult id={item.id} title={item.title} image={item.image} key={item.id + item.title} />;
            })}
        </View>
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
    results: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "flex-start",
    },
    text: {
        fontSize: 25,
    },
});

export default SearchResults;
