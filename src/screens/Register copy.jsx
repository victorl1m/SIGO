import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function Register() {
    return(
        <View style={styles.container}>
            <Text>Forgot Password Screen</Text>
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
