// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Attach event listener to the form
    const form = document.getElementById('resume-form') as HTMLFormElement;

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission from reloading the page

            // Collect input values safely and cast to appropriate types
            const name = (document.getElementById('name') as HTMLInputElement).value.trim();
            const email = (document.getElementById('email') as HTMLInputElement).value.trim();
            const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
            const education = (document.getElementById('education') as HTMLTextAreaElement).value.trim();
            const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.trim();
            const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.trim();

            // Check if any of the fields are null or empty
            if (!name || !email || !phone || !education || !experience || !skills) {
                console.error('One or more input fields are empty or invalid.');
                return; // Exit if any field is invalid
            }

            // Generate the resume content dynamically
            const resumeHTML = `
                <h2><b>Resume</b></h2>
                <h3><b>Personal Information</b></h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone}</p>
                <br>
                <h3>Education</h3>
                <p>${education}</p>
                <br>
                <h3>Experience</h3>
                <p>${experience}</p>
                <br>
                <h3>Skills</h3>
                <p>${skills}</p>
            `;

            // Display the generated resume
            const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
            resumeDisplayElement.innerHTML = resumeHTML;
            resumeDisplayElement.style.display = 'block'; // Make it visible
        });
    } else {
        console.error('Form element not found.');
    }
});
