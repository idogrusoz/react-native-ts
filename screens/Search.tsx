import { StackScreenProps } from "@react-navigation/stack";
import React, { FunctionComponent } from "react";
import { TouchableOpacity, StyleSheet, useColorScheme, TouchableWithoutFeedback, Keyboard } from "react-native";
import Autocomplete from "react-native-autocomplete-input";
import { useDispatch, useSelector } from "react-redux";
import SelectedWrapper from "../components/SelactedWrapper/SelectedWrapper";
import { View, Text } from "../components/Themed";
import Colors from "../constants/Colors";
import { setInput, setSelected, setSuggestions, setSuggestionsAsync } from "../redux/actions/actions";
import { RootState, TabOneParamList } from "../types";

type SearchProps = StackScreenProps<TabOneParamList, "SearchTab">;

const Search: FunctionComponent<SearchProps> = ({ navigation }) => {
    const theme = useColorScheme() || "light";
    const { input, suggestions } = useSelector((state: RootState) => state.ingredients);
    const dispatch = useDispatch();
    const handleChange = (text: string) => {
        dispatch(setInput(text));
        dispatch(setSuggestions(text));
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles(theme).wrapper}>
                <SelectedWrapper navigate={navigation.navigate} />
                <Autocomplete
                    data={suggestions && suggestions.length > 0 ? [...suggestions] : []}
                    value={input}
                    style={styles(theme).input}
                    defaultValue={input}
                    placeholder="Search"
                    onChangeText={handleChange}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                dispatch(setSelected(item));
                                dispatch(setInput(""));
                                dispatch(setSuggestionsAsync([]));
                            }}
                        >
                            <View>
                                <Text style={styles(theme).result}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = (theme: "light" | "dark") => {
    return StyleSheet.create({
        wrapper: {
            flex: 1,
        },
        input: {
            color: Colors[theme].text,
            backgroundColor: Colors[theme].background,
            borderColor: Colors[theme].text,
            paddingHorizontal: 20,
            paddingVertical: 15,
        },
        result: {
            paddingHorizontal: 15,
            marginVertical: 10,
        },
    });
};

export default Search;
