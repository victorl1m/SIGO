import { View, Text, StyleSheet, Button } from "react-native";

export function Register({ navigation }) {

    function goBack() {
        const { navigate } = navigation;
        navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Text>Register</Text>
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
