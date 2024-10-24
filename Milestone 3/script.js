// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Attach event listener to the form
    var form = document.getElementById('resume-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            var _a, _b, _c, _d, _e, _f;
            event.preventDefault(); // Prevent form submission from reloading the page
            // Collect input values safely
            var name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value.trim();
            var email = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value.trim();
            var phone = (_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value.trim();
            var education = (_d = document.getElementById('education')) === null || _d === void 0 ? void 0 : _d.value.trim();
            var experience = (_e = document.getElementById('experience')) === null || _e === void 0 ? void 0 : _e.value.trim();
            var skills = (_f = document.getElementById('skills')) === null || _f === void 0 ? void 0 : _f.value.trim();
            // Check if any of the fields are null or empty
            if (!name || !email || !phone || !education || !experience || !skills) {
                console.error('One or more input fields are empty or invalid.');
                return; // Exit if any field is invalid
            }
            // Generate the resume content dynamically
            var resumeHTML = "\n                <h2><b>Resume</b></h2>\n                <h3><b>Personal Information</b></h3>\n                <p><b>Name:</b> ".concat(name, "</p>\n                <p><b>Email:</b> ").concat(email, "</p>\n                <p><b>Phone:</b> ").concat(phone, "</p>\n                <br>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <br>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n                <br>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            ");
            // Display the generated resume
            var resumeDisplayElement = document.getElementById('resume-display');
            resumeDisplayElement.innerHTML = resumeHTML;
            resumeDisplayElement.style.display = 'block'; // Make it visible
        });
    }
    else {
        console.error('Form element not found.');
    }
});
