import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {isTablet} from 'react-native-device-info';

export const useStyle = () => {
  const theme = useTheme();

  const styles = () =>
    StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.colors.background,
      },
      header: {
        marginBottom: heightPercentageToDP(3),
      },
      subContainer: {
        paddingHorizontal: widthPercentageToDP(3),
      },
      orderCardStyle: {
        marginTop: heightPercentageToDP(2),
      },

      lineSeperator: {
        borderWidth: widthPercentageToDP(0.15),
        borderColor: theme.colors.borderColor,
        marginVertical: heightPercentageToDP(2),
      },
      rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      cancelButton: {
        backgroundColor: theme.colors.transparentGreenBackground,
        width: widthPercentageToDP(33),
      },
      submitButton: {
        width: widthPercentageToDP(40),
      },
      modelCartStyle: {
        borderRadius: widthPercentageToDP(4),
        paddingHorizontal: widthPercentageToDP(3),
        paddingVertical: heightPercentageToDP(2),
      },
      bidContainer: {
        backgroundColor: theme.colors.background,
        paddingHorizontal:widthPercentageToDP(3),
        paddingBottom: heightPercentageToDP(2),
        marginTop:heightPercentageToDP(2),
        borderRadius: widthPercentageToDP(3),
      },
      flatListContainer:{
        paddingBottom:heightPercentageToDP(15)
      },
      modalView: {
        backgroundColor: theme.colors.greyBackground,
        paddingHorizontal: widthPercentageToDP(3),
        width: widthPercentageToDP(100),
        borderTopStartRadius: widthPercentageToDP(10),
        borderTopEndRadius: widthPercentageToDP(10),
        paddingBottom: heightPercentageToDP(3),
        paddingTop: heightPercentageToDP(1),
        position: 'absolute',
        bottom: 0,
      },
      reviewHeading: {
        color: theme.colors.primaryText,
        fontFamily: theme.fonts.boldFont,
        fontSize: widthPercentageToDP(4.8),
        alignSelf: 'center',
      },
      topIndicator: {
        borderWidth: widthPercentageToDP(0.4),
        borderColor: theme.colors.greyDot,
        alignSelf: 'center',
        paddingHorizontal: widthPercentageToDP(5),
        marginBottom: heightPercentageToDP(2),
      },
      controller: {marginTop: heightPercentageToDP(2)},
      error: {
        color: 'red',
        paddingVertical: heightPercentageToDP(0.5),
        fontSize: isTablet() ? widthPercentageToDP(2) : undefined,
        marginLeft:widthPercentageToDP(1)
      },
      inputStyle:{
        backgroundColor:'white'
      }
    });
  return React.useMemo(() => styles(), []);
};
