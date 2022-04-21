import { Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/styles';

const Notifications = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Text>Notifications</Text>
			</TouchableOpacity>
			<StatusBar style='auto' />
		</View>
	);
};

export default Notifications;
