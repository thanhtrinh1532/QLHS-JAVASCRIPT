let students = [];

function calculateAverageScore(mathScore, literatureScore) {
  return (mathScore + literatureScore) / 2;
}

function getGrade(averageScore) {
  if (averageScore >= 9) {
    return "Giỏi";
  	} else if (averageScore >= 8) {
	    return "Khá";
	  } else if (averageScore >= 7) {
		    return "Trung bình";
		  } else if (averageScore < 7){
		    return "Yếu";
			  }
}	

function addStudent() {
  const fullName = document.getElementById("fullName").value;
  const mathScore = parseFloat(document.getElementById("mathScore").value);
  const literatureScore = parseFloat(document.getElementById("literatureScore").value);
  const averageScore = calculateAverageScore(mathScore, literatureScore);
  const grade = getGrade(averageScore);

  students.push({
    fullName: fullName,
    mathScore: mathScore,
    literatureScore: literatureScore,
    averageScore: averageScore,
    grade: grade
  });
  
  updateStudentTable();
  resetForm();
  
}

function updateStudent() {
	
  const index = prompt("Nhập số thứ tự học sinh cần sửa:")-1;
  if (index !== null && index !== "" && !isNaN(index)) {
    const fullName = document.getElementById("fullName").value;
    const mathScore = parseFloat(document.getElementById("mathScore").value);
    const literatureScore = parseFloat(document.getElementById("literatureScore").value);
    const averageScore = calculateAverageScore(mathScore, literatureScore);
    const grade = getGrade(averageScore);
    
   
    students[index] = {
    	
      fullName: fullName,
      mathScore: mathScore,
      literatureScore: literatureScore,
      averageScore: averageScore,
      grade: grade
    };

    updateStudentTable();
    resetForm();
  }
}

function deleteStudent() {
  const index = prompt("Nhập số thứ tự học sinh cần xóa:");

 
  if (index !== null && index !== "" && !isNaN(index)) {
    students.splice(index-1, 1);
    updateStudentTable();
    resetForm();
  }
}

function updateStudentTable() {
  const studentTableBody = document.getElementById("studentTableBody");
  studentTableBody.innerHTML = "";

  
  students.forEach((student, index) => {
    const newRow = studentTableBody.insertRow();
    newRow.innerHTML = `
      <td>${index+1}</td>
      <td>${student.fullName}</td>
      <td>${student.mathScore}</td>
      <td>${student.literatureScore}</td>
      <td>${student.averageScore}</td>
      <td>${student.grade}</td>
    `;
    console.log(index);
    newRow.addEventListener("click", () => {
      document.getElementById("fullName").value = student.fullName;
      document.getElementById("mathScore").value = student.mathScore;
      document.getElementById("literatureScore").value = student.literatureScore;
      document.getElementById("averageScore").value = student.averageScore;
      document.getElementById("grade").value = student.grade;
      document.getElementById("name").value = student.fullName;
      document.getElementById("math").value = student.mathScore;
      document.getElementById("literature").value = student.literatureScore;
    });
  });
}

function resetForm() {
	
  document.getElementById("fullName").value = "";
  document.getElementById("mathScore").value = "";
  document.getElementById("literatureScore").value = "";
  document.getElementById("averageScore").value = "";
  document.getElementById("grade").value = "";
  
}

// Update the table when the page loads
updateStudentTable();
