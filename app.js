const inputEl = document.querySelector("#inputEl")
const addBtn = document.querySelector("#addBtn")
const listEl = document.querySelector("#listEl")

addBtn.addEventListener("click", () => {
    if (inputEl.value.length == 0) {
        alert("Please enter some task")
    } else {
        const toDo = `<li class="bg-indigo-500 text-white font-semibold p-2 mx-2 mb-4 rounded-md">
                    ${inputEl.value}
                    <button class="delete">
                    <i class="far fa-trash-alt"></i>
                    </button>
                    </li>`

        listEl.innerHTML += toDo

        let current_tasks = document.querySelectorAll(".delete")
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
});


