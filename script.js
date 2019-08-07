let fredrik = {
  name: 'Fredrik',
  lastName: 'Trusohamn',
  email: 'fredrik.trusohamn@gmail.com',
  phone: '+46 76 001 96 30'
};

function logUserInfo(user) {
  console.log(user.name + ':' + user.lastName + ':' + user.email + ':' + user.phone)
};

logUserInfo(fredrik)

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

function dropDownF() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  };
  if (!event.target.matches('.dropBttn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let modal = document.getElementById("About_Modal");

let btn = document.getElementById("about");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let descript = {
  textInDiv: {
    par1: 'Do you need an employee/co-worker that is reliable, quick learner and quite easy to work with? Well, good news everybody! My name is Fredrik and is probably the one you’re looking for.',
    par2: 'I’ve been working with a bit of this and that thru the years, so we can focus a bit on the highlight. I was working for about two years at Teleperformance, one of the world’s largest outsourced call-centres. There I worked among other things as a trainer for the new hires. So, I’m used to talking in front of people and get the information I need to present across. This role also includes a bit of personnel response, you have to evaluate if the new hires will be able to work in your project. It means that you might have to let people go or relocate them to a different project. Also keep track of productivity and other lighter personnel related issues.',
    par3: 'At Teleperformance I’ve also worked as a Quality Assurance Analyst. A more data driven position to make sure we’re up to the KPI’s and can give a good level of support. So was mostly working in excel with VBA/macros to find the reasons to why we preformed good or bad based on the data collected from emails or calls from agents. In this type of work, you also need to be able to figure out what the supervisors or client would be more interested in. Is it long term improvement or a quicker improvement? You also provide the trainer and supervisors with what the need to coach the agents on and general feedback on the team’s performance.',
    par4: 'Lately I’ve been working at iZettle HQ in Stockholm with their costumer success team. Here I’m working with costumer and closely with the different departments within iZettle to solve different problems. I’ve also became a bit of the go to guy for different types of questions even from the escalations team.',
    par5: 'Also, I’m learning web development thru Odin’s online course. This website is an example of my knowledge and if you like D&D you can checkout my character builder (please note that it’s under construction).'
  } 
}

let modalContent = document.getElementsByClassName('modal-content');

document.getElementById('About_Modal').onload = headerModal(), aboutText();

function headerModal() {
  let header1 = document.createElement('H1');
  let t = document.createTextNode('Fredrik Trusohamn');
  header1.appendChild(t);
  document.getElementById('content_modal').appendChild(header1);
};
function aboutText() {
  for (i = 0; i < 5; i++){
    let para = document.createElement('p');
    para.id = i;
    document.getElementById('content_modal').appendChild(para);
  }
}

//Maybe make this section abit prettier?
document.getElementById('0').innerHTML = descript.textInDiv.par1
document.getElementById('1').innerHTML = descript.textInDiv.par2
document.getElementById('2').innerHTML = descript.textInDiv.par3
document.getElementById('3').innerHTML = descript.textInDiv.par4
document.getElementById('4').innerHTML = descript.textInDiv.par5