import { View, Text, StyleSheet, Button } from "react-native"

export function Home() {

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button 
                title="go back"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    }
});