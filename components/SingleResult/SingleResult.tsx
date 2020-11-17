import React, { FunctionComponent } from "react";
import { View, Text } from "../Themed";
import { Image, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { setLoading, setRecipeWithFetch } from "../../redux/actions/actions";
import { useNavigation } from "@react-navigation/native";

type SingleResultProps = {
    id: number;
    title: string;
    image: string;
};

const SingleResult: FunctionComponent<SingleResultProps> = ({ id, title, image }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handlePress = () => {
        dispatch(setLoading(true));
        dispatch(setRecipeWithFetch(id));
        navigation.navigate("Recipe");
    };
    return (
        <TouchableHighlight onPress={handlePress}>
            <View style={styles.wrapper}>
                <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.title} numberOfLines={1}>
                    {title}
                </Text>
            </View>
        </TouchableHighlight>
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
