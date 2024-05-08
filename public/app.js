// Initialize Vue app
var app = new Vue({
  el: '#app',
  data: {
    taskInput: '',
    tasks: [],
    completedTasks: [],
    priorityOptions: ['High', 'Medium', 'Low'],
    selectedPriority: '',
    categoryOptions: ['Work', 'Personal', 'Shopping','School','Miscellaneous'],
    selectedCategory: '',
    dueDate: '',
    income: 0,
    expenses: [
      { name: 'Groceries', amount: 0 },
      { name: 'Bills', amount: 0 },
      { name: 'Entertainment', amount: 0 }
    ]
  },
  computed: {
    totalExpenses: function() {
      return this.expenses.reduce((total, expense) => total + parseInt(expense.amount), 0);
    },
    remainingBudget: function() {
      return this.income - this.totalExpenses;
    }
  },
  methods: {
    addTask: function() {
      if (this.taskInput.trim() !== '') {
        var newTask = {
          task: this.taskInput.trim(),
          priority: this.selectedPriority,
          category: this.selectedCategory,
          dueDate: this.dueDate,
        };
        this.tasks.push(newTask);
        this.taskInput = '';
        this.selectedPriority = '';
        this.selectedCategory = '';
        this.dueDate = '';
      } else {
        alert('Please enter a task!');
      }
    },
    moveTaskToCompleted: function(taskIndex) {
      var completedTask = this.tasks.splice(taskIndex, 1)[0];
      this.completedTasks.push(completedTask);
    },
    moveTaskToTodo: function(taskIndex) {
      var task = this.completedTasks.splice(taskIndex, 1)[0];
      this.tasks.push(task);
    },
    deleteTask: function(taskIndex) {
      this.completedTasks.splice(taskIndex, 1);
    },

    addExpense: function() {
      this.expenses.push({ name: '', amount: 0 });
    }
  }
});
