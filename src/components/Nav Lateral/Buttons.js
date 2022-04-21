import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';

const Buttons = () => {
	return (
		<View style={style.buttons}>
			<TouchableOpacity style={[style.campoBtn]}>
				<FontAwesome5 name='file-invoice-dollar' size={20} color='#000' />
				<Text style={[style.gap]}>Factura</Text>
			</TouchableOpacity>
			<TouchableOpacity style={[style.campoBtn]}>
				<Entypo name='key' size={20} color='#000' />
				<Text style={[style.gap]}>Cambiar Contraseña</Text>
			</TouchableOpacity>
		</View>
	);
};

const style = StyleSheet.create({
	buttons: {
		marginVertical: 30,
	},
	campoBtn: {
		padding: 10,
		borderRadius: 5,
		backgroundColor: '#fff',
		alignItems: 'center',
		marginBottom: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.0,

		elevation: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	gap: {
		marginHorizontal: 10,
		fontSize: 20,
	},
	borde: {
		borderBottomColor: '#EAEDED',
		borderBottomWidth: 1,
	},
});

export default Buttons;
