import React from 'react';
// import { Feather as Icon } from "@expo/vector-icons";

import {Animated, Text} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

const Chevron = ({transition, isActive}) => {
  return (
    <Animated.View style={[styles.chevronContainer]}>
      {isActive ? (
        <Icon name="chevron-down" color={'#909090'} size={16} />
      ) : (
        <Icon name="chevron-right" color={'#909090'} size={16} />
      )}
    </Animated.View>
  );
};

export {Chevron};
