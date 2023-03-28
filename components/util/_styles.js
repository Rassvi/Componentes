import { StyleSheet } from "react-native";
import { mainColors, textColors } from "./_colores";
import { myTextSizes } from "./_text";

const flexDisplay = StyleSheet.create({
    // Direcciones de flex 
    'flex--row': { flexDirection: 'row' },
    'flex--column': { flexDirection: 'column' },
    'flex--row-reverse': { flexDirection: 'row-reverse' },
    'flex--column-reverse': { flexDirection: 'column-reverse' },

    // Alineaciones
    'content--start': { justifyContent: 'flex-start' },
    'content--end': { justifyContent: 'flex-end' },
    'content--center': { justifyContent: 'center' },
    'content--between': { justifyContent: 'space-between' },
    'content--around': { justifyContent: 'space-around' },
    'content--evenly': { justifyContent: 'space-evenly' },

    'items--center': { alignItems: 'center' },
    'items--start': { alignItems: 'flex-start' },
    'items--end': { alignItems: 'flex-end' },

    // Tamaños Flex
    'sz--1': { flex: 1, },
    'sz--2': { flex: 2, },
    'sz--3': { flex: 3, },

    // gaps

    'gap--1': { gap: 5, },
    'gap--2': { gap: 10, },
    'gap--3': { gap: 15, },

});

const textDisplay = StyleSheet.create({
    // Alineaciones de texto - "Al Contenedor"
    'txt--center': { textAlign: 'center' },
    'txt--left': { textAlign: 'left' },
    'txt--right': { textAlign: 'right' },

    // Colores de texto - "Al texto"
    'txt--color-normal': { color: textColors["txt--normal"] },
    'txt--color-main-title': { color: textColors["txt--main-title"] },
    'txt--color-sub-title': { color: textColors["txt--sub-title"] },

    // Tamaños de los textos
    'text--ls': { fontSize: myTextSizes["text--ls"] },
    'text--md': { fontSize: myTextSizes["text--md"] },
    'text--xl': { fontSize: myTextSizes["text--xl"] },
    'text--xxl': { fontSize: myTextSizes["text--xxl"] },
});

const utilitiesDisplay = StyleSheet.create({
    // WEAS UTILES
    'image--responsive': {
        flex: 1,
        width: '100%',
        aspectRatio: 1,
        height: undefined,
        resizeMode: 'contain',
    },

    // Colores
    'color--bg-dominant': { backgroundColor: mainColors['bg--dominant'] },
    'color--bg-secondary': { backgroundColor: mainColors['bg--secondary'] },
    'color--bg-accent': { backgroundColor: mainColors['bg--accent'] },
    'color--bg-complementary-1': { backgroundColor: mainColors['bg--complementary-1'] },

    // Sombras
    'shadow--sm': {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    'shadow--md': {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    'shadow--xl': {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },

    // Bordes redondos
    'radius--sm': { borderRadius: 5 },
    'radius--md': { borderRadius: 10 },
    'radius--xl': { borderRadius: 15 },

    // Paddings
    'p--1': { padding: 5, },
    'p--2': { padding: 10, },
    'p--3': { padding: 15, },
});

const layoutDisplay = StyleSheet.create({
    'layout--card': {
        width: '95%',
        minHeight: 210,
    }
});

export { flexDisplay, layoutDisplay, utilitiesDisplay, textDisplay }