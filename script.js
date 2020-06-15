const boldEl = document.getElementById("bold");
const italicEl = document.getElementById("italic");
const underlineEl = document.getElementById("underline");
const leftEl = document.getElementById("left-align");
const centerEl = document.getElementById("center-align");
const rightEl = document.getElementById("right-align");

const textInputEl = document.getElementById("text-input");
const textOutputEl = document.getElementById("text-output");


function updateText(){
  // CODE GOES HERE
  
  textOutputEl.innerText = textInputEl.value;
 
};


function makeBold(){
  //CODE GOES HERE
  textOutputEl.classList.toggle("bold");
}


function makeItalic(){
  textOutputEl.classList.toggle("italic");
}


function makeUnderline(elem){
    //CODE GOES HERE
    console.log(elem);
    textOutputEl.classList.toggle("underline");
}

function alignText(alignType){
  // CODE GOES HERE
  textOutputEl.style.textAlign= alignType;
  
}

function fontSizeSelect(){
  var selectEl = document.getElementById("font-size");

  selectEl.addEventListener("click", function(event){
    event.preventDefault();
   var user_selected = selectEl.options[selectEl.selectedIndex].value;
  console.log(user_selected);
  textOutputEl.style.fontSize = `${user_selected}px`;
});
}


function fontColorSelect(){
  var colorEl = document.getElementById("font-color");
  // colorEl.addEventListener("click", function(event){
    // event.preventDefault();
    var favColor = colorEl.value;
    console.log(favColor);
  textOutputEl.style.color = favColor;
  // });
}


function fontFamilySelect(){
  var familyEl = document.getElementById("font-family");

  familyEl.addEventListener("click", function(event){
    event.preventDefault();
   var user_selected = familyEl.options[familyEl.selectedIndex].value;
  console.log(user_selected);
  textOutputEl.style.fontFamily = `${user_selected}`;
});


}