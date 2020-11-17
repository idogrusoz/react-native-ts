import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../Themed";
import Selected from "../Selected/Selected";
import { primary } from "../../constants/Colors";
import { ingredientsSelector } from "../../redux/selectors";
import { clearSelected, setLoading, setSearchResults } from "../../redux/actions/actions";
import { Ingredient } from "../../types";
import { useNavigation } from "@react-navigation/native";

const SelectedWrapper = () => {
    const { selected } = useSelector(ingredientsSelector);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleSearch = () => {
        dispatch(setLoading(true));
        dispatch(setSearchResults(selected.map((item: Ingredient) => item.name)));
        navigation.navigate("SearchResults");
        dispatch(clearSelected());
    };
    return (
        <>
            {selected.map((item, i) => {
                return <Selected name={item.name} index={i} key={item.id.toString()} />;
            })}
            {selected.length > 0 && (
                <TouchableOpacity onPress={handleSearch} style={styles.button}>
                    <Text style={styles.buttonLabel}>Search</Text>
                </TouchableOpacity>
            )}
        </>
    );
};

const styles = StyleSheet.create({
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
    buttonLabel: {
        color: "#fff",
    },
});

export default SelectedWrapper;
