// Highlight project on click
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        alert(`You selected: ${project.querySelector('h3').textContent}`);
    });
});
