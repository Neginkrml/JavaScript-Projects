// DOM elementlerini seçme

const todoInput = document.querySelector(".todo-input");
const priorityButtons = document.querySelectorAll(".priority-button");
const addButton = document.querySelector(".add-btn");
const todosContainer = document.querySelector(".todos-container");
const todoCount = document.querySelector(".todo-count");
const clearCompleteButton = document.querySelector(".clear-completed");

// Durumlar
let todos = [];
let selectedPriority = null;

// Localstorage'a verileri kaydetme
function saveTodos() {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.log("LocalStorage'e eklerken hata oluştu");
  }
}

//Localsotarge2dan verileri çekme
function loadTodos() {
  try {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      todos = JSON.parse(storedTodos);
    }
  } catch (error) {
    console.log("Hata oluştu", error);
    todos = [];
  }
}

priorityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //Önceki seçimlerin temizlenmesi
    priorityButtons.forEach((btn) => btn.classList.remove("selected"));

    //Yeni seçimi işaretle
    button.classList.add("selected");
    selectedPriority = button.dataset.priority;
    //Eğer input alanı boş değilse ekleme butonunu etkinleştir
    toggleAddButton();
  });
});

todoInput.addEventListener("input", toggleAddButton);
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !addButton.disabled) {
    addTodo();
  }
});

//Ekleme butonunu etkinleştirme/ devredışı bırakmak
function toggleAddButton() {}

// Yeni todo ekleme fonksyonu
function addTodo() {}

//Görev listesini yeniden oluşturma
function renderTodos() {}

// Görevdeki Checkbox olaylarını ekleme
function addcheckboxEvent() {}

// Düzenleme ve silme  butonlarına fonksiyonları
function addEditDeleteEventListeners() {}

// Görev sayısını güncelleme
function updateTodoCount() {}
