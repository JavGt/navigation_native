import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useRef } from 'react';

const Data = () => {
	return (
		<View style={style.container}>
			<View style={style.header}>
				<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Datos:</Text>
				<TouchableOpacity style={style.btnEditar}>
					<Text style={{ marginRight: 10 }}>Editar</Text>
					<FontAwesome5 name='edit' size={15} color='#000' />
				</TouchableOpacity>
			</View>
			<View style={style.bgFont}>
				<View style={[style.campoEditar, style.borde]}>
					<AntDesign name='phone' size={20} color='#000' />
					<Text style={style.textCampoEditar}>Telefono</Text>
				</View>
				<View style={style.campoEditar}>
					<MaterialCommunityIcons name='email' size={20} color='#000' />
					<Text style={style.textCampoEditar}>Correo</Text>
				</View>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	bgFont: {
		marginTop: 10,
		padding: 10,
		borderRadius: 5,
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	btnEditar: {
		backgroundColor: '#fff',
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	campoEditar: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingVertical: 10,
	},
	textCampoEditar: {
		fontSize: 20,
		color: '#000',
		fontWeight: 'bold',
		marginLeft: 10,
	},
	borde: {
		borderBottomColor: '#EAEDED',
		borderBottomWidth: 1,
	},
});

export default Data;
