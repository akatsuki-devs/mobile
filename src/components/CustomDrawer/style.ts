import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Drawer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.COLORS.Gray2Rgba255249243047,
        alignItems: 'center'
    },
    Container: {
        height: '90%',
        width: '98%',
        justifyContent: 'center',
        
    },
    Content: {
        alignItems: 'center',
        height: '100%'
    },
    ContainerHeader: {
        width: '98%',
        height: '30%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 15,
        height: '45%',
    },
    Image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        
    },
    Texts: {
        justifyContent: 'space-evenly',
        height: '60%',
    },
    Name: {
        fontFamily: theme.FONTS.Raleway600,
        fontSize: RFValue(14)
    },
    Email: {
        fontFamily: theme.FONTS.Raleway600,
        fontSize: RFValue(12),
        color: theme.COLORS.Gray37C7C7A,
        
    },
    Balance: {
        fontFamily: theme.FONTS.Raleway600,
        fontSize: RFValue(12),
        color: theme.COLORS.Gray37C7C7A
    },
    ContainerMain: {
        height: '50%',
        width: '95%',
        justifyContent: 'center'
    },
    Main:{
        height: '80%',
        justifyContent: 'space-evenly'
    },
    ContainerFooter:{
        height: '17%',
        width: '95%',
        justifyContent: 'flex-end'
    }
});

export { styles };