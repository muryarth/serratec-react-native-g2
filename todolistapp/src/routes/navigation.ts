import {
  StackNavigationParams,
  DrawerNavigationParams,
  BottomTabNavigationParams,
} from "./types";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackNavigationParams {}
    interface RootParamList extends DrawerNavigationParams {}
    interface RootParamList extends BottomTabNavigationParams {}
  }
}
