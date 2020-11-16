import * as Linking from "expo-linking";

export default {
    prefixes: [Linking.makeUrl("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    Search: {
                        screens: {
                            Search: "search",
                        },
                    },
                    Random: {
                        screens: {
                            TabTwoScreen: "two",
                        },
                    },
                },
            },
            NotFound: "*",
        },
    },
};
