document.addEventListener("DOMContentLoaded", function() {
    // Collect responses and save them to hidden fields
    document.querySelectorAll('.bq1').forEach(function(button) {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-bq');
            document.getElementById('q1_answer').value = value; 
            console.log('The answer is 1 is chosen:', value);
        });
    });

    document.querySelectorAll('.bq2').forEach(function(button) {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-bq');
            document.getElementById('q2_answer').value = value; 
            console.log('The answer is 2 chosen:', value);
        });
    });

    document.querySelectorAll('.bq3').forEach(function(button) {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-bq');
            document.getElementById('q3_answer').value = value; 
            console.log('The answer is 3 is chosen:', value);
        });
    });

    document.querySelectorAll('.bq4').forEach(function(button) {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-bq');
            document.getElementById('q4_answer').value = value; 
            console.log('The answer is 4 is chosen:', value);
        });
    });

    // Handler for the ‘OK’ button in a modal window
    const modalButton3 = document.getElementById('p_modal_button3');
    if (modalButton3) {
        modalButton3.addEventListener('click', function(event) {
            // Stop the standard behaviour of the button (if the form is bound to the button)
            event.preventDefault();

            // Get data from hidden fields
            const q1 = document.getElementById('q1_answer').value;
            const q2 = document.getElementById('q2_answer').value;
            const q3 = document.getElementById('q3_answer').value;
            const q4 = document.getElementById('q4_answer').value;

            // Output the answers to the console
            console.log('Response 1:', q1 || 'Response 1 unselected');
            console.log('Response 2:', q2 || 'Response 2 unselected');
            console.log('Response 3:', q3 || 'Response 3 unselected');
            console.log('Response 4:', q4 || 'Response 4 unselected');

        });
    } else {
        console.error("Button with ID ‘p_modal_button3’ was not found.");
    }

    // Handler for clicking the ‘Publish’ button to add comments
    const publishButton = document.getElementById('publish_button');

    publishButton.addEventListener('click', function() {
        // Get the comment text from the text field
        const commentText = document.getElementById('comment_text').value;

        // Check that the comment is not empty
        if (commentText.trim() !== '') {
            // Create a new element for comment
            const newComment = document.createElement('div');
            newComment.classList.add('comments'); // Add a class for a new comment

            // Form HTML for a new comment
            newComment.innerHTML = `
                <div class="profile">
                    <img src="assets/images/an.png" alt="Utilizador anónimo">
                </div>
                <div class="comment-content">
                    <p class="name">Utilizador anónimo</p>
                    <p>${commentText}</p>
                </div>
                <div class="clr"></div>
                <div class="comment-status">
                    <span>Agora mesmo.</span>
                </div>
            `;

            // Add a new comment to the comment list
            document.querySelector('.comments_face').appendChild(newComment);
            // Clear the text input field
            document.getElementById('comment_text').value = '';
        } else {
            // If the comment is empty, print a message to the console
            console.log('The comment cannot be empty.');
        }
    });
});