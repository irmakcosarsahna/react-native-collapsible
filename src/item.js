import React, {useState} from 'react';
import {Text, Animated, View} from 'react-native';
import {styles} from './style';
import {normalize} from 'react-native-elements';

const Item = ({isLast, children}) => {
  const bottomRadius = isLast ? normalize(16) : 0;
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    height: new Animated.Value(0),
  });

  return (
    <Animated.View
      style={[
        styles.itemContainer,
        isLast ? {...styles.bottomRadius, ...styles.lastItem} : {},
      ]}>
      {children}
    </Animated.View>
  );
};
export {Item};
