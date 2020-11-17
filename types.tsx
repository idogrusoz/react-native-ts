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
    SearchResults: undefined;
    Recipe: undefined;
};

export type TabTwoParamList = {
    RandomScreen: undefined;
    SearchResults: undefined;
    Recipe: undefined;
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
    recipes: RecipeState;
};

export interface Measure {
    amount: number;
    unitLong: string;
    unitShort: string;
}

export interface ExtendedIngredient {
    aisle: string;
    amount: number;
    consitency: string;
    id: number;
    image: string;
    measures: {
        metric: Measure;
        us: Measure;
    };
    meta: string[];
    name: string;
    original: string;
    originalName: string;
    unit: string;
}

export interface WineProduct {
    id: number;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
    averageRating: number;
    ratingCount: number;
    score: number;
    link: string;
}

export type RecipeSummary = {
    id: number;
    image: string;
    imageType: string;
    likes: number;
    missedIngredientCount: number;
    missedIngredients: ExtendedIngredient[];
    title: string;
    unusedIngredients: ExtendedIngredient[];
    usedIngredientCount: number;
    usedIngredients: ExtendedIngredient[];
};

export type Recipe = {
    id: number;
    title: string;
    image: string;
    imageType: string;
    servings: 2;
    readyInMinutes: 45;
    license: string;
    sourceName: string;
    sourceUrl: string;
    spoonacularSourceUrl: string;
    aggregateLikes: 209;
    healthScore: 19.0;
    spoonacularScore: 83.0;
    pricePerServing: 163.15;
    analyzedInstructions: string[];
    cheap: boolean;
    creditsText: string;
    cuisines: string[];
    dairyFree: boolean;
    diets: string[];
    gaps: string;
    glutenFree: boolean;
    instructions: string;
    ketogenic: boolean;
    lowFodmap: boolean;
    occasions: string[];
    sustainable: boolean;
    vegan: boolean;
    vegetarian: boolean;
    veryHealthy: boolean;
    veryPopular: boolean;
    whole30: boolean;
    weightWatcherSmartPoints: 17;
    dishTypes: string[];
    extendedIngredients: ExtendedIngredient[];
    summary: string;
    winePairing: {
        pairedWines: string[];
        pairingText: string;
        productMatches: WineProduct[];
    };
};

export type RecipeState = {
    searchResults: RecipeSummary[];
    recipe: Recipe | null;
    randomResults: Recipe[];
    loading: boolean;
    isRandom: boolean;
    randomCount: number;
};
