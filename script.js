function addTask() {
  var input = document.getElementById("taskInput").value;
  if (input === "") {
    alert("Please enter a task.");
    return;
  }
  var ul = document.getElementById("taskList");
  var li = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      li.classList.add("completed");
      // Trigger confetti animation when task is completed
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      li.classList.remove("completed");
    }
  });
  var removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function() {
    ul.removeChild(li);
  });
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(input));
  li.appendChild(removeButton);
  ul.appendChild(li);
  document.getElementById("taskInput").value = "";
}
