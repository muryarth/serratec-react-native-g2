type StackNavigationParams = {
  StackLogin: { name: string };
  StackCadastro: { name: string };
  StackHome: { name: string };
};

type DrawerNavigationParams = {
  DrawerCards: { name: string };
  DrawerFavorites: { name: string };
};

type BottomTabNavigationParams = {
  TabsHome: { name: string };
  TabsCardCreator: { name: string };
};

export {
  StackNavigationParams,
  DrawerNavigationParams,
  BottomTabNavigationParams,
};
