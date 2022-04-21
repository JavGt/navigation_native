import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './Routes';

const Stack = createNativeStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='Home' component={Routes.Home} />
			<Stack.Screen name='Notifications' component={Routes.Notifications} />
			<Stack.Screen name='Profile' component={Routes.Profile} />
			<Stack.Screen name='Settings' component={Routes.Settings} />
		</Stack.Navigator>
	);
}

export default MyStack;
