//student list
const studentList = JSON.parse(localStorage.getItem("Students")) || [];
generate();

function addStudent() {
    // getting user inputs
    const nameElement = document.querySelector(".name");
    const moneyElement = document.querySelector(".money");
    const membersElement = document.querySelector(".members");
    const name = nameElement.value;
    const money = moneyElement.value;
    const members = membersElement.value;

    // adding students to the studentList
    studentList.push({
      name: name,
      money: money,
      mem: members,
    });
    localStorage.setItem("Students", JSON.stringify(studentList));
    nameElement.value = "";
    moneyElement.value = "";
    membersElement.value = "";

    generate();
}
function generate() {
    let students = "";

    // generating html with javaScript
    studentList.forEach((object, index) => {
      students += `
            <div>${object.name}</div>
            <div>Ksh: ${object.money}</div>
            <div>${object.mem}</div>
            <button onclick="
            deleteStudent(${index})
              
              
              
            ">Delete</button>
            
            
          `;
    });
    /*
    let people = JSON.parse(localStorage.getItem("Students"))
     people.splice(${index}, 1);
              
              localStorage.setItem('Student', JSON.stringify(people))
              
              generate(); my code was like this*/ 

    //getting the place for putting the user-results
    document.querySelector(".user-results").innerHTML = students;
    }
function deleteStudent(index){
  studentList.splice(index, 1)
  saveToStorage()
  generate()
}
function saveToStorage(){
  localStorage.setItem('Students', JSON.stringify(studentList))
}

/* help code with google i didn't know how to remove something from localstorage */
/* function deleteStudent(index) {
  studentList.splice(index, 1);
  saveToStorage();
  generate();
}

// Helper function to update localStorage
function saveToStorage() {
  localStorage.setItem("Students", JSON.stringify(studentList));
} */
generate()
    // i want to save to local storage
    // 1. save the students  done
    // 2. retrieve students  done
    // 3. if delete remove student

function totalEarning() {
    let students = 0;
    let payment = 0;
    
    studentList.forEach((obj) => {
      students += Number(obj.mem);
      payment += Number(obj.money);
      
    });
    
    

    const numStudents = document.querySelector('.badge')
    const paymentMoney = document.querySelector('.paid')
    const popUp = document.querySelector('.js-pop-up')
    const bodyEl = document.querySelector('body')
    numStudents.innerHTML = students
    paymentMoney.innerHTML= `Ksh ${payment}`
    console.log(paymentMoney)
    /* checkVisibility() (Modern Browsers)
A newer, more direct method is checkVisibility(), which returns false if the element has display: none or is otherwise not rendered.
    if (!popUp.checkVisibility()){
      popUp.style.display= 'block'
      document.querySelector(".js-overlay").style.display = 'block'
      
    } else{
      popUp.style.display= 'none'
    
      document.querySelector(".js-overlay").style.display = 'none'
      
    }
      */
    popUp.style.display= 'block'
    document.querySelector(".js-overlay").style.display = 'block'
    
}
function closed(){
  document.querySelector('.js-pop-up').style.display= 'none'
  document.querySelector(".js-overlay").style.display = 'none'
  

}
function viewMobile () {
  // only activate if the media is 580 px otherwise don't activate
 // const viewButton = document.querySelector('.js-view')
 // const check = viewButton.style.display = 'block'
    document.querySelector('.user-input').style.display = 'none';
    document.querySelector('.js-x-btn').style.display = 'block';
    document.querySelector('.user-results').style.display = 'grid';
 
  
  

}
function backHome(){
  document.querySelector('.user-input').style.display = 'grid';
  document.querySelector('.js-x-btn').style.display = 'none';
  document.querySelector('.user-results').style.display = 'none';
}
