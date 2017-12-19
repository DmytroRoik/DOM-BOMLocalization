var currentLang;
document.body.onload=function(){
	var radios = document.querySelectorAll('input[type=radio]');
	currentLang=localStorage.getItem('language')||"ua";

	for(var el of radios){
		if(currentLang==el.value){
			applyLanguage(el.value)
			el.checked=true;}
		el.onchange=function (el) {
			applyLanguage(this.value);
		}
	}
}

var applyLanguage = function (lang) {
	currentLang=lang;

	var allLangEls=document.getElementsByClassName('lang');
	for(var el of allLangEls){
		el.classList.contains('visible')?el.classList.remove('visible') : "";
	}
	var langEls = document.getElementsByClassName('lang-' + currentLang);

	for (var i=0; i<langEls.length; i++) {
		var langEl = langEls[i];
		langEl.classList.add('visible');
	}
}
var getCurrentLanguage = function () {
	return currentLang||"ua";
}

var $save = document.querySelector('html body button#save')

$save.addEventListener('click', function(){
	localStorage.setItem('language', getCurrentLanguage());
});