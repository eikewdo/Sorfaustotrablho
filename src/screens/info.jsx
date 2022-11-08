import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export const EWinfo = () => (
    <ScrollView>
<View style={{ flex: 1, justifyContent: 'top', alignItems:'center' }}>
<Image
            source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/544px-Valorant_logo_-_pink_color_version.svg.png",
             }}
style={styles.imagem}></Image>
    <Text style= {{
        fontSize: 20,
        lineHeight: 20,
        margin: 45,
        marginBottom: 4}}>
        Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira pessoa desenvolvido e publicado pela Riot Games. É o primeiro jogo do gênero desenvolvido pela empresa, sendo anunciado pela primeira vez com o codinome Project A em outubro de 2019, em um evento de comemoração de 10 anos de League of Legends.Foi lançado em 2 de junho de 2020 para Microsoft Windows.
    </Text>
    <Text style= {{
        fontSize: 20,
        lineHeight: 20,
        margin: 45,
        marginBottom: 4}}>
    Duas equipes de cinco jogam uma contra a outra, e os jogadores assumem o papel de "agentes" com habilidades únicas. No modo de jogo principal, a equipe atacante tem uma bomba, chamada Spike, que eles precisam plantar em um local. Se a equipe atacante proteger com sucesso a bomba e ela detonar, eles ganharão um ponto. Se a equipe defensora desarmar com sucesso a bomba ou o cronômetro de 100 segundos da rodada expirar, a equipe defensora receberá um ponto. Eliminar todos os membros da equipe adversária também ganha uma rodada. A primeira equipe a vencer o melhor de 24 rodadas vence a partida.O jogo também promove um servidor com tick rate de 128, que garante uma jogabilidade suave e baixo ping com uma expansão global de data centers.
    </Text>

</View>
</ScrollView>
);
const styles = StyleSheet.create({

    imagem: {
      width: 100,
      height: 100,
      
    },
  });