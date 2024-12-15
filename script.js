const jsonData = {
  data: {
    class11: {
      Maths: {
        chapters: [
          { name: "Trigonometry", pdf: "pdfs/Trigonometry - Copy.pdf" },
          { name: "Binomial theorem", pdf: "pdfs/binomial theorem.pdf" },
          { name: "Limits and derivatives", pdf: "pdfs/linits and derivatives.pdf" }
        ],
        papers: [
          { year: "2020", pdf: "pdfs/2020.pdf" },
          { year: "2021", pdf: "pdfs/2021.pdf" },
          { year: "2022", pdf: "pdfs/2022.pdf" },
          { year: "2023", pdf: "pdfs/2023.pdf" }
          
        ]
      
      },
      Physics: {
        chapters: [
          { name: "Thermodynamics", pdf: "pdfs/thermodynamics.pdf" },
          { name: "Laws of Motion", pdf: "pdfs/laws of motion.pdf" },
          { name: "Gravitation", pdf: "pdfs/gravitation.pdf" }
        ],
        papers: [
          { year: "2020", pdf: "pdfs/2020.pdf" },
          { year: "2021", pdf: "pdfs/2021.pdf" },
          { year: "2022", pdf: "pdfs/2022.pdf" },
          { year: "2023", pdf: "pdfs/2023.pdf" }
          
        ]
      },
      Chemistry: {
        chapters: [
          { name: "Organic Chemistry", pdf: "pdfs/organic chemistry.pdf" },
          { name: "Chemical bonding", pdf: "pdfs/chemical bonding.pdf" },
          { name: "Stucture of an atom", pdf: "pdfs/structure of an atom.pdf" }
        ],
        papers: [
          { year: "2020", pdf: "pdfs/2020.pdf" },
          { year: "2021", pdf: "pdfs/2021.pdf" },
          { year: "2022", pdf: "pdfs/2022.pdf" },
          { year: "2023", pdf: "pdfs/2023.pdf" }
          
        ]
      },
      Biology: {
        chapters: [
          { name: "Respiration in plants", pdf: "pdfs/respiration in plants.pdf" },
          { name: "Body fluids and circulation", pdf: "pdfs/body fluids and circulation.pdf" },
          { name: "Biomolecules", pdf: "pdfs/biomolecules.pdf" }
        ],
        papers: [
          { year: "2020", pdf: "pdfs/2020.pdf" },
          { year: "2021", pdf: "pdfs/2021.pdf" },
          { year: "2022", pdf: "pdfs/2022.pdf" },
          { year: "2023", pdf: "pdfs/2023.pdf" }
          
        ]
      },
    },
    class12: {
      Maths: {
        chapters: [
          { name: "Matrices", pdf: "pdfs/Matrices.pdf" },
          { name: "Integrals", pdf: "pdfs/Integrals.pdf" },
          { name: "Differential Equations", pdf: "pdfs/Differential equations.pdf" }
        ],
        papers: [
          { year: "2020", pdf: "pdfs/2020.pdf" },
          { year: "2021", pdf: "pdfs/2021.pdf" },
          { year: "2022", pdf: "pdfs/2022.pdf" },
          { year: "2023", pdf: "pdfs/2023.pdf" }
          
        ]
      },
      Physics: {
        chapters: [
          { name: "Electromagnetism", pdf: "pdfs/Electromagnetism.pdf" },
          { name: "Optics", pdf: "pdfs/Optics.pdf" },
          { name: "Current electricity", pdf: "" }
        ],
        papers: [
          { year: "2020", pdf: "pdfs/2020.pdf" },
          { year: "2021", pdf: "pdfs/2021.pdf" },
          { year: "2022", pdf: "pdfs/2022.pdf" },
          { year: "2023", pdf: "pdfs/2023.pdf" }
          
        ]
      },
      Chemistry: {
        chapters: [
          { name: "Chemical Kinetics", pdf: "pdfs/Chemical kinetics.pdf" },
          { name: "Alcohols,phenols and ethers", pdf: "pdfs/alcohols.pdf" },
          { name: "Coordination Compounds", pdf: "pdfs/coordination compounds.pdf" }
        ],
        papers: [
          { year: "2020", pdf: "pdfs/2020.pdf" },
          { year: "2021", pdf: "pdfs/2021.pdf" },
          { year: "2022", pdf: "pdfs/2022.pdf" },
          { year: "2023", pdf: "pdfs/2023.pdf" }
          
        ]
      },
      Biology: {
        chapters: [
          { name: "Ecosystem", pdf: "pdfs/ecosystem.pdf" },
          { name: "Evolution", pdf: "pdfs/evolution.pdf" },
          { name: "Reproductive Biology", pdf: "pdfs/reproductive.pdf" }
        ],
        papers: [
          { year: "2020", pdf: "pdfs/2020.pdf" },
          { year: "2021", pdf: "pdfs/2021.pdf" },
          { year: "2022", pdf: "pdfs/2022.pdf" },
          { year: "2023", pdf: "pdfs/2023.pdf" }
          
        ]
      },
    },
  },
};

// Function to Load Subjects Based on Class
function loadSubjects() {
  const selectedClass = document.getElementById("classes").value;
  const subjectsDropdown = document.getElementById("subjects");
  

  

  // Clear existing subjects and chapters
  subjectsDropdown.innerHTML = '<option value="">--Select Subject--</option>';
  document.getElementById("chapters").innerHTML = '<option value="">--Select Chapter--</option>';
  document.getElementById("papers").innerHTML = '<option value="">--Select Paper--</option>';

  if (selectedClass && jsonData.data[selectedClass]) {
    const subjects = Object.keys(jsonData.data[selectedClass]);
    subjects.forEach((subject) => {
      const option = document.createElement("option");
      option.value = subject;
      option.textContent = subject;
      subjectsDropdown.appendChild(option);
    });
  }
}

// Function to Load Chapters Based on Subject
function loadChapters() {
  const selectedClass = document.getElementById("classes").value;
  const selectedSubject = document.getElementById("subjects").value;
  const chaptersDropdown = document.getElementById("chapters");
  const papersDropdown = document.getElementById("papers");

  // Clear existing chapters
  chaptersDropdown.innerHTML = '<option value="">--Select Chapter--</option>';
  papersDropdown.innerHTML = '<option value="">--Select Paper--</option>';

  if (selectedClass && selectedSubject && jsonData.data[selectedClass][selectedSubject]) {
    const chapters = jsonData.data[selectedClass][selectedSubject].chapters;
    const papers = jsonData.data[selectedClass][selectedSubject].papers;

    chapters.forEach((chapter) => {
      const option = document.createElement("option");
      option.value = chapter.name;
      option.textContent = chapter.name;
      chaptersDropdown.appendChild(option);
    });
    // Load past year papers into the papers dropdown
    papers.forEach((paper) => {
      const option = document.createElement("option");
      option.value = paper.year;
      option.textContent = `Past Year Paper ${paper.year}`;
      papersDropdown.appendChild(option);
    });
  }
}
  


// Function to Display Chapter and Paper Content (Load PDF)
function displayChapterContent() {
  const selectedClass = document.getElementById("classes").value;
  const selectedSubject = document.getElementById("subjects").value;
  const selectedChapter = document.getElementById("chapters").value;
  const selectedPaper = document.getElementById("papers").value;

  const contentContainer = document.getElementById("content");

  // Clear previous content
  contentContainer.innerHTML = '';

  if (!selectedChapter && !selectedPaper) {
    contentContainer.innerHTML = '<p>Select a chapter or past year paper to view its content.</p>';
    return;
  }

  if (selectedChapter) {
    const chapter = jsonData.data[selectedClass][selectedSubject].chapters.find(
      (ch) => ch.name === selectedChapter
    );
    if (chapter && chapter.pdf) {
      contentContainer.innerHTML += `
        <h2>${selectedChapter}</h2>
        <embed src="${chapter.pdf}" width="100%" height="600px" type="application/pdf">
      `;
    } else {
      contentContainer.innerHTML += '<p>PDF not available for this chapter.</p>';
    }
  }

  if (selectedPaper) {
    const paper = jsonData.data[selectedClass][selectedSubject].papers.find(
      (p) => p.year === selectedPaper
    );
    if (paper && paper.pdf) {
      contentContainer.innerHTML += `
        <h2>Past Year Paper - ${selectedPaper}</h2>
        <embed src="${paper.pdf}" width="100%" height="600px" type="application/pdf">
      `;
    } else {
      contentContainer.innerHTML += '<p>PDF not available for this paper.</p>';
    }
  }
}



// Function to Clear Selections
function clearSelections() {
  document.getElementById("classes").selectedIndex = 0;
  document.getElementById("subjects").selectedIndex = 0;
  document.getElementById("chapters").selectedIndex = 0;
  document.getElementById("papers").selectedIndex = 0;
  document.getElementById("content").innerHTML = '<p>Select a chapter or past year paper to view its content.</p>';
}