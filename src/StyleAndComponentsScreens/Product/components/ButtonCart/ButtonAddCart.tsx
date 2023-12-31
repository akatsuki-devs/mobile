import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { AppTexts } from '../../../../assets/strings';
import { styles, shadowStyle } from './style'
import { addCartItem } from '../../../../redux/features/shoppingCart/shoppingCartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface ButtonAddCartProps {
    id: number | undefined,
    price: number | undefined,
    photo: string | undefined,
    name: string | undefined,
    quantity?: number,
    preparationTime: number | undefined,
    setToast: () => void
}

const ButtonAddCart: React.FC<ButtonAddCartProps> = ({
    price,
    id,
    photo,
    name,
    quantity,
    preparationTime,
    setToast
}) => {
    const dispatch = useDispatch();

    const handleAddCart = () => {
        const item: any = { id, price, name, photo, quantity, preparationTime}
        console.log(item);
        setToast()

        dispatch(addCartItem(item))
    }
    
    return (
        <TouchableOpacity style={[styles.Container, shadowStyle]} onPress={handleAddCart}>
            <View style={styles.Touchable}>
                <Text style={styles.TouchableText}>
                    {AppTexts.Add_Cart}
                </Text>
                <Text style={styles.TouchableIcon}>
                    {price}
                </Text>
            </View>
        </TouchableOpacity>
    )
};
export default ButtonAddCart;

