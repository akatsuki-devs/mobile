import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from '../redux/store';

import { styles } from '../StyleAndComponentsScreens/ShoppingCart/style';
import ProductItem from '../StyleAndComponentsScreens/ShoppingCart/components/ProductItem/ProductItem'
import ScheduleTime from '../StyleAndComponentsScreens/ShoppingCart/components/SchuleTime/SchuleTime';
import SubTotalDiscount from '../StyleAndComponentsScreens/ShoppingCart/components/SubTotalDiscount/SubTotalDiscount';

interface ProductProps {
    id: number,
    name: string,
    price: number,
    photo: string,
    productType: string,
    quantity: number
}

const ShoppingCart = () => {
    const [products, setProducts] = useState<ProductProps[]>([])

    const quantityItems = useSelector((state: RootState) => state.cart.items.length)

    const getProductsItems = async () => {
        const items: any = await AsyncStorage.getItem("items")
        const getProduct = JSON.parse(items)

        console.log(getProduct);

        return getProduct
    }
    const fetchData = async () => {
        const itemsProducts = await getProductsItems()
        const productInfo = itemsProducts.map((item: ProductProps) => {
            return item
        })
        setProducts(productInfo)
    }
    useEffect(() => {
        const fetchDataAsync = async () => {
            await fetchData();
        };

        fetchDataAsync()

    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={styles.Screen}>
                <View style={styles.Container}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: 'auto' }}>
                        <View style={styles.ContainerHeader}>
                            <Text style={styles.HeaderText}>{quantityItems} items</Text>
                            <View style={styles.HeaderLine} />
                        </View>
                        <View style={styles.ContainerMain}>
                            {
                                products.map((item: ProductProps, index: number) => (
                                    <ProductItem
                                        key={index}
                                        name={item.name}
                                        price={item.price}
                                        photo={item.photo}
                                        id={item.id}
                                    />
                                ))
                            }
                        </View>
                        <View>
                            <ScheduleTime />
                        </View>
                        <View style={styles.ConatinerFooter}>
                            <View>
                                <SubTotalDiscount/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView >
    )
};

export default ShoppingCart;
