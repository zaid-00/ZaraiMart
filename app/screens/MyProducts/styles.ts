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
      subContainer: {
        paddingHorizontal: widthPercentageToDP(3),
      },
      title: {
        fontWeight: 'bold',
        color: theme.colors.primaryText,
      },
      img: {
        height: heightPercentageToDP(6),
        width: widthPercentageToDP(12),
        marginRight:widthPercentageToDP(3),
        borderRadius:widthPercentageToDP(90)
      },
      icon: {
        height: heightPercentageToDP(3.3),
        width: widthPercentageToDP(6.8),
        marginRight:widthPercentageToDP(2),
      },
      chatIcon: {
        height: heightPercentageToDP(3.3),
        width: widthPercentageToDP(6.8),
      },
      heading: {
        color: theme.colors.primaryText,
        fontFamily: theme.fonts.regularFont,
        fontSize: widthPercentageToDP(5.7),
        alignSelf: 'flex-start',
        paddingHorizontal: widthPercentageToDP(4),
        marginBottom: heightPercentageToDP(0.5),
      },
      greetingText: {
        color: theme.colors.lighGrey,
        fontFamily: theme.fonts.mediumFont,
        fontSize:widthPercentageToDP(3.3),
      },
      nameText: {
        color: theme.colors.primaryText,
        fontFamily: theme.fonts.boldFont,
        fontSize:widthPercentageToDP(4.2),
      },
      greenText: {
        color: theme.colors.primaryButton,
        fontFamily: theme.fonts.boldFont,
        fontSize:widthPercentageToDP(3.6),
      },
      subRowFlex:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      rowFlex:{
        marginTop:heightPercentageToDP(2),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      },
      greenDot:{
        backgroundColor:theme.colors.primaryButton,
        paddingVertical:heightPercentageToDP(0.5),
        paddingHorizontal:widthPercentageToDP(1),
        borderRadius:widthPercentageToDP(50),
        position:'absolute',
        right:0,
        top:0
      },
      greenDotNotification:{
        backgroundColor:theme.colors.primaryButton,
        paddingVertical:heightPercentageToDP(0.5),
        paddingHorizontal:widthPercentageToDP(1),
        borderRadius:widthPercentageToDP(50),
        position:'absolute',
        right:widthPercentageToDP(3),
        top:0
      },
      row:{
        flexDirection:'row',
        alignItems:'center'
      },
      header: {
        marginBottom: heightPercentageToDP(3),
      },
    });
  return React.useMemo(() => styles(), []);
};
