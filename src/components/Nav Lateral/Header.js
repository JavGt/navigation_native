import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { colors } from '../../styles/styles';
import { FontAwesome } from '@expo/vector-icons';

const Header = () => {
	return (
		<View style={style.header}>
			<Text
				style={{
					color: colors.primaryColor,
					fontSize: 20,
				}}
			>
				Tutor:
			</Text>
			<View style={style.contentUser}>
				<FontAwesome
					style={style.imgUser}
					name='user-circle'
					size={40}
					color={colors.primaryColor}
				/>
				<Text style={[style.nameUser]}>Laura Cristinia Hrdz</Text>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	header: {
		backgroundColor: 'white',
		paddingVertical: 15,
		paddingHorizontal: 35,
		borderBottomEndRadius: 20,
		borderBottomStartRadius: 20,
		marginTop: StatusBar.currentHeight,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	contentUser: {
		marginTop: 10,
		flexDirection: 'row',
	},
	imgUser: {
		marginRight: 20,
	},
	nameUser: {
		color: colors.primaryColor,
		fontSize: 30,
	},
});

export default Header;
