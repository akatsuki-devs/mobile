  import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from '../StyleAndComponentsScreens/FavoriteItens/style';
import { FavoriteCard } from '../StyleAndComponentsScreens/FavoriteItens/components/FavoriteCard.tsx/FavoriteCard';
import UseFonts from '../styles/useFonts';
import theme from '../styles/theme';
import { StatusBar } from 'expo-status-bar';
// import { Container } from './styles';

const FavoriteItens = () => {
  return (
    <UseFonts>
      <StatusBar
        style='dark'
        translucent backgroundColor={theme.COLORS.Whiteffffff}
      />
      <SafeAreaView style={{ backgroundColor: theme.COLORS.Whiteffffff }}>
        <View style={styles.Screen}>
          <View style={styles.Container}>
            <View style={{ height: 'auto', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ height: 'auto', width: '100%', justifyContent: 'flex-end'}}>
                <View style={{}}>
                  <FavoriteCard />
                </View>
              </View>

            </View>
          </View>
        </View>
      </SafeAreaView>
    </UseFonts>
  )
};

export default FavoriteItens;