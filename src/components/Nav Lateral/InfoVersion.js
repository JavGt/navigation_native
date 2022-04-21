import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const InfoVersion = () => {
	return (
		<View style={style.content}>
			<Text style={style.text}>
				Quetzalli App 2.0.0 <Feather name='info' color={'#fff'} size={20} />
			</Text>
		</View>
	);
};

const style = StyleSheet.create({
	content: {
		backgroundColor: '#FACD36',
		padding: 5,
		alignItems: 'center',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		justifyContent: 'center',
	},
	text: {
		fontSize: 20,
		color: '#fff',
		marginHorizontal: 20,
		fontWeight: 'bold',
		marginVertical: 10,
	},
});

export default InfoVersion;
