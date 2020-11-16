import React, { FunctionComponent } from "react";
import { View, Text } from "../Themed";
import { Image, StyleSheet } from "react-native";

type SingleResultProps = {
    name: string;
    image: string;
};

const SingleResult: FunctionComponent<SingleResultProps> = ({ name, image }) => {
    return (
        <View style={styles.wrapper}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.name}>name</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    image: {
        width: 312,
        height: 231,
    },
    name: {
        width: 312,
        textAlign: "center",
        lineHeight: 1.5,
    },
});

export default SingleResult;
