function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    let valid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required!';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required!';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    return valid;
}

function handleFormSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
    }
}

function toggleParagraphVisibility() {
    const paragraph = document.getElementById('infoParagraph');
    const button = document.getElementById('toggleButton');

    if (paragraph.classList.contains('hidden')) {
        paragraph.classList.remove('hidden');
        button.textContent = 'Hide Info';
    } else {
        paragraph.classList.add('hidden');
        button.textContent = 'Show Info';
    }
}

document.getElementById('myForm').addEventListener('submit', handleFormSubmit);
document.getElementById('toggleButton').addEventListener('click', toggleParagraphVisibility);
