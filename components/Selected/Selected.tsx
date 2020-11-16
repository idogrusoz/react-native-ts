import React, { FunctionComponent } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { removeSelected } from "../../redux/actions/actions";
import { View, Text } from "../Themed";

interface SelectedProps {
    name: string;
    index: number;
}

const Selected: FunctionComponent<SelectedProps> = ({ name, index }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(removeSelected(index));
    };
    return (
        <View style={styles.wrapper}>
            <Text>{name}</Text>
            <TouchableOpacity style={styles.delete} onPress={handleDelete}>
                <Text>x</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 25,
        paddingHorizontal: 30,
        marginVertical: 10,
    },
    delete: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: 20,
        width: 30,
    },
});

export default Selected;
