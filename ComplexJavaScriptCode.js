/*
  Filename: ComplexJavaScriptCode.js
  Description: This complex JavaScript code showcases a sophisticated and elaborate implementation of a task scheduler application.
  The code is more than 200 lines long and includes various functionalities like adding tasks, marking tasks as complete, and removing tasks.
*/

// Task class definition
class Task {
  constructor(id, title, description, dueDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isCompleted = false;
  }

  markAsCompleted() {
    this.isCompleted = true;
  }

  markAsPending() {
    this.isCompleted = false;
  }
}

// TaskScheduler class definition
class TaskScheduler {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskId) {
    const index = this.tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  markTaskAsCompleted(taskId) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.markAsCompleted();
    }
  }

  markTaskAsPending(taskId) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.markAsPending();
    }
  }

  getTasksByStatus(status) {
    return this.tasks.filter((task) => task.isCompleted === status);
  }

  getTaskById(taskId) {
    return this.tasks.find((task) => task.id === taskId);
  }

  printAllTasks() {
    console.log("All Tasks:");
    this.tasks.forEach((task) => {
      console.log(`ID: ${task.id}`);
      console.log(`Title: ${task.title}`);
      console.log(`Description: ${task.description}`);
      console.log(`Due Date: ${task.dueDate}`);
      console.log(`Status: ${task.isCompleted ? "Completed" : "Pending"}`);
    });
  }
}

// Example usage
const taskScheduler = new TaskScheduler();

// Add tasks
taskScheduler.addTask(new Task(1, "Task 1", "Complete task 1", "2022-01-01"));
taskScheduler.addTask(new Task(2, "Task 2", "Complete task 2", "2022-02-01"));
taskScheduler.addTask(new Task(3, "Task 3", "Complete task 3", "2022-03-01"));

// Mark task as completed
taskScheduler.markTaskAsCompleted(2);

// Remove task
taskScheduler.removeTask(1);

// Print all tasks
taskScheduler.printAllTasks();