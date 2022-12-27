import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PRIMARY, WHITE } from '../color';
import ListScreen from '../screens/ListScreen';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: {
          fontWeight: '700',
        },
        headerBackTitleVisible: false,
        headerLeft: HeaderLeftButton,
        // headerLeft: (props) => HeaderLeftButton(props),
        // headerLeft: (props) => <HeaderLeftButton {...props} />,
      }}
    >
      <Stack.Screen
        name={'List'}
        component={ListScreen}
        options={{
          title: 'TODO List',
          headerRight: HeaderRightButton,
        }}
      />
      <Stack.Screen name={'Settings'} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
