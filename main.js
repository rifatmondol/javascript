const slidePage = document.querySelector(".slidepage");
const firstItemBtn = document.querySelector(".firstitembtn");
const secondItemBtn = document.querySelector(".seconditembtn");

const firstNextBtn = document.querySelector(".frstnextbtn");
const secondNextBtn = document.querySelector(".secondnextbtn");
const thirdNextBtn = document.querySelector(".thirdnextbtn");
const fourthNextBtn = document.querySelector(".fourthnextbtn");
const fifthNextBtn = document.querySelector(".fifthnextbtn");
const sixNextBtn = document.querySelector(".sixnextbtn");
const submitBtn = document.querySelector(".sub-btn");


firstItemBtn.addEventListener("click", function(){
	slidePage.style.marginLeft = "-11.1%";
});
secondItemBtn.addEventListener("click", function(){
	slidePage.style.marginLeft = "-22.7%";
});
firstNextBtn.addEventListener("click", function(){
	slidePage.style.marginLeft = "-33.3%";
});
secondNextBtn.addEventListener("click", function(){
	slidePage.style.marginLeft = "-44.4%";
});
thirdNextBtn.addEventListener("click", function(){
	slidePage.style.marginLeft = "-55.5%";
});
fourthNextBtn.addEventListener("click", function(){
	slidePage.style.marginLeft = "-66.6%";
});
fifthNextBtn.addEventListener("click", function(){
	slidePage.style.marginLeft = "-77.7%";
});
sixNextBtn.addEventListener("click", function(){
	slidePage.style.marginLeft = "-88.8%";
});
submitBtn.addEventListener("click", function(){
	slidePage.style.marginLeft = "-99.9%";
});
