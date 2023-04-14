import { Button, Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Item(props){
    return(
        <View style={styles.container}>
            <View style={styles.viewImagem}>
                <Image style={styles.img} source={{
                    uri: props.item.urlItem
                }}/>
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.titulo}>{props.item.nome}</Text>
                <Text style={styles.descric}>{props.item.descricao}</Text> 
                <Button style={styles.btnTrocar} title="Trocar" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '95%',
        height: 170,
        backgroundColor: '#cdf8c9',
        borderRadius: 15,
    },
    viewImagem: {
        width: '30%',
        padding: 5,
        borderRadius: 15,
    },
    img: {
        width: '100%',
        height: '80%',
        borderRadius: 15, 
    },
    viewDados: {
        width: '60%',
        padding: 10,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    descric: {
        marginBottom: 10,
    },
    btnTrocar: {
        borderRadius: 20,
        bottom: 20,
    },
});
