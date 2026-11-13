import { useContext, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TodoItem } from "../../components/TodoItem";
import { ThemeContext } from "../../context/ThemeContext";
import { useTodos } from "../../hooks/useTodo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Index() {
  const [text, setText] = useState("");
  const { theme, colorScheme, setColorScheme } = useContext(ThemeContext);
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();
  const handleAddTodo = () => {
    if (addTodo(text)) {
      setText("");
    }
  };
  const styles = createStyles(theme, colorScheme);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Input text here"
          placeholderTextColor="gray"
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleAddTodo}
          returnKeyType="done"
          accessibilityLabel="Nueva tarea"
        />
        <Pressable style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>Add</Text>
          </Pressable>
        <Pressable
          style={styles.button}
          onPress={() =>
            setColorScheme(colorScheme === "light" ? "dark" : "light")
          }
          accessibilityRole="button"
          accessibilityLabel="Cambiar tema"
        >
          <MaterialCommunityIcons
            name="lightbulb"
            size={24}
            color="white"
          />
        </Pressable>
      </View>
      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onToggle={toggleTodo}
            onRemove={removeTodo}
            theme={theme}
          />
        )}
        keyExtractor={(todo) => todo.id.toString()}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No hay tareas pendientes. Agrega una.
          </Text>
        }
      />
    </SafeAreaView>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    inputContainer: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      padding: 16,
      maxWidth: 600,
      marginHorizontal: "auto",
    },
    list: {
      flex: 1,
      width: "100%",
      maxWidth: 600,
      alignSelf: "center",
    },
    listContent: {
      flexGrow: 1,
      paddingHorizontal: 16,
      paddingBottom: 24,
    },
    emptyText: {
      color: "gray",
      textAlign: "center",
      marginTop: 24,
    },
    input: {
      flex: 1,
      minWidth: 0,
      color: "white",
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
    },
    button: {
      backgroundColor: "#007AFF",
      padding: 12,
      borderRadius: 8,
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
}
