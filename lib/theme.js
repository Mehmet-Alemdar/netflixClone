import { DefaultTheme } from "@react-navigation/native";

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    bottomTabBackground: "#101010",
    bottomTabText: "#FFFF",
    bottomTabActiveText: "#FFFF",
    bottomTabInactiveText: "#898989",
    background: '#000000',
    text: '#FFFFFF',
    border: 'transparent',
  }
}