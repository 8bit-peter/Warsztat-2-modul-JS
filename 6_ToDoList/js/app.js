/**
 * Created by Jacek on 2015-12-16.
 */


document.addEventListener("DOMContentLoaded", function(){

    var addTaskButton = document.querySelector('#addTaskButton');
    var taskList = document.querySelector('#taskList');
    var counter = 0;
    var removeButton = document.querySelector('#removeFinishedTasksButton');


    addTaskButton.addEventListener('click', function (event) {

        var taskInput = document.querySelector('#taskInput');

        var newTask = document.createElement('li');
        var taskHeader = document.createElement('h1');
        var taskText = document.createElement('p');
        var btnDelete = document.createElement('button');
        var btnComplete = document.createElement('button');

        if (taskInput.value.length > 5 && taskInput.value.length < 100) {

        newTask.innerText = 'Task ' + ++counter;
        taskText.innerText = taskInput.value;
        btnDelete.innerText = 'X';
        btnComplete.innerText = 'OK';

        btnDelete.classList.add('btn');
        btnComplete.classList.add('btn');

        newTask.appendChild(taskHeader);
        newTask.appendChild(taskText);
        newTask.appendChild(btnDelete);
        newTask.appendChild(btnComplete);
        taskList.appendChild(newTask);

        }

        taskInput.value = '';

        btnComplete.addEventListener('click', function (event) {
            newTask.classList.toggle('done');
        });

        btnDelete.addEventListener('click', function (event) {
            newTask.parentElement.removeChild(newTask);
            counter--;
        });
    });

    removeButton.addEventListener('click', function (event) {
       var done = document.querySelectorAll('.done');
       for (var i = 0; i < done.length; i++) {
           done[i].parentElement.removeChild(done[i]);
           counter--;
       }
    });
});








