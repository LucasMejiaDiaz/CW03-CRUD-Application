import AsyncStorage from "@react-native-async-storage/async-storage";

const TODOS_KEY = "todo_list";

export async function saveTodos(todos) {
  try {
    const jsonValue = JSON.stringify(todos);
    await AsyncStorage.setItem(TODOS_KEY, jsonValue);
  } catch (error) {
    console.error("No se pudieron guardar las tareas", error);
  }
}

export async function loadTodos() {
  try {
    const jsonValue = await AsyncStorage.getItem(TODOS_KEY);
    return jsonValue === null ? null : JSON.parse(jsonValue);
  } catch (error) {
    console.error("No se pudieron cargar las tareas", error);
    return null;
  }
}
