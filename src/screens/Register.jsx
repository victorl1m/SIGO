import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";

export function Register() {
    return(
        <View style={styles.container}>
            <Text>Register Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00B2CB",
    },
}
);
