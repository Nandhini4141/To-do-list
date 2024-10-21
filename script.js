document.getElementById('todoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskContent = document.getElementById('newTask').value;
    if (taskContent.trim() !== "") {
        addTask(taskContent);
        document.getElementById('newTask').value = ''; // Clear input field
    }
});

function addTask(content) {
    const tasksList = document.getElementById('tasksList');
    
    // Create task element
    const taskItem = document.createElement('li');
    taskItem.textContent = content;
    
    // Create complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('completeBtn');
    completeBtn.onclick = function() {
        taskItem.classList.toggle('completed');
    };
    taskItem.appendChild(completeBtn);
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.onclick = function() {
        tasksList.removeChild(taskItem);
    };
    taskItem.appendChild(deleteBtn);
    
    // Append task to the list
    tasksList.appendChild(taskItem);
}
