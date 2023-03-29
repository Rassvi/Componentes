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
            utilitiesDisplay["shadow--sm"],
            utilitiesDisplay["color--bg-complementary-2"],
            utilitiesDisplay["radius--md"],
        ]}
        >
            <View style={[
                utilitiesDisplay["p--2"],
                utilitiesDisplay["color--bg-dominant"],
                utilitiesDisplay["radius--md"],
            ]}>
                <Text style={[
                    textDisplay["text--xxl"],
                    textDisplay["txt--center"],
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
                    flexDisplay["items--center"],
                ]}>
                    <Image style={[
                        utilitiesDisplay["image--responsive"],
                        utilitiesDisplay["color--bg-secondary"],
                        utilitiesDisplay["radius--xl"],
                        utilitiesDisplay["image--contain"]
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
                        textDisplay["txt--color-remarked"]
                    ]}>Correo: Amlito@benitojuares.com</Text>
                    <Text style={[
                        textDisplay["text--md"],
                        textDisplay["txt--color-remarked"]
                    ]}>Celular: 614 111 1111</Text>
                    <Text style={[
                        textDisplay["text--md"],
                        textDisplay["txt--color-remarked"]
                    ]}>Escuela: Amlito</Text>
                </View>
            </View>

        </View>
    )
}

export { Carta }