const subjects = document.getElementById('subjects');
const results = document.getElementById('results');
const gradesArray = [];

const subjectsFunction = () => {
  let subjectsTaken = prompt('How many subjects did you take?');

  subjects.innerHTML = `You have taken 
    ${subjectsTaken} subjects`;

  for (let i = 0; i < subjectsTaken; i++) {
    gradesArray[i] = prompt(`What was your grade for subject number ${i + 1}?`);
  }

  for (let i = 0; i < gradesArray.length; i++) {
    results.innerHTML += `<br/> <p>Your score on Subject number ${i + 1} is ${
      gradesArray[i]
    }`;
  }
};
