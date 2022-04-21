import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
import { Dimensions } from 'react-native';

export const colors = {
	bgColorFont: '#EFF1F6',
	primaryColor: '#3B4757',
};
export const SizeWindowWidht = Dimensions.get('window').width;

export { styles };
