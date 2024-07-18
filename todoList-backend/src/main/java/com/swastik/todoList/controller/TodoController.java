package com.swastik.todoList.controller;

import com.swastik.todoList.entity.Todo;
import com.swastik.todoList.service.TodoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
//@RequestMapping()
public class TodoController {

    private TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/users/{username}/todos")
    public ResponseEntity<?> retrieveAllTodos(@PathVariable String username) {
        return new ResponseEntity<>(todoService.findAllTodos(username),HttpStatus.OK);
    }

    @GetMapping("/users/{username}/todos/{id}")
    public ResponseEntity<?> retrieveTodo(@PathVariable String username, @PathVariable int id) {
        return new ResponseEntity<>(todoService.findTodoById(username,id),HttpStatus.OK);
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable String username, @PathVariable int id) {
        todoService.deleteTodoById(username,id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<?> updateTodo(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo) {
        todoService.updateTodoById(username,id,todo);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<?> createTodo(@PathVariable String username, @RequestBody Todo todo) {
        return new ResponseEntity<>(todoService.addTodo(todo),HttpStatus.CREATED);
    }
}
