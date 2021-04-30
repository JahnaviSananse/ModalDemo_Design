import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import THEME from '../../constant/colors/index';
import styles from '../Button/style';

const Button = props => {
  const {title, onPress, type} = props;
  let btnStyle =
    type === 'fill'
      ? [styles.fillButton, {backgroundColor: THEME.BLACK}]
      : [styles.unfillButton, {borderColor: THEME.GREEN}];
  let textStyle =
    type === 'fill'
      ? styles.fillText
      : [styles.unfillText, {color: THEME.BLACK}];
  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
