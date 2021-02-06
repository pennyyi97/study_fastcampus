function getGrade(score) {
  if (score === 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else if (score >= 85) {
    return 'B+';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 75) {
    return 'C+';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 65) {
    return 'D';
  } else {
    return 'F';
  }
}

const grade = getGrade(50);
console.log(grade);
