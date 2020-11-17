import React, { FunctionComponent } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../Themed";
import Selected from "../Selected/Selected";
import { primary } from "../../constants/Colors";
import { ingredientsSelector } from "../../redux/selectors";
import { clearSelected, setSearchResults } from "../../redux/actions/actions";
import { Ingredient } from "../../types";
type SelectedWrapperProps = {
    navigate: (route: string) => void;
};

const SelectedWrapper: FunctionComponent<SelectedWrapperProps> = ({ navigate }) => {
    const { selected } = useSelector(ingredientsSelector);
    const dispatch = useDispatch();
    const handleSearch = () => {
        dispatch(setSearchResults(selected.map((item: Ingredient) => item.name)));
        navigate("SearchResults");
        dispatch(clearSelected());
    };
    return (
        <>
            {selected.map((item, i) => {
                return <Selected name={item.name} index={i} key={item.id.toString()} />;
            })}
            {selected.length > 0 && (
                <TouchableOpacity onPress={handleSearch} style={styles.button}>
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
