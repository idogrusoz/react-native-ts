import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SingleResult from "../components/SingleResult/SingleResult";
import { View, Text } from "../components/Themed";
import { setSearchResultsAsync } from "../redux/actions/actions";
import { recipesSelector } from "../redux/selectors";
import { RecipeSummary } from "../types";

const SearchResults = () => {
    const { loading, searchResults } = useSelector(recipesSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(setSearchResultsAsync([]));
        };
    }, []);
    return loading ? (
        <View style={styles.center}>
            <ActivityIndicator />
        </View>
    ) : searchResults.length > 0 ? (
        <View style={styles.results}>
            {searchResults.map((item: RecipeSummary) => {
                return <SingleResult title={item.title} image={item.image} key={item.id.toString()} />;
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
