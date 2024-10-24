// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Attach event listener to the form
    const form = document.getElementById('resume-form');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission from reloading the page

            // Collect input values safely
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const phone = document.getElementById('phone')?.value.trim();
            const education = document.getElementById('education')?.value.trim();
            const experience = document.getElementById('experience')?.value.trim();
            const skills = document.getElementById('skills')?.value.trim();

            // Check if any of the fields are null or empty
            if (!name || !email || !phone || !education || !experience || !skills) {
                console.error('One or more input fields are empty or invalid.');
                return; // Exit if any field is invalid
            }

            // Generate the resume content dynamically
            const resumeHTML = `
                <h2><b> Editable Resume</b></h2>
                <h3><b>Personal Information</b></h3>
                <p><b>Name:</b><span contenteditable="true">${name}</span></p>
                <p><b>Email:</b><span contenteditable="true">${email}</span></p>
                <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
                <br>
                <h3>Education</h3>
                <p contenteditable="true">${education}</p>
                <br>
                <h3>Experience</h3>
                <p contenteditable="true">${experience}</p>
                <br>
                <h3>Skills</h3>
                <p contenteditable="true">${skills}</p>
            `;

            // Display the generated resume
            const resumeDisplayElement = document.getElementById('resume-display');
            resumeDisplayElement.innerHTML = resumeHTML;
            resumeDisplayElement.style.display = 'block'; // Make it visible
        });
    } else {
        console.error('Form element not found.');
    }
});
