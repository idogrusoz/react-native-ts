import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "../components/Themed";
import { setIsRandom, setLoading, setRandomCount, setRandomResults } from "../redux/actions/actions";
import { primary } from "../constants/Colors";
import { recipesSelector } from "../redux/selectors";

const RandomScreen = () => {
    const [input, setInput] = useState<string>("1");
    const { randomCount } = useSelector(recipesSelector);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleChange = (e: string) => {
        setInput(e);
        dispatch(setRandomCount(Number(e)));
    };
    const handleSearch = () => {
        if (!Number.isNaN(randomCount)) {
            dispatch(setLoading(true));
            dispatch(setRandomResults(randomCount));
            navigation.navigate("SearchResults");
        }
    };
    useEffect(() => {
        dispatch(setIsRandom(true));
    }, []);
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.center}>
                <Text style={styles.text}>How many recipes would you like to find?</Text>
                <TextInput
                    placeholderTextColor="black"
                    style={styles.input}
                    value={input}
                    keyboardType="number-pad"
                    onChangeText={handleChange}
                />
                <TouchableOpacity onPress={handleSearch} style={styles.button}>
                    <Text style={styles.buttonLabel}>Search</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
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
    buttonLabel: {
        color: "#fff",
    },
    text: {
        fontSize: 16,
        marginBottom: 15,
    },
    input: {
        width: 90,
        height: 50,
        backgroundColor: "white",
        textAlign: "center",
    },
});

export default RandomScreen;
