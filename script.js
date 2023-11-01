let catalogBtn = document.querySelector('.catalog-btn')
let catalogList = document.querySelector('.catalog-list')
let burgerBtn = document.querySelector('.burger')



catalogBtn.onclick = function(e) {
	catalogList = document.querySelector('.catalog-list');
	catalogList.classList.toggle("hide");
}


burgerBtn.addEventListener('click',function () {
	document.querySelector('.burger span').classList.toggle('active')
	document.querySelector('.menu').classList.toggle('active')
})
