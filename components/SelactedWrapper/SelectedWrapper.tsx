import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../types";
import { Text } from "../Themed";
import Selected from "../Selected/Selected";
import { primary } from "../../constants/Colors";

const SelectedWrapper = () => {
    const { selected } = useSelector((state: RootState) => state.ingredients);
    return (
        <>
            {selected.map((item, i) => {
                return <Selected name={item.name} index={i} key={item.id.toString()} />;
            })}
            {selected.length > 0 && (
                <TouchableOpacity style={styles.button}>
                    <Text>Search</Text>
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
});

export default SelectedWrapper;
