import { Link } from "@react-navigation/native";
import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet} from "react-native";

export default function Recuperacao( ){

    const [usuario, setUsuario] = useState('');

    return(
        <View style={styles.primeiraView}>
            <View style={styles.informacaoView}>
                <Text style={styles.texto}>Digite seu email:</Text>
                <TextInput 
                style={styles.caixaTexto}
                placeholder = "exemplo@gmail.com" 
                onChangeText = {newUsuario => setUsuario(newUsuario)}
                defaultValue = {usuario}/>
                <Link style={styles.link} to={{screen: "Login"}}>Logar</Link>
                <Link style={styles.link} to={{screen: "Cadastro"}}>Cadastrar</Link>
            </View>     
        </View>
    )
}

const styles = StyleSheet.create({
    primeiraView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',    
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
    imagemView: {
        alignItems: "center",
        justifyContent: 'center',
        width: '100%',
        height: '30%',
    },
    informacaoView: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop:"25%",
        width: '100%',
        height: '70%',
        textAlign: 'left',
    },
    botton: {
        height:'30px',
        width: '20%',
        textAlign: 'center',
        alignItems: "center",
        justifyContent: 'center', 
        backgroundColor: '#04a7a4',
        borderRadius: 5,
        marginTop: '5%',
    },
    bottonText: {
        fontSize: 16,
    },
    imagemLogo: {
        height: '200px',
        width: '200px',
        marginTop: '30%',
    },
    link: {
        fontSize: 17,
        marginTop: '3%', 
    },
    texto: {
        color:'black',
        fontSize: 16,
        padding: 6
    },
    caixaTexto: {
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 1,
        fontSize: 15,
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        
    },
})
