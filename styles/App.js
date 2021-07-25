/* eslint-disable */
import { StyleSheet } from 'react-native';
import { colors } from './colors';

const {
	white,
	black,
	gray,
	lightOrange,
	lightGray,
	red
} = colors;

const styles = StyleSheet.create({

	app: {
		flex: 1,
		backgroundColor: 'white',
	},
	navBar: {
		backgroundColor: white,
		padding: 20,
		elevation: 10
	},
	navBarTitle: {
		color: black,
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	todoInputFieldContainer: {
		paddingHorizontal: 30,
		paddingVertical: 50
	},
	todoInputField: {
		borderColor: gray,
		borderWidth: 1,
		borderRadius: 35,
		paddingHorizontal: 20,
		color: black
	},
	addButton: {
		backgroundColor: lightOrange,
		padding: 18,
		borderRadius: 35,
		width: '40%',
		alignSelf: 'center',
		marginTop: 15
	},
	addButtonText: {
		textAlign: 'center',
		color: white
	},
	todosWrapper: {
		borderWidth: 1,
		borderColor: gray,
		marginHorizontal: 10,
		flexGrow: 1,
		borderTopLeftRadius: 35,
		borderTopRightRadius: 35,
		paddingTop: 15,
		paddingHorizontal: 15
	},
	todosWrapperContent: {
		flex: 1
	},
	todosWrapperButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	todosWrapperButton: {
		borderWidth: 1,
		borderColor: gray,
		width: '48%',
		padding: 18,
		borderRadius: 35
	},
	todosWrapperButtonClicked: {
		backgroundColor: lightOrange,
		borderWidth: 0
	},
	todosWrapperButtonText: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: black
	},
	todosWrapperButtonTextClicked: {
		color: white,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	// Applied when 'Todos' are empty
	noTodosContainer: {
		backgroundColor: lightGray,
		flex: 1,
		marginTop: 15,
		borderTopLeftRadius: 35,
		borderTopRightRadius: 35,
		justifyContent: 'center',
		alignItems: 'center'
	},
	noTodosMessage: {
		fontSize: 18,
		color: gray
	},
	// Applied when there are 'Todos'
	todosContainer: {
		backgroundColor: lightGray,
		marginTop: 15,
		borderTopLeftRadius: 35,
		borderTopRightRadius: 35,
		padding: 10
	},
	todo: {
		backgroundColor: white,
		marginBottom: 10,
		borderRadius: 35,
		padding: 25
	},
	todoText: {
		textAlign: 'center',
		fontSize: 20,
		marginBottom: 20
	},
	todoButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	todoButton: {
		padding: 10,
		borderRadius: 35,
		width: '45%',
	},
	todoDeleteButton: {
		backgroundColor: red
	},
	todoDoneButton: {
		backgroundColor: lightOrange
	},
	todoButtonText: {
		color: white,
		textAlign: 'center'
	}

});

export default styles;