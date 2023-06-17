import { Link } from "@react-navigation/native";
import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity} from "react-native";
import styles from "./styles";


export default function LoginPage(){

    const [usuario, setUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');

    return(
        <View style={styles.primeiraView}>
            <View style={styles.informacaoView}>
                
                <Text style={styles.texto}>Email:</Text>
                <TextInput 
                style={styles.caixaTexto}
                placeholder = "exemplo@gmail.com" 
                onChangeText = {newUsuario => setUsuario(newUsuario)}
                defaultValue = {usuario}/>

                <Text style={styles.texto}>Senha:</Text>
                <TextInput
                secureTextEntry={true}
                style={styles.caixaTexto}
                placeholder = "Senha" 
                onChangeText = {newSenha => setSenhaUsuario(newSenha)}
                defaultValue = {senhaUsuario}
                />
                <Link style={styles.bottonText} to={{screen: "Dashboard"}}>Login</Link>
                <Link style={styles.link} to={{screen: "Registro"}}>Cadastrar</Link>
                <Link style={styles.link} to={{screen: "Recuperacao"}}>Recuperaçao de Senha</Link>
            </View>    
        </View>
    )
}