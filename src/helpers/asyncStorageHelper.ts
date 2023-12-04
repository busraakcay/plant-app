import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkFirstOpening = async () => {
  const checkFirstOpening = await AsyncStorage.getItem('firstOpening');
  return checkFirstOpening;
};

export const saveFirstOpening = async () => {
  await AsyncStorage.setItem('firstOpening', 'true');
};
