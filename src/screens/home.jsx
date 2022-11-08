import { View, Button, Text, StyleSheet, Image } from "react-native";

export const Home = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
            source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/544px-Valorant_logo_-_pink_color_version.svg.png",
             }}
style={styles.imagem}></Image>
        <Text style={{
            fontSize: 20,
            lineHeight: 20,
            margin: 45,
            marginBottom: 4,
        }}>
            Bem vindo, esse app fala um pouco sobre o jogo Valorant.
        </Text>

    </View>
);
const styles = StyleSheet.create({

    imagem: {
      width: 100,
      height: 100,
      
    },
  });