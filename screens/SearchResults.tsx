import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SingleResult from "../components/SingleResult/SingleResult";
import { View, Text } from "../components/Themed";
import { setIsRandom, setLoading, setRandomResults } from "../redux/actions/actions";
import { recipesSelector } from "../redux/selectors";
import { Recipe, RecipeSummary } from "../types";

const SearchResults = () => {
    const { loading, searchResults, randomResults, isRandom } = useSelector(recipesSelector);

    const results = isRandom ? randomResults : searchResults;
    return loading ? (
        <View style={styles.center}>
            <ActivityIndicator />
        </View>
    ) : results.length > 0 ? (
        isRandom ? (
            <View style={styles.results}>
                {randomResults.map((item: Recipe) => {
                    return (
                        <SingleResult id={item.id} title={item.title} image={item.image} key={item.id + item.title} />
                    );
                })}
            </View>
        ) : (
            <View style={styles.results}>
                {searchResults.map((item: RecipeSummary) => {
                    return (
                        <SingleResult id={item.id} title={item.title} image={item.image} key={item.id + item.title} />
                    );
                })}
            </View>
        )
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
