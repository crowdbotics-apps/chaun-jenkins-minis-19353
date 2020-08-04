import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList87184Navigator from '../features/ArticleList87184/navigator';
import ArticleList87183Navigator from '../features/ArticleList87183/navigator';
import ArticleList87182Navigator from '../features/ArticleList87182/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList87184: { screen: ArticleList87184Navigator },
ArticleList87183: { screen: ArticleList87183Navigator },
ArticleList87182: { screen: ArticleList87182Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
