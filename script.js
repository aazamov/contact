const inputName = document.getElementById("input-name");
const inputNumber = document.getElementById("input-number");
const inputEmail = document.getElementById("input-email");
const todosWrapper = document.querySelector(".all-cards");
const editor = document.getElementById("editing");
const addTaskBtn = document.getElementById("add-btn");
const editingCard = document.getElementById("editing-card");
const editAny = document.getElementById("edit-any");
const lastBtn = document.getElementById("hello");

let tasks;
!localStorage.tasks
  ? (tasks = [])
  : (tasks = JSON.parse(localStorage.getItem("tasks")));

function Task(name, number, email) {
  this.name = name;
  this.number = number;
  this.email = email;
}

const createTemplate = (task, index) => {
  return `
        <div class="cards"> 
                <div class="contact-name">
                <p>
                    Name: 
                </p>
                <p id='input-name-value'> &nbsp ${task.name}</p>
                </div>
                <div class="contact-number">
                <p>
                    Phone num:
                </p>
                <p> &nbsp${task.number}</p>
                </div>
                <div class="contact-email">
                <p>
                   Email address:
                </p>
                <p> &nbsp${task.email}</p>
                </div>
                <div class="contact-buttons">
                    <button id='hello' onclick='editTask(${index})' class="edit">Edit</button>
                    <button onclick='deleteTask(${index})' class="del">Delete</button>
                </div>

        </div>
        
        </div>
    `;
};

const fillHtmlList = () => {
  todosWrapper.innerHTML = "";
  // if (tasks.length > 0) {
  tasks.forEach((item, index) => {
    todosWrapper.innerHTML += createTemplate(item, index);
  });
};
// };
fillHtmlList();

const uploadLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

addTaskBtn.addEventListener("click", () => {
  tasks.push(new Task(inputName.value, inputNumber.value, inputEmail.value));

  uploadLocal();
  fillHtmlList();
  inputName.value = "";
  inputNumber.value = "";
  inputEmail.value = "";
});

const deleteTask = (index) => {
  setTimeout(() => {
    tasks.splice(index, 1);
    uploadLocal();
    fillHtmlList();
  }, 200);
};

const editTask = (index) => {
  inputName.style.background = "red";
  inputNumber.style.background = "red";
  inputEmail.style.background = "red";
};

// const editTask = () => {
//   tasks.push(new Task(inputName.value, inputNumber.value, inputEmail.value));

//   console.log("per");
//   editAny.style.display = "inline";
// };
