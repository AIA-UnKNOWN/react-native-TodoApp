/* eslint-disable */
import styles from './styles/App';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';


function Navbar() {
  return (
    <View style={styles.navBar}>
      <Text style={styles.navBarTitle}>
        Todo
      </Text>
    </View>
  )
}

function TodoInputField({ currentTodoValue, onInputChange, onAdd }) {
  return (
    <View style={styles.todoInputFieldContainer}>
      <TextInput
        style={styles.todoInputField}
        placeholder="e.g. Read a book"
        onChangeText={onInputChange}
        value={currentTodoValue}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={onAdd}
      >
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const TodosWrapperButtons = ({ onSectionButtonClick }) => {
  const [ clicked, setClicked ] = useState('Todos');

  const todosWrapperButton = styles.todosWrapperButton;
  const todosWrapperButtonText = styles.todosWrapperButtonText;
  const todosWrapperButtonClicked = styles.todosWrapperButtonClicked;
  const todosWrapperButtonTextClicked = styles.todosWrapperButtonTextClicked;

  const buttonClick = buttonName => {
    setClicked(buttonName);
    onSectionButtonClick(buttonName);
  }

  return (
    <View style={styles.todosWrapperButtons}>
      <TouchableOpacity
        style={clicked === 'Todos' ?
          [todosWrapperButton, todosWrapperButtonClicked] : todosWrapperButton
        }
        onPress={() => buttonClick('Todos')}
      >
        <Text
          style={clicked === 'Todos' ? todosWrapperButtonTextClicked : todosWrapperButtonText
          }
        >
          Todos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={clicked === 'Done' ?
          [todosWrapperButton, todosWrapperButtonClicked] : todosWrapperButton
        }
        onPress={() => buttonClick('Done')}
      >
        <Text
          style={clicked === 'Done' ? todosWrapperButtonTextClicked : todosWrapperButtonText
          }
        >
          Done
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function Todos({ todos, onDelete, onDone, onButtonClick }) {
  const todosWrapper = styles.todosWrapper;
  const todosWrapperContent = styles.todosWrapperContent;

  if (todos.length === 0) {
    return (
      <View style={todosWrapper}>
        <View style={todosWrapperContent}>
          <TodosWrapperButtons onSectionButtonClick={onButtonClick} />
          <View style={styles.noTodosContainer}>
            <Text style={styles.noTodosMessage}>No todos yet</Text>
          </View>
        </View>
      </View>
    );
  }

  const Todo = ({ text }) => {
    const onDeleteTodo = () => {
      onDelete(text);
    }

    const onDoneTodo = () => {
      onDone(text);
    }

    return (
      <View style={styles.todo}>
        <Text style={styles.todoText}>{text}</Text>
        <View style={styles.todoButtons}>
          <TouchableOpacity
            style={[styles.todoButton, styles.todoDeleteButton]}
            onPress={onDeleteTodo}
          >
            <Text style={styles.todoButtonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.todoButton, styles.todoDoneButton]}
            onPress={onDoneTodo}
          >
            <Text style={styles.todoButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    return (
      <Todo text={item} />
    );
  }

  return (
    <View style={todosWrapper}>
      <View style={todosWrapperContent}>
        <TodosWrapperButtons/>
        <FlatList
          style={styles.todosContainer}
          data={todos}
          renderItem={renderItem}
          keyExtractor={todo => `${todo}-${Math.random()}`}
          extraData={todos}
        />
      </View>
    </View>
  );
}


function App() {
  const [ currentInput, setCurrentInput ] = useState("");
  const [ currentButton, setCurrentButton ] = useState('Todos');
  const [ todos, setTodos ] = useState([]);
  const [ doneItems, setDoneItems ] = useState([]);

  const onButtonClick = buttonName => {
    setCurrentButton(buttonName);
  }

  const addTodo = () => {
    if (currentInput === '') {
      return;
    }

    const newTodos = [...todos, currentInput];
    setTodos(newTodos);
    setCurrentInput("");
  }

  const onDeleteTodo = text => {
    setTodos(prevState => {
      const currentTodos = todos;
      currentTodos.splice(currentTodos.indexOf(text), 1);
      return [...prevState];
    })
  }

  const onDoneTodo = text => {
    const currentDoneItems = doneItems;
    currentDoneItems.push(text);
    setDoneItems(currentDoneItems);
  }

  return (
    <View style={styles.app}>
      <Navbar/>
      <TodoInputField
        currentTodoValue={currentInput}
        onInputChange={setCurrentInput}
        onAdd={addTodo}
      />
      <Todos
        todos={todos}
        onButtonClick={onButtonClick}
        onDelete={onDeleteTodo}
        onDone={onDoneTodo}
      />
    </View>
  );
}

export default App;