import { useEffect, useState } from "react";
import data from "../data/todos";
import { loadTodos, saveTodos } from "../utils/todoStorage";

export function useTodos() {
  const [todos, setTodos] = useState(() =>
    [...data].sort((a, b) => b.id - a.id)
  );
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function cargarTareas() {
      const savedTodos = await loadTodos();
      if (cancelled) return;

      if (savedTodos !== null) {
        setTodos(savedTodos);
      }

      setHasLoaded(true);
    }

    cargarTareas();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      saveTodos(todos);
    }
  }, [hasLoaded, todos]);

  const addTodo = (title) => {
    if (!title.trim()) return false;

    setTodos((currentTodos) => {
      const newId = currentTodos.length > 0 ? currentTodos[0].id + 1 : 1;

      return [
        { id: newId, title: title.trim(), completed: false },
        ...currentTodos,
      ];
    });

    return true;
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  };
  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  };
}
