import { NavigationContainerRef, StackActions } from "@react-navigation/native";
import { createRef } from "react";

export const navigationRef = createRef<NavigationContainerRef>();

export function replace(name: string) {
    navigationRef.current?.dispatch(StackActions.replace(name));
}
