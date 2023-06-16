import { Button, Dimensions, Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.7;

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
        backgroundColor: '#10385c',
        margin: 15,
        padding: 10,
        marginTop: 50,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH,
    },
    viewImagem: {
        height: '200px',
        width: '150px',
        resizeMode: 'cover',
        marginBottom: 10,
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