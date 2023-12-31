import React from 'react';
import { TouchableOpacity, Text, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link} from "expo-router"
import AsyncStorage from '@react-native-async-storage/async-storage';


import { styles } from './style'
import { AppTexts } from '../../../../assets/strings';

const ButtonGetOut: React.FC = () => {

    return (
        <Link replace href={'/'} asChild>
            <TouchableOpacity style={styles.Button} onPress={() => {
                AsyncStorage.removeItem("token")
            }}>
                <MaterialCommunityIcons name={"logout"} style={styles.Icon} />
                <Text style={styles.Title}>{AppTexts.Get_Out}</Text>
            </TouchableOpacity>
        </Link>
    );
};

export default ButtonGetOut;