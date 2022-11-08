import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const EWfeedback = () => {
    const [Email, setEmail] = useState('');
    return (
        <View style={styles.container}>
        
            <TextInput
                style={styles.input}
                label="Avalie meu app"
                mode="outlined"
                value={Email}
                onChangeText={(Email) => setEmail(Email)}
            />
            <Button mode="contained" onPress={() => navigation.navigate('home')}>
        Enviar
  </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default EWfeedback;