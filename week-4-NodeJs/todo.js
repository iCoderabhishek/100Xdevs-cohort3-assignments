const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const program = new Command();

const TODOS_FILE = path.join(__dirname, 'todos.json');

// Helper function to load todos from file
function loadTodos() {
  if (fs.existsSync(TODOS_FILE)) {
    const todosData = fs.readFileSync(TODOS_FILE, 'utf-8');
    return JSON.parse(todosData);
  }
  return [];
}

// Helper function to save todos to file
function saveTodos(todos) {
  fs.writeFileSync(TODOS_FILE, JSON.stringify(todos, null, 2));
}

// Load todos initially
let todos = loadTodos();

program
  .name('todo')
  .description('make todo using cli')
  .version('0.8.0');

// Command to add a todo
program
  .command('add <todo...>') // Using <todo...> to capture all arguments as a single todo
  .description('add a todo to the list')
  .action((todo) => {
    const todoText = todo.join(' ').trim(); // Combine array to a single string
    if (todoText.length === 0) {
      console.log('Todo cannot be empty');
      return;
    }
    todos.push(todoText); // Store in the array
    saveTodos(todos); // Save the updated todos list to file
    console.log(`Todo added: "${todoText}"`);
  });

// Command to list all todos
program
  .command('list')
  .description('list all the todos')
  .action(() => {
    todos = loadTodos(); // Reload todos from file
    if (todos.length === 0) {
      console.log('No todos found.');
    } else {
      console.log('Your Todos:');
      todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
      });
    }
  });

  // Command to delete a todo
  program
    .command('delete <index>')
    .description('delete a todo from the list')
    .action((index) => {
      todos = loadTodos(); // Reload todos from file
      if (index < 1 || index > todos.length) {
        console.log('Invalid index');
        return;
      }
      todos.splice(index - 1, 1); // Remove the todo at the specified index
      saveTodos(todos); // Save the updated todos list to file
      console.log(`${todos.indexOf(todos[index - 1]) + 1} todo(s) deleted`); // Get the index of the deleted todo and display the updated count
    });

  // Command to complete a todo
  program
    .command('done <index>')
    .description('complete a todo from the list')
    .action((index) => {
      todos = loadTodos(); // Reload todos from file
      if (index < 1 || index > todos.length) {
        console.log('Invalid index');
        return;
      }
      todos[index - 1] = todos[index - 1].replace(/\s*\[[xX]\]\s*/g, ''); // Remove the completed tag from the todo
      saveTodos(todos); // Save the updated todos list to file
      console.log(`${todos.length} todo(s) completed`);
    });
program.parse();
