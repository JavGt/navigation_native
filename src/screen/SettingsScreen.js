import { Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/styles';

const Settings = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Text>Settings</Text>
			</TouchableOpacity>
			<StatusBar style='auto' />
		</View>
	);
};

export default Settings;
