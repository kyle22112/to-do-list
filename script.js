function addTask() {
  var input = document.getElementById("taskInput").value;
  if (input === "") {
    alert("Please enter a task.");
    return;
  }
  var ul = document.getElementById("taskList");
  var li = document.createElement("li");
  var removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function() {
    ul.removeChild(li);
  })
  li.appendChild(document.createTextNode(input));
  li.appendChild(removeButton);
  ul.appendChild(li);
  document.getElementById("taskInput").value = "";
}
