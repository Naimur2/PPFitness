import React from 'react';
import VectorImage from 'react-native-vector-image';

type TIconProps = typeof VectorImage.defaultProps;

export function FacebookIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/facebook-icon.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function GoogleIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/google-icon.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function AppleIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/apple-icon.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function PlayIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/play-button.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function EmailIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/email-icon.svg')}
      height={20}
      width={20}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function EyeCloseIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/eye-close.svg')}
      height={20}
      width={20}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function EyeOpenIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/eye-open.svg')}
      height={20}
      width={20}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function LockIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/lock-icon.svg')}
      height={20}
      width={20}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function SearchIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/search-icon.svg')}
      height={20}
      width={20}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function ArrowDownIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/arrow-down.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function ArrowUpIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/arrow-up.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function AddIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/add-icon.svg')}
      height={24}
      width={24}
      resizeMode="contain"
      {...rest}
    />
  );
}

export function MealIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/meal.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function MealFillIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/meal-fill.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function ExerciseIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/exercise.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
export function ExerciseFillIcon({...rest}: TIconProps) {
  return (
    <VectorImage
      source={require('@assets/svg/bootom-tab/exercise-fill.svg')}
      resizeMode="contain"
      {...rest}
    />
  );
}
