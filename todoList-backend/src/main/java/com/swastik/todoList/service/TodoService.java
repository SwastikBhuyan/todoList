package com.swastik.todoList.service;

import com.swastik.todoList.entity.Todo;
import com.swastik.todoList.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> findAllTodos(String username) {
        return todoRepository.findAllByUsername(username);
    }

    public Todo findTodoById(String username, int id) {
        return todoRepository.findById(id).orElse(null);
    }

    public void deleteTodoById(String username, int id) {
        todoRepository.deleteById(id);
    }

    public void updateTodoById(String username, int id, Todo todo) {
        todoRepository.deleteById(id);
        todoRepository.save(todo);
    }

    public Todo addTodo(Todo todo) {
        todoRepository.save(todo);
        return todo;
    }
}
