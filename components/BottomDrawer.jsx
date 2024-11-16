import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { GestureDetector, GestureHandler } from 'react-native-gesture-handler';
import PanGestureHandler from 'react-native-gesture-handler';
import styles from '../styles/bottomDrawer';

const { height } = Dimensions.get('window');

const BottomDrawer = ({ children }) => {
  const [drawerHeight, setDrawerHeight] = useState(0);

  // Use shared value instead of Animated.Value
  const translateY = useSharedValue(height); // Start at the bottom

  const gestureHandler = PanGestureHandler({
    onStart: (_, context) => {
      // Store the initial Y position when the gesture starts
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      // Update translateY based on the pan gesture
      translateY.value = context.startY + event.translationY;
    },
    onEnd: (event) => {
      // If the gesture ends, decide whether to open or close the drawer
      if (event.translationY < -100) {
        translateY.value = withTiming(height - drawerHeight, {
          duration: 300,
          easing: Easing.ease,
        });
      } else {
        translateY.value = withTiming(height, {
          duration: 300,
          easing: Easing.ease,
        });
      }
    },
  });

  // Apply animated styles using useAnimatedStyle
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <GestureDetector gestureHandler={gestureHandler}>
          <Animated.View
            style={[styles.drawer, animatedStyle]}
            onLayout={(event) => setDrawerHeight(event.nativeEvent.layout.height)}
          >
            <View style={styles.header}>
              <Text style={styles.headerText}>Swipe up to expand</Text>
            </View>
            <View style={styles.content}>
              <Text>Drawer content goes here</Text>
            </View>
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

export default BottomDrawer;
