import React, { FunctionComponent } from "react";
import { View, Text } from "../Themed";
import { Image, StyleSheet } from "react-native";

type SingleResultProps = {
    title: string;
    image: string;
};

const SingleResult: FunctionComponent<SingleResultProps> = ({ title, image }) => {
    return (
        <View style={styles.wrapper}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title} numberOfLines={1}>
                {title}
            </Text>
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
        width: 156,
        height: 115,
    },
    title: {
        width: 115,
        textAlign: "center",
    },
});

export default SingleResult;
