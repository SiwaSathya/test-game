const draggables = document.querySelectorAll('.draggable');
const droppables = document.querySelectorAll('.droppable');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', dragStart);
  draggable.addEventListener('dragend', dragEnd);
});

droppables.forEach(droppable => {
  droppable.addEventListener('dragenter', dragEnter);
  droppable.addEventListener('dragover', dragOver);
  droppable.addEventListener('dragleave', dragLeave);
  droppable.addEventListener('drop', drop);
});

let draggedItem = null;

function dragStart() {
  draggedItem = this;
  setTimeout(() => this.style.display = 'none', 0);
}

function dragEnd() {
  setTimeout(() => this.style.display = 'block', 0);
  draggedItem = null;
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('droppable-hover');
}

function dragOver(e) {
  e.preventDefault();
}

function dragLeave() {
  this.classList.remove('droppable-hover');
}

function drop() {
  this.classList.remove('droppable-hover');
  this.classList.add('dropped');
  this.appendChild(draggedItem);
}
