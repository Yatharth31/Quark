// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.navbar');

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});



const add = document.querySelector("#add"),
  remove = document.getElementById("remove"),
  popupBox = document.querySelector(".popup-box"),
  popupTitle = popupBox.querySelector(".header p"),
  closeIcon = popupBox.querySelector(".header img"),
  titleTag = popupBox.querySelector("input"),
  descTag = popupBox.querySelector("textarea"),
  addBtn = popupBox.querySelector("button"),
  prevTask = document.querySelector("#first");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const notes = JSON.parse(localStorage.getItem("notes") || "[]");

const done_task = JSON.parse(localStorage.getItem("done_task")||"[]");
let isUpdate = false,
    updateId;

add.addEventListener("click", () => {
  popupTitle.innerText = "Add a new Task";
  addBtn.innerText = "Add Task";
  popupBox.classList.add("show");
  document.querySelector("body").style.overflow = "hidden";
  if (window.innerWidth > 660) titleTag.focus();
});
remove.addEventListener("click", () => {
  if (!notes) return;
  let confirmDel = confirm("Are you sure you want to delete all notes?");
  if (!confirmDel) return;
  localStorage.clear();
  location.reload();
});

closeIcon.addEventListener("click", () => {
  isUpdate = false;
  titleTag.value = descTag.value = "";
  popupBox.classList.remove("show");
  document.querySelector("body").style.overflow = "auto";
});


function showNotes() {
  document.querySelectorAll(".note").forEach((li) => li.remove());
  notes.forEach((note, id) => {
    let filterDesc = note.description.replaceAll("\n", "<br/>");
    let liTag = `<li class="note">
                        <div class="details">
                            <p>${note.title}</p>
                            <span>${filterDesc}</span>
                        </div>
                        <div class="bottom-content">
                            <span>${note.date}</span>
                            <div class="settings">
                                <img onclick="showMenu(this)" src="./images/ellipsis.png">
                                <ul class="menu">
                                    <li onclick="updateNote(${id}, '${note.title}', '${filterDesc}')"><img src="./images/edit.png">Edit</li>
                                    <li onclick="doneTask(${id},'${note.title}', '${filterDesc}')"><img src="./images/done.png">Done</li>
                                    <li onclick="deleteNote(${id})"><img src="./images/trash.png">Delete</li>
                                </ul>
                            </div>
                        </div>
                    </li>`;
    add.insertAdjacentHTML("afterend", liTag);
  });
}
showNotes();

function showMenu(elem) {
  elem.parentElement.classList.add("show");
  document.addEventListener("click", (e) => {
    if (e.target.tagName != "IMG" || e.target != elem) {
      elem.parentElement.classList.remove("show");
    }
  });
}

function deleteNote(noteId) {
  // let confirmDel = confirm("Are you sure you want to delete this note?");
  // if (!confirmDel) return;
  notes.splice(noteId, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
  doneTask();
}

function updateNote(noteId, title, filterDesc) {
  let description = filterDesc.replaceAll("<br/>", "\r\n");
  updateId = noteId;
  isUpdate = true;
  add.click();
  titleTag.value = title;
  descTag.value = description;
  popupTitle.innerText = "Update a Note";
  addBtn.innerText = "Update Note";
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let title = titleTag.value.trim(),
    description = descTag.value.trim();

  if (title || description) {
    let currentDate = new Date(),
      month = months[currentDate.getMonth()],
      day = currentDate.getDate(),
      year = currentDate.getFullYear();

    let noteInfo = { title, description, date: `${month} ${day}, ${year}` };
    if (!isUpdate) {
      notes.push(noteInfo);
    } else {
      isUpdate = false;
      notes[updateId] = noteInfo;
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
    closeIcon.click();
  }
});



//
function doneTask(noteId,title,desc){
  document.querySelectorAll("#prev-note").forEach((li) => li.remove());

  done_task.forEach((note, id) => {
    let liTag = `<li class="prev-note" id="prev-note">
                        <div class="details">
                            <p>${title}</p>
                            <span>${desc}</span>
                        </div>
                        <div class="bottom-content">
                            <span>${noteId.date}</span>
                            <div class="settings">
                                <img onclick="showMenu(this)" src="./images/ellipsis.png">
                                <ul class="menu">
                                    <li onclick="deleteNote(${id})"><img src="./images/trash.png">Delete</li>
                                </ul>
                            </div>
                        </div>
                    </li>`;
    prevTask.insertAdjacentHTML("afterend",liTag);
    localStorage.setItem("done_task", JSON.stringify(done_task));
    deleteNote(id);
});

}
doneTask();
//