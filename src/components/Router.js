import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Users from './Users/UsersFlatList';

const Stack = createStackNavigator({
  Users: {
    screen: Users,
    navigationOptions: {
      title: 'ATF',
      headerStyle: {borderBottomWidth: 0},
    },
  },
});

const App = createAppContainer(Stack);

export default App;
