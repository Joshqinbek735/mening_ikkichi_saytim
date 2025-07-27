document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('myButton');
    const messageParagraph = document.getElementById('message');

    if (myButton && messageParagraph) {
        myButton.addEventListener('click', () => {
            messageParagraph.textContent = 'Tugma bosildi! Ajoyib!';
        });
    }
});