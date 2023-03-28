import { View, Text, Image } from "react-native";
import {
    flexDisplay,
    layoutDisplay,
    utilitiesDisplay,
    textDisplay
} from "./util/_styles";

const Carta = () => {
    return (
        <View style={[
            layoutDisplay["layout--card"],
            utilitiesDisplay["shadow--md"],
        ]}
        >
            <View style={[
                utilitiesDisplay["p--2"],
                textDisplay["txt--center"],   
                utilitiesDisplay["color--bg-dominant"],
            ]}>
                <Text style={[
                    textDisplay["text--xxl"],
                    textDisplay["txt--color-main-title"]
                ]}>Amlito</Text>
            </View>

            <View style={[
                flexDisplay["sz--1"],
                flexDisplay["flex--row"],
                flexDisplay["gap--2"],
                utilitiesDisplay["p--3"],
            ]}>
                <View style={[
                    flexDisplay["sz--1"],
                ]}>
                    <Image style={[
                        utilitiesDisplay["image--responsive"],
                        utilitiesDisplay["color--bg-secondary"],
                        utilitiesDisplay["radius--xl"]
                    ]}
                        source={require('../assets/img/amlito.png')}
                    />
                </View>

                <View style={[
                    flexDisplay["sz--1"],
                    flexDisplay["content--around"],
                    flexDisplay["flex--column"],
                    utilitiesDisplay["p--1"],
                ]}>
                    <Text style={[
                        textDisplay["text--md"],
                        textDisplay["txt--color-sub-title"]
                    ]}>Correo: Amlito@benitojuares.com</Text>
                    <Text style={[
                        textDisplay["text--md"],
                        textDisplay["txt--color-sub-title"]
                    ]}>Celular: 614 111 1111</Text>
                    <Text style={[
                        textDisplay["text--md"],
                        textDisplay["txt--color-sub-title"]
                    ]}>Escuela: Amlito</Text>
                </View>
            </View>

        </View>
    )
}

export { Carta }