// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('nav_links')[0]

// toggleButton.addEventListener('click', ()=>{
//     navbarLinks.classList.toggle('active')
// })

var categContainer = document.getElementById("categ-container");
var categs = categContainer.getElementsByClassName("categ-item");

for (var i = 0; i < categs.length; i++) {
    categs[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }


  function validateMinMax() {
    const minPrice = document.getElementById("min").value;
    const  maxPrice = document.getElementById("max").value;
    if(minPrice>=maxPrice)
    {
      alert("Min price should be less than max price")
      document.getElementById('min').value = '';
    document.getElementById('max').value = '';
    }
  }


  var categContainer1 = document.getElementById("xyz");
var categs1 = categContainer1.getElementsByClassName("rounded-img");

for (var i = 0; i < categs1.length; i++) {
    categs1[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("img-active-1");
      current[0].className = current[0].className.replace(" img-active-1", "");
      this.className += " img-active-1";
    });
  }

  var brandContainer = document.getElementById("brand-container");
var brands = brandContainer.getElementsByClassName("brand-item");

for (var i = 0; i < brands.length; i++) {
    brands[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active-1");
      current[0].className = current[0].className.replace(" active-1", "");
      this.className += " active-1";
    });
  }

  function changeLatestPage(id){
    if(id==1){
      document.getElementById("changesLatest").innerHTML="Accesories";
    }
    if(id==2){
      document.getElementById("changesLatest").innerHTML="Cables & Docks";
    }
    if(id==3){
      document.getElementById("changesLatest").innerHTML="Cases & Films";
    }
    if(id==4){
      document.getElementById("changesLatest").innerHTML="Charging Devices";
    }
    if(id==5){
      document.getElementById("changesLatest").innerHTML="Connected Homes";
    }
    if(id==6){
      document.getElementById("changesLatest").innerHTML="Headphones";
    }
  }

  // Add Animation 
  $(document).ready(function(){
    'use strict';
    new  WOW().init();
  })