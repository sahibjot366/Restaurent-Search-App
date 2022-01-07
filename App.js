import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screen/SearchScreen";
import InfoScreen from "./src/screen/InfoScreen";
const navigator=createStackNavigator({
  Search:SearchScreen,
  Info:InfoScreen
},
{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'Places details app'
  }

})

export default createAppContainer(navigator);