import { createDrawerNavigator } from '@react-navigation/drawer';
import NavLateral from '../components/Nav Lateral/NavLateral';
import MyTabs from './MyTabs';

const Drawer = createDrawerNavigator();

function MyDrawer() {
	return (
		<Drawer.Navigator
			drawerContent={props => <NavLateral {...props} />}
			screenOptions={{
				headerShown: false,
				drawerPosition: 'right',
			}}
		>
			<Drawer.Screen name='Feed' component={MyTabs} />
		</Drawer.Navigator>
	);
}

export default MyDrawer;
