import { View, Text, Image } from "react-native";
import {
    flexDisplay,
    layoutDisplay,
    utilitiesDisplay,
    textDisplay
} from "./util/_styles";

const CartaLinks = () => {
    return (
        <View style={[
            layoutDisplay["layout--card"],
            utilitiesDisplay["shadow--sm"],
            utilitiesDisplay["color--batman-fondo"],
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
                ]}>Batman</Text>
            </View>

            <View style={[
                flexDisplay["sz--2"],
                flexDisplay["flex--row"],
                flexDisplay["gap--2"],
                utilitiesDisplay["p--2"],
            ]}>
                <View style={[
                    flexDisplay["sz--1"],
                    flexDisplay["items--center"],
                ]}>
                    <Image style={[
                        utilitiesDisplay["image--responsive"],
                        utilitiesDisplay["color--bg-secondary"],
                        utilitiesDisplay["radius--xl"],
                    ]}
                        source={require('../assets/img/maman.jpg')}
                    />
                </View>

                <View style={[
                    flexDisplay["sz--2"],
                    flexDisplay["flex--column"],
                    utilitiesDisplay["p--1"],
                ]}>
                    <Text style={[
                        textDisplay["text--ls"],
                        textDisplay["txt--justify"],
                        textDisplay["txt--color-main-title"],
                        flexDisplay["items--start"]
                    ]}>
                        En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la
                        ciudad de Gotham y el vínculo de esta con su propia familia. Además, entrará en conflicto con un asesino en serie conocido como "el Acertijo".
                    </Text>
                </View>
            </View>

            <View style={[
                flexDisplay["flex--row"],
                flexDisplay["content--around"],
                utilitiesDisplay["p--3"]
            ]}>
                <Image style={[
                    utilitiesDisplay["image--responsive-icon"],
                    utilitiesDisplay["color--bg-secondary"],
                    utilitiesDisplay["radius--xl"],
                ]}
                    source={require('../assets/img/feisbu.png')}
                />
                <Image style={[
                    utilitiesDisplay["image--responsive-icon"],
                    utilitiesDisplay["color--bg-secondary"],
                    utilitiesDisplay["radius--xl"],
                ]}
                    source={require('../assets/img/githu.png')}
                />
                <Image style={[
                    utilitiesDisplay["image--responsive-icon"],
                    utilitiesDisplay["color--bg-secondary"],
                    utilitiesDisplay["radius--xl"],
                ]}
                    source={require('../assets/img/tuiter.png')}
                />
                <Image style={[
                    utilitiesDisplay["image--responsive-icon"],
                    utilitiesDisplay["color--bg-secondary"],
                    utilitiesDisplay["radius--xl"],
                ]}
                    source={require('../assets/img/drupal.png')}
                />
            </View>
        </View>
    )
}

export { CartaLinks }