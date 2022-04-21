import { View, Text, StyleSheet } from 'react-native';
import Buttons from './Buttons';
import Data from './Datos';
import Header from './Header';
import InfoVersion from './InfoVersion';
import Logout from './Logout';

const NavLateral = () => {
	return (
		<View style={style.bgFont}>
			<Header />
			<View style={style.container}>
				<View style={style.content}>
					<Data />
					<Buttons />
				</View>
				<Logout />
			</View>
			<InfoVersion />
		</View>
	);
};

const style = StyleSheet.create({
	bgFont: {
		backgroundColor: '#ECF6F9',
		flex: 1,
		justifyContent: 'space-between',
	},
	content: {
		width: '100%',
	},
	container: {
		marginHorizontal: 40,
		marginVertical: 30,
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default NavLateral;
