import { Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/styles';
import { useRef, useState, useCallback } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

const Home = ({ navigation }) => {
	const [isOpen, setIsOpen] = useState(false);
	const sheetReft = useRef(null);

	const snapPoints = ['40%', '60%'];

	const handlePress = () => {
		navigation.navigate('Notifications');
	};
	const handlePressModal = useCallback(index => {
		sheetReft.current?.snapToIndex(index);
		setIsOpen(true);
	}, []);
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handlePress}>
				<Text>Home</Text>
			</TouchableOpacity>
			<Text>" "</Text>
			<TouchableOpacity onPress={() => handlePressModal(0)}>
				<Text>Modal</Text>
			</TouchableOpacity>
			<BottomSheet
				ref={sheetReft}
				isOpen={isOpen}
				snapPoints={snapPoints}
				enablePanDownToClose={true}
				onChange={() => setIsOpen(false)}
			>
				<Text>Hola</Text>
			</BottomSheet>
			<StatusBar style='auto' />
		</View>
	);
};

export default Home;
