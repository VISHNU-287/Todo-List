// code to create array and Retrive it on the local storage
let myarray = JSON.parse(localStorage.getItem('storage')) || [];

function createArray(){
    const variable1 = document.getElementById('id-01').value;
    const variable2 = document.getElementById('id-02').value;

    myarray.push({name:variable1,date:variable2});
  // after updation in the array store it on the Local Storage
    localStorage.setItem('storage',JSON.stringify(myarray));

    document.getElementById('id-01').value = '';
    document.getElementById('id-02').value = '';
    generate();
}
//code to access the array and inorder to Generate the html codes

   let perhtmlcode ='';
   function generate(){
    perhtmlcode='';
// accessing the value by using the for loop
for(let i=0;i<myarray.length;i++){
    const name = myarray[i].name;
    const date = myarray[i].date;

// Generating the html code
  let temhtmlcode = ` <div>  ${name}</div>
     <div>  ${date}</div>
      <div><button class="js-button" onclick="deleted(${i})">Delete</button></div>`;
  
  perhtmlcode += temhtmlcode;
  }
displays();
}
function displays(){
   document.getElementById('id-04').innerHTML = perhtmlcode;
}
function deleted(x){
   myarray.splice(x,1);

// after 
  localStorage.setItem('storage',JSON.stringify(myarray));
  generate();
}
// By function calling the score card finally it make the score card live and stable in the web page
  generate();


function Darkmode(){
  document.body.style.backgroundColor = 'black';
  document.getElementById("co-1").style.color = 'white';
  document.getElementById("id-01").style.borderColor = 'white';
  document.getElementById("id-02").style.borderColor = 'white';
  document.getElementById("d-1").style.color = 'black';
  document.getElementById("d-1").style.backgroundColor = 'white';
  document.getElementById("id-04").style.color = 'white';
  document.getElementById("h-b").style.backgroundColor = 'yellow';
  document.getElementById("h-b").style.color = 'darkblue';
}
function Lightmode() {
  document.body.style.backgroundColor = 'white';
  document.getElementById("co-1").style.color = 'black';
  document.getElementById("id-01").style.borderColor = 'black';
  document.getElementById("id-02").style.borderColor = 'black';
  document.getElementById("d-1").style.color = 'white';
  document.getElementById("d-1").style.backgroundColor = 'black';
  document.getElementById("id-04").style.color = 'black';
  document.getElementById("h-b").style.backgroundColor = 'blue';
  document.getElementById("h-b").style.color = 'white';
    }

