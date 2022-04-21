import Modal from 'react-native-modal';
import {
	View,
	Button,
	Text,
	StyleSheet,
	Pressable,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { EDITPROFILE_SCHEMA } from '../../helpers/valdationSchemas';

const ModalDatosEdit = ({ onOpen, openModal }) => {
	const optionsModal = {
		isVisible: openModal,
		backdropColor: 'black',
	};

	return (
		<Modal {...optionsModal}>
			<View style={modalStyle.modal}>
				<View style={modalStyle.header}>
					<MaterialIcons name='edit' size={30} color='#000' />
					<Text style={modalStyle.textHeader}>Modifica tus datos</Text>
				</View>
				<Formik
					style={modalStyle.formulario}
					initialValues={{ email: '', phone: '' }}
					enableReinitialize={true}
					validationSchema={EDITPROFILE_SCHEMA}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
						<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
							<View style={modalStyle.campo}>
								<Text style={modalStyle.label}>Correo</Text>
								<TextInput
									keyboardType='email-address'
									onChangeText={handleChange('email')}
									style={modalStyle.input}
									value={values.email}
									placeholder='Correo electrónico'
								/>
								{errors.email && touched.email ? (
									<Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
								) : null}
							</View>
							<View style={modalStyle.campo}>
								<Text style={modalStyle.label}>Teléfono</Text>
								<TextInput
									keyboardType='phone-pad'
									style={modalStyle.input}
									value={values.phone}
									placeholder='Teléfono'
								/>
								{errors.email && touched.email ? (
									<Text style={{ fontSize: 10, color: 'red' }}>{errors.phone}</Text>
								) : null}
							</View>
							<View style={modalStyle.campoBtns}>
								<TouchableOpacity onPress={onOpen} style={modalStyle.btnGuardar}>
									<Text style={modalStyle.btnTexto}>Cancelar</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={handleSubmit} style={modalStyle.btnGuardar}>
									<Text style={modalStyle.btnTexto}>Guardar</Text>
								</TouchableOpacity>
							</View>
						</KeyboardAvoidingView>
					)}
				</Formik>
			</View>
		</Modal>
	);
};

const modalStyle = StyleSheet.create({
	container: {},
	modal: {
		padding: 20,
		marginHorizontal: 20,
		borderRadius: 10,
		backgroundColor: '#fff',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignContent: 'center',
		alignItems: 'center',
	},
	textHeader: {
		marginLeft: 10,
		fontWeight: 'bold',
		fontSize: 20,
	},
	formulario: {},
	campo: {
		marginHorizontal: 10,
		marginVertical: 10,
	},
	label: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	input: {
		padding: 10,
		backgroundColor: '#D8E3E7',
		borderRadius: 10,
	},
	campoBtns: {
		marginTop: 10,
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	btnGuardar: {
		backgroundColor: '#1F2353',
		padding: 10,
		borderRadius: 5,
		marginLeft: 10,
	},
	btnTexto: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18,
		textTransform: 'capitalize',
		textAlign: 'center',
	},
});

export default ModalDatosEdit;
