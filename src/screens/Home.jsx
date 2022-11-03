import { View, Text, StyleSheet, Button } from "react-native-web"

export function Home({ navigation }) {

    function goBack() {
        const { navigate } = navigation;
        navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button 
                title="go back"
                onPress={goBack}
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