import { Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/styles';

const Profile = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Text>Profile</Text>
			</TouchableOpacity>
			<StatusBar style='auto' />
		</View>
	);
};

export default Profile;
