import AsyncStorage from '@react-native-async-storage/async-storage';

type keyType = 'authToken';

export const setItemAsync = async (key: keyType, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // console.log(e);
  }
};

export const getItemAsync = async (key: keyType) => {
  let obj;
  try {
    const jsonString = await AsyncStorage.getItem(key);
    if (jsonString == null) return undefined;

    obj = JSON.parse(jsonString);
  } catch (e) {
    // console.log(e);
  }
  return obj;
};

export const deleteItemAsync = async (key: keyType) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // console.log(e);
  }
};
