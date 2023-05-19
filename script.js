// Function to toggle the visibility of the projects list
function toggleProjects() {
    var projectsList = document.querySelector('.projects-list');
    projectsList.classList.toggle('hidden');
  }
  
  // Attach a click event listener to the projects section title
  var projectsSection = document.querySelector('.projects-section');
  var sectionTitle = projectsSection.querySelector('.projects_title');
  sectionTitle.addEventListener('click', toggleProjects);
  