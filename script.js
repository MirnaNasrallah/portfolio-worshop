document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Toggle between light and dark mode
  themeToggle.addEventListener("click", () => {
    // Toggle the 'dark' class on the body element
    body.classList.toggle("dark");
    // Save the user's theme preference (dark or light) in localStorage
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  });

  // Load the theme preference from localStorage on page load
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
  }

  const skillsList = document.getElementById("skills-list");
  const projectsList = document.getElementById("projects-list");
  const skillInput = document.getElementById("skill-input");
  const projectInput = document.getElementById("project-input");

  // Reusable function to add a new item to a list
  function addItem(inputElement, container) {
    const content = inputElement.value.trim(); // Get trimmed user input
    if (content) {
      const li = document.createElement("li"); // Create a new list item
      li.textContent = content; // Set its text content
      container.appendChild(li); // Append the item to the specified container
      inputElement.value = ""; // Clear the input field
    }
  }

  // Add skill to the skills list when the button is clicked
  document.getElementById("add-skill").addEventListener("click", () => {
    addItem(skillInput, skillsList);
  });

  // Add project to the projects list when the button is clicked
  document.getElementById("add-project").addEventListener("click", () => {
    addItem(projectInput, projectsList);
  });

  const contactForm = document.getElementById("contact-form");

// Handle form submission for the contact form
contactForm.addEventListener("submit", (e) => {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault();

    // Display a confirmation message to the user
    const name = document.getElementById("name").value;
    alert(`Thank you ${name} for your message!`);

    // Reset the form inputs to their initial empty state
    contactForm.reset();
});

});


// document.addEventListener("DOMContentLoaded", () => {
//   const themeToggle = document.getElementById("theme-toggle");
//   const body = document.body;

//   // Toggle between light and dark mode
//   themeToggle.addEventListener("click", () => {
//     body.classList.toggle("dark");
//     localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
//   });

//   // Load theme preference from localStorage
//   if (localStorage.getItem("theme") === "dark") {
//     body.classList.add("dark");
//   }

//   const skillsList = document.getElementById("skills-list");
//   const addSkillButton = document.getElementById("add-skill");
//   const skillInput = document.getElementById("skill-input");

//   addSkillButton.addEventListener("click", () => {
//     const skill = skillInput.value.trim();
//     if (skill) {
//       const li = document.createElement("li");
//       li.textContent = skill;
//       skillsList.appendChild(li);
//       skillInput.value = "";
//     }
//   });

//   const projectsList = document.getElementById("projects-list");
//   const addProjectButton = document.getElementById("add-project");
//   const projectInput = document.getElementById("project-input");

//   addProjectButton.addEventListener("click", () => {
//     const project = projectInput.value.trim();
//     if (project) {
//       const li = document.createElement("li");
//       li.textContent = project;
//       projectsList.appendChild(li);
//       projectInput.value = "";
//     }
//   });

//   const contactForm = document.getElementById("contact-form");
//   contactForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert("Thank you for your message!");
//     contactForm.reset();
//   });
// });
