import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './Navigation.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
