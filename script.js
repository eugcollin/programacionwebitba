document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactform').addEventListener('submit', function(e) {
        e.preventDefault();
function message() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var msg = document.getElementById('message');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    
    if (name.value === '' || email.value === '' || subject.value === '' || msg.value === '') {
        danger.style.display = 'block';
        success.style.display = 'none';
    }
    else {
        success.style.display = 'block';
        danger.style.display = 'none';

        //create an object to store the formdata
        var formData = {
            name: name,
            email: email,
            message: message
        };
        
        setTimeout(() => {
            name.value = '';
            email.value = '';
            subject.value = '';
            msg.value = '';
        }, 2000);
    }
}
})
})
  

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';

    }, 4000);

// Get the button element
const button = document.querySelector('button')

// Add a mouseover event listener
button.addEventListener('mouseover', () => {
  // Change the button's background color
  button.style.backgroundColor = '#e0f2f1';
});

// Add a mouseout event listener
button.addEventListener('mouseout', () => {
  // Change the button's background color back to its original color
  button.style.backgroundColor = '#F1E6D7';
});