import { StyleSheet } from "react-native";


export const colors = {
    bluishViolet: '#363678',
    bluishVioletLight: '#4A4A9A', 
    yellow: '#f7bc0c',
    yellowLight: '#FFD54F', 
    light: '#B8B7D9', 
    dark: '#2E2A5C', 
    black: '#000',
    white: '#fff',
    grey: '#E0E0E0',
    greyDark: '#BDBDBD', 
};

export const commonStyles = StyleSheet.create({
    navigatorBackground: {
        backgroundColor: colors.bluishViolet,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    content: {
        paddingHorizontal: 28,
        paddingVertical: 16,
    },
    item: {
        width: '100%',
        marginVertical: 12,
        borderRadius: 8,
        overflow: 'hidden',
    },
    formItemText: {
        fontWeight: '600',
        marginBottom: 8,
        fontSize: 16,
        color: colors.bluishViolet,
    },
    formItem: {
        backgroundColor: colors.grey,
        borderRadius: 8,
    },
    input: {
        height: 40,
        borderRadius: 8,
        borderColor: colors.bluishVioletLight,
        borderWidth: 1,
        paddingHorizontal: 12,
        color: colors.bluishViolet,
        fontSize: 16,
        backgroundColor: colors.white,
    },
    buttonGroup: {
        position: 'absolute',
        bottom: 120,
        flexDirection: 'row',
        gap: 80,
        justifyContent: 'center',
        width: '100%',
    },
    light: {
        backgroundColor: colors.light,
    },
    lightText: {
        color: colors.bluishViolet,
        fontSize: 16,
    },
    dark: {
        backgroundColor: colors.dark,
    },
    darkText: {
        color: colors.white,
        fontSize: 16,
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.light,
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: colors.light,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 360,
        height: 70,
        backgroundColor: colors.bluishViolet,
        marginTop: 20,
        padding: 12,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    itemText: {
        color: colors.bluishViolet,
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 20,
    },
    textContainer: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        height: 36,
        minWidth: 90,
        borderRadius: 18,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    itemLeft: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 36,
        gap: 12,
    },
    description: {
        height: 120,
        textAlignVertical: 'top',
        paddingTop: 12,
    },
    dateTimePicker: {
        height: 200,
        backgroundColor: colors.greyDark,
    },
    activity: {
        zIndex: 1000,
    },
});