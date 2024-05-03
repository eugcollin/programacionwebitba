document.addEventListener('DOMContentLoaded', function() {
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    document.getElementById('contactform').addEventListener('submit', function(e) {
        e.preventDefault();
        // Call message function to handle form submission
        message();
    });

    function message() {
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var subject = document.getElementById('subject');
        var msg = document.getElementById('message');

        if (name.value === '' || email.value === '' || subject.value === '' || msg.value === '') {
            danger.style.display = 'block';
            success.style.display = 'none';
        }
        else {
            success.style.display = 'block';
            danger.style.display = 'none';

            // Create an object to store the formdata
            var formData = {
                name: name.value,
                email: email.value,
                message: msg.value
            };
            
            setTimeout(() => {
                name.value = '';
                email.value = '';
                subject.value = '';
                msg.value = '';
            }, 2000);
        }
    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

    const button = document.querySelector('button');

    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#e0f2f1';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#F1E6D7';
    });
});
