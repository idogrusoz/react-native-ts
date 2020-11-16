import { Actions } from "./redux/actions/actionTypes";

export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
};

export type BottomTabParamList = {
    Search: undefined;
    Random: undefined;
};

export type TabOneParamList = {
    SearchTab: undefined;
};

export type TabTwoParamList = {
    RandomTab: undefined;
};

export type Action<K extends string, T> = {
    type: Actions;
    payload: {
        [key in K]: T;
    };
};

export type Ingredient = {
    id: number;
    name: string;
    image: string;
};

export type IngredientsState = {
    input: string;
    suggestions: Ingredient[];
    selected: Ingredient[];
};

export type RootState = {
    ingredients: IngredientsState;
};
