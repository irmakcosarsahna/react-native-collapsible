import React, {useRef} from 'react';
import {
  Animated,
  Text,
  View,
  Pressable,
  FlatList,
  SafeAreaView,
} from 'react-native';

import {Chevron} from './chevron';
import {styles} from './style';
import {logEvent} from '../../utils/helper';

const defaultComponents = {
  default: (props) => <Text>{props.title}</Text>,
};

const Accordion = ({
  title,
  items,
  id,
  scrollRef,
  customComponent,
  headerComponent,
  footerComponent,
  active,
  titleConfig = {
    uppercase: true,
  },
  onPress,
  debug = false,
}) => {
  const isDebug = __DEV__ && debug;

  const {uppercase} = titleConfig;

  const onPressTouch = (position) =>
    scrollRef?.current?.scrollTo({
      y: position,
      animated: true,
    });

  let ComponentList = {
    ...defaultComponents,
  };

  const AccordionComponent = ({props}) => {
    let CustomComponent = customComponent;
    if (typeof CustomComponent === 'object' || !CustomComponent) {
      ComponentList = {
        ...ComponentList,
        ...(CustomComponent || {}),
      };

      CustomComponent = ComponentList[id] || ComponentList['default'];
    }

    return <CustomComponent {...props} />;
  };

  const HeaderComponent = ({props}) => {
    return (
      <View
        style={[
          styles.container,
          styles.shadow,
          !isActive ? styles.bottomRadius : {},
        ]}>
        <Text style={[styles.title, uppercase ? styles.uppercase : {}]}>
          {title}
        </Text>
        <Chevron isActive={isActive} />
      </View>
    );
  };

  const FooterComponent = ({props}) => <></>;

  const _onClick = () => {
    if (scrollRef) {
      viewRef.current?.measure((fx, fy, width, height, px, py) => {
        onPress(isActive ? null : id);
        // todo: buraya bir çözüm lazım. aksiyon tamamlandıktan sonra patlayan bir yapı.
        setTimeout(() => {
          onPressTouch(fy);
        }, 200);
      });
    } else {
      onPress(isActive ? null : id);
    }

    if (isDebug) logEvent('Accordion: ' + id);
  };

  const isActive = active === id;

  const viewRef = useRef();

  return (
    <>
      <Pressable onPress={_onClick}>
        <HeaderComponent />
      </Pressable>
      <View
        style={[styles.items, styles.shadow, {height: isActive ? 'auto' : 0}]}
        ref={viewRef}>
        <View style={{overflow: 'hidden'}}>
          {items.map((item, key) => {
            const accordionData = {
              isLast: key === items.length - 1,
              isFirst: key === 0,
            };
            return (
              <AccordionComponent
                key={key}
                props={{...item, ...accordionData}}
              />
            );
          })}
          <FooterComponent />
        </View>
      </View>
    </>
  );
};

export {Accordion};
