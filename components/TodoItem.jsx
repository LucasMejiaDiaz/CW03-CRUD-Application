import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

// La pantalla conserva la lista; cada fila recibe una tarea y sus acciones.
export const TodoItem = React.memo(({ item, onToggle, onRemove, theme }) => {
  return (
    <View style={[styles.itemRow, { borderBottomColor: theme.border }]}>
      <Text
        style={[
          styles.todoItem,
          { color: theme.text },
          item.completed && styles.completedText,
        ]}
        onPress={() => onToggle(item.id)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
        accessibilityLabel={item.title}
      >
        {item.title}
      </Text>
      <Pressable
        onPress={() => onRemove(item.id)}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel={`Eliminar ${item.title}`}
      >
        <MaterialCommunityIcons name="delete" size={24} color={theme.icon} />
      </Pressable>
    </View>
  );
});

TodoItem.displayName = "TodoItem";

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    maxWidth: 1024,
    marginHorizontal: "auto",
  },
  todoItem: {
    color: "white",
    flex: 1,
    fontSize: 18,
  },
  completedText: {
    color: "gray",
    textDecorationLine: "line-through",
  },
  icon: {
    color: "red",
  },
});
