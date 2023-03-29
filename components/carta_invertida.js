import { View, Text, Image } from "react-native";
import {
    flexDisplay,
    layoutDisplay,
    utilitiesDisplay,
    textDisplay
} from "./util/_styles";

const CartaReversa = () => {
    return (
        <View style={[
            layoutDisplay["layout--card"],
            utilitiesDisplay["shadow--sm"],
            utilitiesDisplay["color--bg-complementary-2"],
            utilitiesDisplay["radius--md"],
            flexDisplay["flex--column-reverse"],
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
                ]}>Cicerón</Text>
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
                        utilitiesDisplay["radius--xl"]
                    ]}
                        source={require('../assets/img/el_wey_del_lorem.png')}
                    />
                </View>

                <View style={[
                    flexDisplay["sz--1"],
                    flexDisplay["content--around"],
                    flexDisplay["flex--column"],
                    utilitiesDisplay["p--1"],
                ]}>
                    <Text style={[
                        textDisplay["text--ls"],
                        textDisplay["txt--color-sub-title"]
                    ]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet venenatis urna, dignissim pretium velit elementum eu. Pellentesque condimentum tincidunt.
                    </Text>
                </View>
            </View>

        </View>
    )
}

export { CartaReversa }