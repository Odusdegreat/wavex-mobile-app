import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";

/**
 * Animates a number from 0 to a target value.
 */
export const useAnimatedCountUp = (
  targetValue: number,
  duration: number = 750
) => {
  const [displayedValue, setDisplayedValue] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedValue.setValue(0); // Reset to 0 on change

    const listener = animatedValue.addListener(({ value }) => {
      setDisplayedValue(value);
    });

    Animated.timing(animatedValue, {
      toValue: targetValue,
      duration: duration,
      useNativeDriver: false, // Required for animating text
    }).start();

    return () => {
      animatedValue.removeListener(listener);
    };
  }, [targetValue, duration, animatedValue]);

  return displayedValue;
};
