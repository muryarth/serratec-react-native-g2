import { ParametrosDaRota } from "./StackNavigator";


declare global{
    namespace ReactNavigation {
        interface RootParamList extends ParametrosDaRota {}
    }
}