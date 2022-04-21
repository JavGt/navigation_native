import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Routes from './Routes';
import { Ionicons, Entypo, FontAwesome, Feather } from 'react-native-vector-icons';
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarColor: '#000',
				inactiveBackgroundColor: '#fff',
			}}
		>
			<Tab.Screen
				name='Home'
				component={Routes.Home}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => <Entypo name='home' color={color} size={20} />,
				}}
			/>
			<Tab.Screen
				name='Notifications'
				component={Routes.Notifications}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
						<Ionicons name='notifications' color={color} size={20} />
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Routes.Profile}
				options={{
					tabBarLabel: 'User',
					tabBarIcon: ({ color }) => (
						<FontAwesome name='user-circle-o' color={color} size={20} />
					),
				}}
			/>
			<Tab.Screen
				name='Settings'
				component={Routes.Settings}
				options={{
					tabBarLabel: 'Settings',
					tabBarIcon: ({ color }) => <Feather name='settings' color={color} size={20} />,
				}}
			/>
		</Tab.Navigator>
	);
}

export default MyTabs;
