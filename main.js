const columns = document.querySelectorAll("#column")
const draggables = document.querySelectorAll("#build");

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

columns.forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
    });

    column.addEventListener('drop', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');

        if (draggable) {
            column.appendChild(draggable);
        }
    });
});


draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.style.transform = 'rotate(10deg)';
    });

    draggable.addEventListener('dragend', () => {
        draggable.style.transform = 'rotate(0deg)';
    });
});