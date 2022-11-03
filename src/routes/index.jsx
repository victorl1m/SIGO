import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";

// creating route context
export function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}