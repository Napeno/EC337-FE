import {Pressable, StyleSheet, Text} from 'react-native';
import React, {FC, useEffect} from 'react';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import {getPathXCenterByIndex} from '../../utils/Path';
import usePath from '../../hooks/usePath';
import {SCREEN_WIDTH} from '../../constants/Screens';

export type TabProps = {
  label: string;
  icon: string;
  index: number;
  activeIndex: number;
  onTabPress: () => void;
};

const ICON_SIZE = 25;
const LABEL_WIDTH = SCREEN_WIDTH / 5;
const AnimatedIcon = Animated.createAnimatedComponent(Feather);

const TabItem: FC<TabProps> = ({
  label,
  icon,
  index,
  activeIndex,
  onTabPress,
}) => {
  const {curvedPaths} = usePath();
  const animatedActiveIndex = useSharedValue(activeIndex);
  const iconPosition = getPathXCenterByIndex(curvedPaths, index);
  const labelPosition = getPathXCenterByIndex(curvedPaths, index);

  const tabStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? -35 : 20;
    const iconPositionX = iconPosition - index * ICON_SIZE;
    return {
      width: ICON_SIZE,
      height: ICON_SIZE,
      transform: [
        {translateY: withTiming(translateY)},
        {translateX: iconPositionX - ICON_SIZE / 2},
      ],
    };
  });

  const labelContainerStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? 25 : 100;
    return {
      transform: [
        {translateY: withTiming(translateY)},
        {translateX: labelPosition - LABEL_WIDTH / 2},
      ],
    };
  });

  const iconColor = useSharedValue(
    activeIndex === (index + 1) ? 'white' : 'rgba(128,128,128,0.8)',
  );

  useEffect(() => {
    animatedActiveIndex.value = activeIndex;
    iconColor.value = activeIndex === (index + 1) ? 'white' : 'rgba(128,128,128,0.8)';
  }, [activeIndex, index]);

  const animatedIconProps = useAnimatedProps(() => ({
    color: iconColor.value,
  }));

  return (
    <>
      <Animated.View style={[tabStyle]}>
        <Pressable
          testID={`tab${label}`}
          hitSlop={{top: 30, bottom: 30, left: 50, right: 50}}
          onPress={onTabPress}>
          <AnimatedIcon
            name={icon}
            size={ICON_SIZE}
            color={activeIndex === (index + 1) ? 'white' : '#484C52'}
          />
        </Pressable>
      </Animated.View>
      <Animated.View style={[labelContainerStyle, styles.labelContainer]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: LABEL_WIDTH,
  },
  label: {
    color: '#484C52',
    fontSize: 17,
    fontFamily: 'Quicksand_600SemiBold'
  },
});
