const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "This is the first project.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "project1.png",
      link: "https://www.example.com/project1",
    },
    {
      id: 2,
      name: "Project 2",
      description: "This is the second project.",
      technologies: ["Python", "Django", "PostgreSQL"],
      image: "project2.png",
      link: "https://www.example.com/project2",
    },
    {
      id: 3,
      name: "Project 3",
      description: "This is the third project.",
      technologies: ["React", "Redux", "Node.js"],
      image: "project3.png",
      link: "https://www.example.com/project3",
    },
  ];
  
  const projectList = document.querySelector("#project-list ul");
  const projectDetails = document.querySelector("#project-details");
  
  projects.forEach((project) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.textContent = project.name;
    listItem.appendChild(link);
    projectList.appendChild(listItem);
  
    link.addEventListener("click", (event) => {
      event.preventDefault();
      displayProjectDetails(project);
    });
  });
  
  function displayProjectDetails(project) {
    projectDetails.innerHTML = `
      <h2>${project.name}</h2>
      <img src="${project.image}" alt="${project.name}">
      <p>${project.description}</>`
  }