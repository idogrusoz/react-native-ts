import React, { FunctionComponent } from "react";
import { View, Text } from "../Themed";
import { Image, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setRecipe, setRecipeWithFetch } from "../../redux/actions/actions";
import { useNavigation } from "@react-navigation/native";
import { recipesSelector } from "../../redux/selectors";

type SingleResultProps = {
    id: number;
    title: string;
    image: string;
};

const SingleResult: FunctionComponent<SingleResultProps> = ({ id, title, image }) => {
    const { randomResults, isRandom } = useSelector(recipesSelector);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handlePress = () => {
        dispatch(setLoading(true));
        if (isRandom) {
            dispatch(setRecipe(randomResults.filter((item) => item.id === id)[0]));
        } else {
            dispatch(setRecipeWithFetch(id));
        }
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
