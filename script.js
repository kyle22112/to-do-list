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
    } else {
      li.classList.remove("completed");
    }
  });
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
  document.getElementById("taskInput").value = "";
}
