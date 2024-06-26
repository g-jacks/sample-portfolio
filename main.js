//menubar functions for responsive
menubtn=document.getElementById('menubtn');
menubtn.addEventListener('touchstart', menubar_touch);
function menubar_touch(){
  menubtn.style.display='none';
  menuItems=document.querySelector('.menu_items');
  menuItems.style.display='block';
  menuItems.style.marginRight='15px'; 
  
}
//closebtn
closeMenu=document.querySelector('#clmenu');
closeMenu.addEventListener('touchstart',cloMenuBar);
closeMenu.addEventListener('onclick',cloMenuBar);
function cloMenuBar(){
  menuItems.style.display='none';
  menubtn.style.display='block';
}
//form submit functions 
var btn = document.getElementById("form")
btn.addEventListener("submit", (e) => {
  e.preventDefault();
  var form = document.getElementById("form");
  form.style.display = "none";
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var reply = document.getElementById("replymsg");
  reply.style.display = "block";
  reply.innerText = "hello " + name + " we have recived your mail.We mail the answer to " + email;
})
var modal = document.getElementById("modal");
var openmodal = document.getElementById("openmodal");
var close = document.getElementById("closemodal");

openmodal.addEventListener("click", () => { modal.showModal(); })
close.addEventListener("click", () => { modal.style.positon = "relative"; modal.close(); })



//var skill=document.getElementById("skills");
//skill.addEventListener("mouseenter",school);
function school() {
  var par = document.createElement("p");
  var nod = document.createTextNode(document.URL);
  par.appendChild(nod);
  var bod = document.getElementById("skills-cont");
  var po = document.getElementById("html");
  bod.replaceChild(par, po);
}

//fade animations start here
var aboutHeader=document.querySelector(".about-header");
var fadeAnim=document.querySelector("about")
const fadeAnimOptions = { threshold: "0.5" };

const fadeAnimObserver = new IntersectionObserver(function (entries, fadeAnimObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log("about header");
      aboutHeader.classList.add("fade-in");
     // menubtn.style.display='block';
      fadeAnimObserver.unobserve(fadeAnim);
    }
  });
}, fadeAnimOptions);

fadeAnimObserver.observe(fadeAnim);


//Graph animations starts here 

var html= document.getElementById("html-graph");
var css= document.getElementById("css-graph");
var javaScript= document.getElementById("js-graph");

var graphAnim=document.querySelector(".skills-item");

function move(elem) {
  
  var width = 0;
  var id = setInterval(frame,20);
  function frame() {
    if(elem==html){
      if (width >= 90) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        document.getElementById("html-cent").innerHTML = width * 1 + '%';}//html block over
    }else if(elem==css){
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        document.getElementById("css-cent").innerHTML = width * 1 + '%';}//css block over
    } else if (elem == javaScript) {
      if (width >= 50) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        document.getElementById("js-cent").innerHTML = width * 1 + '%';}
    } else { return; }
      }};


const graphAnimOptions={threshold: "1"};

const graphAnimObserver=new IntersectionObserver(function(entries,graphAnimObserver){
  entries.forEach(entry=>{
    if(!entry.isIntersecting){
      return;
    } else { console.log("it is coming");
      move(html);
      move(css);
      move(javaScript);
      graphAnimObserver.unobserve(graphAnim);
    }
  });
},graphAnimOptions);

graphAnimObserver.observe(graphAnim);

// carousel functions
/*var sample=0;
var k;
var interval=setInterval(carousel,3000);
function carousel(){
  k=sample++;
  console.log(k);
  if (k == 3) {
    clearInterval(interval);
    console.log("time out");
  }
};
*/
const myElement = document.querySelector('.projects-cont');
for (const child of myElement.children) {
  
  
  

}
var today=new Date();
var t=today.toLocaleString();
console.log(t);
console.log(today);

