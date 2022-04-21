import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const Logout = () => {
	return (
		<TouchableOpacity style={style.content}>
			<Ionicons name='ios-exit-outline' size={30} color='#C74B50' />
			<Text style={style.text}>Cerrar sesión</Text>
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	content: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: '#C74B5030',
		alignItems: 'center',
		flexDirection: 'row',
		borderRadius: 10,
		borderWidth: 2,
		borderColor: '#C74B5090',
	},
	text: {
		marginLeft: 10,
		fontSize: 20,
		color: '#C74B50',
	},
});

export default Logout;
