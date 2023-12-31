import { StyleSheet, Platform } from 'react-native'
import theme from '../../../../styles/theme';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: theme.COLORS.OrangeFF6C44,
    borderRadius: 8,
    width: 275,
    height: 40,
    alignItems: 'center'
  },
  Touchable: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'

  },
  TouchableIcon: {
    color: theme.COLORS.Whiteffffff,
    fontFamily: theme.FONTS.Popp600,
    paddingTop: 8
  },
  TouchableText: {
    color: theme.COLORS.White2F3F3F3,
    fontFamily: theme.FONTS.Popp700,
    paddingTop: 8
  }
});

const shadowStyle = {
  ...Platform.select({
    ios: {
      shadowColor: theme.COLORS.Gray37C7C7A,
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 2,
      shadowRadius: 2,
    },
    android: {
      elevation: 6,
    },
  }),
};

export { styles, shadowStyle };
