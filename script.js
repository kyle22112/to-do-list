function addTask() {
  var input = document.getElementById("taskInput").value;
  if (input === "") {
    alert("Please enter a task.");
    return;
  }
  var ul = document.getElementById("taskList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
  document.getElementById("taskInput").value = "";

  // Add event listener to mark task as complete when clicked
  li.addEventListener("click", function() {
    li.classList.toggle("completed");
  });

  // Add event listener to delete task when double-clicked
  li.addEventListener("dblclick", function() {
    ul.removeChild(li);
  });
