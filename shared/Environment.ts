import Constants from "expo-constants";

const { manifest } = Constants;
const Environment = {
  apiUrl: manifest?.extra?.apiUrl,
  isProduction: manifest?.extra?.isProduction,
  defaultLanguage: manifest?.extra?.defaultLanguage,
} as const;

export default Environment;
