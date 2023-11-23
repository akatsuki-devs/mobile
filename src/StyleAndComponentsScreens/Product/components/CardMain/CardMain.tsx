import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import { styles } from './style';
import { AppTexts } from '../../../../assets/strings';
import ButtonAddCart from '../ButtonCart/ButtonAddCart';
import ProductsDisponibility from './components/ProductsDisponibility/ProductsDisponibility';

interface CardMainProps {
    name: string | undefined,
    price: any,
    description: string | undefined,
    id: number,
    photo: string | undefined,
    preparationTime: number | undefined
}

const CardMain = ({
    name,
    price,
    description,
    id,
    photo,
    preparationTime
}: CardMainProps) => {
    return (
        <View style={styles.Container}>
            <View style={styles.ContainerHeader}>
                <Text style={styles.TypeProductName}>
                    {name}
                </Text>
                <View style={styles.ContainerDescription}>
                    <Text style={styles.TitleDescription}>
                        {description}
                    </Text>
                </View>
            </View>
            <View style={styles.ContainerMain}>
                <View style={styles.AvailableProducts}>
                    <Text style={styles.AvailableText}>
                        {AppTexts.Available}
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}
                        contentContainerStyle={styles.ContainerProducts}
                        scrollEnabled={true}
                        key={Math.random()}
                    >
                        <ProductsDisponibility />
                        <ProductsDisponibility />
                        <ProductsDisponibility />
                        <ProductsDisponibility />
                    </ScrollView>
                </View>
            </View>
            <View style={styles.ContainerButton}>
                <ButtonAddCart
                    price={price}
                    id={id}
                    name={name}
                    photo={photo}
                    preparationTime={preparationTime}
                />
            </View>
        </View>
    );
};

export default CardMain;
