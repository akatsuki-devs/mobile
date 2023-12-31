import React from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootState } from '../../redux/store';


import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { decrementItem, incrementItem } from '../../redux/features/shoppingCart/shoppingCartSlice';


interface ButtonMoreOrLessProps {
    id: number
}

const ButtonMoreOrLess: React.FC<ButtonMoreOrLessProps> = ({id}) => {
    const dispatch = useDispatch();

    const item = useSelector((state: RootState) => state.cart.items.find((item: ButtonMoreOrLessProps) => item.id === id))
    const productQty = item?.quantity || 0

    const handleMinus = async () => {
        dispatch(decrementItem(id))
    }

    const handlePlus = () => {
        dispatch(incrementItem(id))
    }    
    return (
        <View style={styles.QuantityContainer}>
            <View style={styles.MinusButton}>
                <TouchableOpacity onPress={handleMinus}>
                    <MaterialCommunityIcons name={'minus-thick'} style={styles.MinusIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.QuantityTextContainer}>
                <Text style={styles.QuantityText}>{productQty}</Text>
            </View>
            <View style={styles.PlusButton}>
                <TouchableOpacity onPress={handlePlus}>
                    <MaterialCommunityIcons name={'plus-thick'} style={styles.PlusIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ButtonMoreOrLess;
