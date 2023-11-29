import { Link } from 'expo-router';
import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { styles, shadowStyle } from './style';
import theme from '../../../../styles/theme';

interface ProductsProps {
    id: number,
    name: string,
    price: number,
    description: string,
    photo: string,
}

const CardProduct = ({
    id,
    name,
    price,
    description,
    photo,
}: ProductsProps) => {

    return (
        <Link href={{
            pathname: '/product/[id]',
            params: { id: id }
        }} asChild>
            <TouchableOpacity >
                <View style={[styles.Container, shadowStyle]}>
                    <View style={styles.ContainerCard}>
                        <View style={styles.CardItems}>
                            <View style={styles.Description}>
                                <Text style={styles.Title1}>
                                    {name}
                                </Text>
                                <Text style={styles.Title2}>
                                    {description}
                                </Text>
                                <View style={styles.ContainerPriceAndTime}>
                                    <Text style={styles.Title4}>{price}</Text>
                                    <View style={styles.ContainerTime}>
                                        <MaterialCommunityIcons name={"clock-time-twelve-outline"} style={styles.Icon} size={13} color={theme.COLORS.Gray37C7C7A} />
                                        <Text style={styles.TitleTime}>
                                            15m
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.ContainerImg}>
                                <Image source={{ uri: photo }} style={styles.Img} />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    )
};

export default CardProduct;
