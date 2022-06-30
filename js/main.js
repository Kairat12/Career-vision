
$(document).ready(function () {
    $(".popup form").validate({
        rules: {
            "name": {
                required: true,
                minlength: 5
            },
            "email": {
                required: false,
                email: true
            }
        },
        messages: {
            "name": {
                required: "Please, enter a name"
            },
            "email": {
                required: "Please, enter an email",
                email: "Email is invalid"
            }
        },
        submitHandler: function (form) { // for demo
            alert('valid form submitted'); // for demo
            return false; // for demo
        }
    });

});
let tel = document.querySelectorAll(".tel");

$(document).ready(function () {
$(".tel").each(function() {$(this).inputmask("+7(999)-999-9999",{ "clearIncomplete": true })});
$('.email').inputmask({
	mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
	greedy: false,
	onBeforePaste: function (pastedValue, opts) {
	pastedValue = pastedValue.toLowerCase();
	return pastedValue.replace("mailto:", "");
	},
	definitions: {
	'*': {
		validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
		cardinality: 1,
		casing: "lower"
	}
	}
});
  });

$(document).ready(function() {

$('input[type="file"]').each(function(){
	$(this).change(function(e){
		let target = e.target;
		console.log(target)
		var value = $(target).val().replace(/.*(\/|\\)/, '');
		$(target.previousElementSibling).text(value);
	});
})

});

let alertt = document.querySelector(".alert--fixed");
let alertClose = document.querySelectorAll(".alert--close")
for (let item of alertClose) {
  item.addEventListener('click', function (event) {
    alertt.classList.remove("alert--active")
    alertt.classList.remove("alert--warning")
    alertt.classList.remove("alert--error")
  })
}
const header = document.querySelector(".header");

window.addEventListener("scroll", function(e) {
   let scrollPos = window.scrollY;
   if(header){
			if(scrollPos > 0) {
            header.classList.add("active");
			} else {
            header.classList.remove("active")
			}
   }
});

const menuBurger = document.querySelector('.menu__burger');
if (menuBurger) {
   const headerMenu = document.querySelector('.header-block__fixed');
	const headerMenuClose = document.querySelector('.header-block__close');
	headerMenuClose.addEventListener('click', function () {
		menuBurger.classList.remove('_active');
      headerMenu.classList.remove('_active');
		document.body.classList.remove('_actived')
	});
   menuBurger.addEventListener("click", function (e) {
			menuBurger.classList.toggle('_active');
			headerMenu.classList.toggle('_active');
			document.body.classList.toggle('_actived')
   });
	document.addEventListener('click', function (event) {
		if (event.target.classList.contains('header-block__fixed')) {
			menuBurger.classList.remove('_active');
			headerMenu.classList.remove('_active');
			document.body.classList.remove('_actived')
		}
	})
}

$(document).on("click", function(event){
   var target = event.target;
   if( !$(target).hasClass('menu__link') ){
      $('.menu-two').slideUp();
      $('.list-icon').removeClass('active');
   }
});
$('.menu__link').on("click", function(){
   $(this).siblings('.menu-two').slideToggle();
   $(this).parent('.list-icon').toggleClass('active');
});

$(document).on("click", function(event){
   var target = event.target;
   if( !$(target).hasClass('lang_choice') ){
      $('.other_lang').slideUp();
      $('.lang_block').removeClass('active');
   }
});
$('.lang_choice').on("click", function(){
   $(this).siblings('.other_lang').slideToggle();
   $(this).parent('.lang_block').toggleClass('active');
});

// const tabsBtn = document.querySelectorAll('.tabs-btn');
// const tabItems = document.querySelectorAll('.tabs__row');
// tabsBtn.forEach(function (item) {
// 	item.addEventListener('click', function () {
// 		let currentBtn = item;
// 		let tabId = currentBtn.getAttribute('data-tab');
// 		let currentTab = document.querySelector(tabId);

// 		if (!currentBtn.classList.contains('active')) {

// 			tabsBtn.forEach(function (item) {
// 				item.classList.remove('active');
// 			});
// 			tabItems.forEach(function (item) {
// 				item.classList.remove('active');
// 			});
// 			currentBtn.classList.add('active');
// 			currentTab.classList.add('active');
// 		}
// 		// } else {
// 		// 	tabsBtn.forEach(function (item) {
// 		// 		item.classList.remove('active');
// 		// 	});
// 		// 	tabItems.forEach(function (item) {
// 		// 		item.classList.remove('active');
// 		// 	});
// 		// }
// 	});
// });

// $(document).on("click", function(event){
// 	var target = event.target;
// 	if( !$(target).hasClass('courses-bottom__list') ){
// 		$('.courses-list__menu').slideUp();
// 	   $('.dropdown_menu').removeClass('active');
// 	}
// });

$('.courses-bottom__list').on("click", function(e) {
	const target = e.target
	$(target.nextElementSibling).slideToggle();
	target.classList.toggle('active')
	// if (target.classList.contains('active')) {
	// 	$(target.nextElementSibling).slideUp();
	// 	target.classList.remove('active')
	// 		// console.log(target)
	// } else {
		// $('.courses-list__menu').slideUp();
		
		// $('.courses-bottom__link').removeClass('active')

	// }
});

$('.fqa__top__text').on("click", function(e) {
	const target = e.target
	$(target.nextElementSibling).slideToggle();
	target.classList.toggle('active')
})

// const time = 2000;
// const step = 1;
// let blockCounter = document.getElementById('counter')
// let mainBlockCounter = document.querySelectorAll('.main-block__counter');
// mainBlockCounter.forEach((elem) => {
//     let blockCounterData = elem.getAttribute('data-number');
//     function outNum(num, element) {
//         let i = element;
//         n = 0;
//         let t = Math.round(time / (num / step));
//         let interval = setInterval(() => {
//             n = n + step;
//             if (n == num) {
//                 clearInterval(interval);
//             }
//             i.innerHTML = n;
//         }, t);
//     }
//     outNum(blockCounterData, elem)
// });

var time = 1;

$('#counter').each(function() {
    $('.main-block__counter').each(function () {
        let i = 1;
        let num = $(this).data('number');
        let step = Math.round(1000 * (time / num));
        let that = $(this);
        let int = setInterval(function () {
            if(i <= num) {
                that.html(i);
            } else {
                clearInterval(int)
            }
            i = i + 3;
        }, step);
    });
});

$('.header__kebab').on("click", function() {
		$('.settings-and-support-list').slideToggle('medium', function() {
			if ($(this).is(':visible'))
				$(this).css('display','flex');
		});
		$('body').toggleClass('active');
})




// $('.courses-bottom__link').each(function () {
//     $(this).click(() => {
//         if(!$(this).next().hasClass('active')) {
//             $(this).next().addClass('active');
//             $(this).next().slideDown( "ease", function() {
//             });
//         } else {
//             $(this).next().removeClass('active');
//             $(this).next().slideUp( "ease", function() {
//             });
// 		}
// 	});
// });

const tabsTwoBtn = document.querySelectorAll('.courses-list__menu li');
const tabTwoItems = document.querySelectorAll('.courses-bottom__row');
tabsTwoBtn.forEach(function (item) {
	item.addEventListener('click', function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-courses');
		let currentTab = document.querySelector(tabId);
		if (!currentBtn.classList.contains('active')) {
			tabTwoItems.forEach(function (item) {
				item.classList.remove('active');
			});
			tabsTwoBtn.forEach(function (item) {
				item.classList.remove('active');
			});
			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	});
});

let swiperOne = document.querySelector('.review__block');

if (swiperOne) {
	new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 30,
		loop: false,
		freeMode: true,
		scrollbar: {
		el: '.swiper-scrollbar',
			draggable: true,
		},
		breakpoints: {
			992: {
				spaceBetween: 20,
			},
			// 500: {
			// 	slidesPerView: 1,
			// 	loop: false,
			// 	// loopedSlides: 0,
			// 	freeMode: true,
			// },
		},
		// touchratio: 1,
	});	
}

let swiperTwo = document.querySelector('.swiper-two-container');

if (swiperTwo) {
	new Swiper('.swiper-two-container', {
		// slidesPerView: 1,
		slidesPerView: 4,
		// slidesPerView: 3,
		// slidesPerGroup: 5,
		loop: false,
		// loopedSlides: 0,
		freeMode: true,
		// longSwipes: false,
		// loopedSlides: 3,
		// longSwipesMs: 300,
		scrollbar: {
		el: '.swiper-scrollbar',
			draggable: true,
		// dragSize: 100,
	// 		spaceBetween: 10,
	//   centeredSlides: true,
	//   slidesPerView: "auto",
	//   touchRatio: 0.2,
	//   slideToClickedSlide: true
	// 	//   snapOnRelease: true,
		//   dragSize: 4,
		//   hide: false,
		},
		breakpoints: {
			992: {
				slidesPerView: 4,
				freeMode: true,
			},
			500: {
				slidesPerView: 3,
				freeMode: true,
			},
			500: {
				slidesPerView: 3,
				freeMode: true,
			},
		},
	// touchratio: 1,
});	

}
// const time = 1000;
// const step = 1;
// let blockCounter = document.getElementById('counter')



// const rangeSliderTwo = document.getElementById('range-slider_two');
// const leftButtonSlider = document.querySelector('.noUi-handle-lower');
// const rightButtonSlider = document.querySelector('.noUi-handle-upper');
// const dataMinValue = document.getElementById('catalog-input');
// const dataMaxValue = document.getElementById('catalog-input');
// // const rangeSliderButton = document.querySelectorAll('.noUi-handle');

// const input0 = document.getElementById('rangetwo_1');
// const input1 = document.getElementById('rangetwo_2');
// const inputs = [input0, input1];
// var input0Value;
// var input1Value;
// if(rangeSliderTwo) {
// 	if (!input0.value == '') {
// 		input0Value = input0.value;
// 	} else {
// 		input0Value = 0;
// 	}
// 	if (!input1.value == '') {
// 		input1Value = input1.value;
// 	} else {
// 		input1Value = dataMaxValue.dataset.max;
// 	}
// }
// if (rangeSliderTwo) {
// 	noUiSlider.create(rangeSliderTwo, {
// 		// start: [0, Number(dataMaxValue.dataset.max)],
// 		start: [Number(input0Value), Number(input1Value)],
// 		connect: true,
// 		step: 1,
// 		limit: Number(dataMaxValue.dataset.max),
// 		pips: {
// 			mode: 'values',
// 			values: [Number(dataMinValue.dataset.min), Number(dataMaxValue.dataset.max)],
// 			density: 0,
// 			stepped: false
// 		},
// 		range: {
// 			'min': Number(dataMinValue.dataset.min),
// 			'max': Number(dataMaxValue.dataset.max)
// 			// 'min': 1200,
// 			// 'max': 1300
// 		},
// 	});

// 	// console.log(leftButtonSlider.getAttribute("aria-valuenow").textContent);

// 	rangeSliderTwo.noUiSlider.on('slide', function (values, handle) {
// 		inputs[handle].value = Math.round(values[handle]);
// 	});

	
	
// 	const setRangeSliderTwo = (i, value) => {
// 		let arr = [null, null];
// 		arr[i] = value;

// 		console.log(arr);

// 		rangeSliderTwo.noUiSlider.set(arr);
// 	};

// 	inputs.forEach((el, index) => {
// 		el.addEventListener('change', (e) => {
// 			console.log(index);
// 			setRangeSliderTwo(index, e.currentTarget.value);
// 		});
// 	});
// };

const imgDiv = document.querySelector('.profile-image');
const img = document.querySelector('.input-img');
const file = document.querySelector('#upload_img');
if (file){
	file.addEventListener('change', function(){
		const choosedFile = this.files[0];
		if (choosedFile) {
			const reader = new FileReader();
		   reader.addEventListener('load', function(){
				  if(!img.classList.contains('active')) {
					  img.classList.add('active');
				  }
			  img.setAttribute('src', reader.result);
		   });
		   reader.readAsDataURL(choosedFile);
		}
	  });
}

const rangeSlider = document.getElementById('range-slider');
if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
		start: [0, 94700],
		connect: true,
		step: 1,
		limit: 94700,
		pips: {
			mode: 'values',
			values: [30000, 95000],
			density: 0,
			stepped: false
		},
		range: {
			'min': 30000,
			'max': 95000
		},
	});
	const input0 = document.getElementById('range_1');
	const input1 = document.getElementById('range_2');
	const inputs = [input0, input1];

	rangeSlider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
		console.log(Math.round(values[handle]));
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
};

let showAll = document.querySelectorAll('.position__block');
showAll.forEach(element =>{
	element.addEventListener("click", (e) => {
		let target = e.target;
		if (target.classList.contains("blue_link")){
			target.classList.add("active")
			// target.nextElementSibling.classList.add("active");
			target.parentElement.classList.add("active")
		}
	})
})
let showAllRadio = document.querySelectorAll('.subject__block');
if (showAllRadio){
	showAllRadio.forEach(elem =>{
		elem.addEventListener("click", (e) => {
				let target = e.target;
				if (target.classList.contains("blue_link")){
					target.classList.add("active")
					target.parentElement.classList.add("active")
				}
			})
		})
	}
let courseTabs = document.querySelector('.courses-bottom__menu');
if (courseTabs){
	courseTabs.addEventListener("click", (e) => {
		let target = e.target;
		if (target.classList.contains("blue_link")){
			target.classList.add("active")
			target.parentElement.classList.add("active")
		}
	})
}
if (showAllRadio){
	showAllRadio.forEach(elem =>{
		elem.addEventListener("click", (e) => {
				let target = e.target;
				if (target.classList.contains("blue_link")){
					target.classList.add("active")
					target.parentElement.classList.add("active")
				}
			})
		})
	}

let vacancyNotice = document.querySelectorAll('.vacancy__notice__block');
if (vacancyNotice){
	vacancyNotice.forEach(elem =>{
		elem.addEventListener("click", function(e){
			let target = e.target;
			if(target.classList.contains('notice__delete')){
				let check = confirm("Вы действительно хотите удалить?");
				if (check){
					target.closest('.vacancy__notice__block').remove();
				}
				
			}
		})

	})
}

const filterVacancyBlock = document.querySelector('.filter__vacancy__block');
if (filterVacancyBlock){
	filterVacancyBlock.addEventListener("click", function(e){
		let target = e.target;
		if (target.classList.contains('show__all')){
			filterVacancyBlock.classList.add('active');
		} else if (target.classList.contains('hide__all')){
			filterVacancyBlock.classList.remove('active');
		}
	})
}



// $( ".checkbox__arrow" ).click(function() {
// 	var self = $(this).parent();
// 	self.toggleClass("active");
// 	$( ".rp__other__checkbox" ).slideToggle( "fast" );
//   });

$('.checkbox__arrow').on("click", function(e) {
	const target = e.target
	  $(target).parent().next().slideToggle("fast");
	  $(target).parent().toggleClass('active')
});

const regionCheckbox = document.querySelectorAll('.rp__checkbox__block .region-popup__checkbox');
const otherCheckbox = document.querySelectorAll('.rp__other__checkbox .region-popup__checkbox');
let chekedCount = 0;
regionCheckbox.forEach((elem) => {
	elem.addEventListener('change', function () {
		let regionCheck = elem.parentElement.nextElementSibling;
		let regionCheckBlock = regionCheck.querySelectorAll('.other__checkbox__block');
		if (elem.checked){
			regionCheckBlock.forEach((e) => {
				let checked = e.querySelector('.region-popup__checkbox');
				checked.checked = true;
				chekedCount++;
				})
		}
		else{
			regionCheckBlock.forEach((e) => {
				let checked = e.querySelector('.region-popup__checkbox');
				checked.checked = false;
				chekedCount--;
				})
		}
	})
})
otherCheckbox.forEach(e =>{
	e.addEventListener("change", function(elem){
		let target = elem.target;
		let chekedParent = e.parentElement.parentElement.previousElementSibling;
		let chekedParentCB = chekedParent.querySelector('.region-popup__checkbox');
		if (target.checked){
			chekedParentCB.checked = true;
			chekedCount++;
		}
		else if(target.checked === false){
			chekedCount--;
		}
		if(chekedCount < 1){
			chekedParentCB.checked = false;
		}
		
	})
})

const regionChoice = document.getElementById('region_choice');
const chekedRegions = document.querySelectorAll('.region-popup__block');
if(regionChoice){
	regionChoice.addEventListener("click", function(){
		chekedRegions.forEach((elem) => {
			let elemInput = elem.querySelector('.region-popup__checkbox');
			let elemInputChecked = elemInput.checked;
			const newSearchRegions = document.querySelectorAll(".search-region");
			const newSearchRegionsInp = document.querySelectorAll(".search-region input");
				if(elemInputChecked){
					newSearchRegions.forEach(el =>{
						el.remove();
					})	
					let regionText = elem.innerText.trim();
					let searchRegions = document.querySelector('.search-regions');
					let newRegion = document.createElement("div");
					let imgRegion = document.createElement("img");
					let newInput = document.createElement("input");
					newInput.style.display = "none";
					newInput.id = elemInput.getAttribute("id")
					newRegion.className = "search-region";
					imgRegion.className = "sr_delet";
					imgRegion.src = "img/trash.png"
					newRegion.textContent = regionText;
					searchRegions.appendChild(newRegion);
					newRegion.appendChild(newInput);
					newRegion.appendChild(imgRegion);
					
				}
		})
		const delRegBtn = document.querySelectorAll('.search-region img'); 			// Remove elements
			delRegBtn.forEach((elem) =>{
				elem.addEventListener("click", function(){
					elem.parentElement.remove();
				})
			})
		// const newSearchRegions = document.querySelectorAll(".search-region");
		
		// newSearchRegionsId.forEach((elem) =>{
		// 	// let elemInput = elem.querySelector('.region-popup__checkbox');
		// })

		// const deleteDup = [...new Set(newSearchRegions)]
		// console.log(deleteDup)
	})
}


let showPassBlock = document.querySelectorAll(".auth__block__input");
if (showPassBlock){
	showPassBlock.forEach((elem) =>{
		elem.addEventListener("click", function(e){
			let target = e.target;
			if (target.classList.contains("password-control") && target.previousElementSibling.getAttribute('type') == 'password'){
				target.classList.add("view");
				target.previousElementSibling.setAttribute('type', 'text');
			} else if(target.classList.contains("password-control") && target.previousElementSibling.getAttribute('type') == 'text'){
				target.classList.remove("view");
				target.previousElementSibling.setAttribute('type', 'password');
			}
		})
	})
}


const countryChoice = document.getElementById('country_choice');

const countryInput = document.querySelector('.country-input');
const cityInput = document.querySelector('.city-input');
const cityContent = document.querySelector(".city-popup__content")
if(countryChoice){
	countryChoice.addEventListener("click", function(){
		chekedRegions.forEach((elem) =>{
			let elemRadio = elem.querySelector(".region-popup__checkbox");
			if (elemRadio.checked){
				countryInput.setAttribute("value", elem.textContent.trim());
				let cityInputs = cityContent.querySelectorAll('.region-popup__checkbox')
				cityInputs.forEach((el) =>{
					if (el.dataset.country == elemRadio.dataset.country ){
						// el.parentElement.parentElement.classList.add("show");
						let parents = el.closest(".region-popup__block");
						parents.classList.add("show");
					}else if(el.dataset.country != elemRadio.dataset.country){
						el.parentElement.parentElement.classList.remove("show");
					}
				})
			}
		})
	})
}




const cityChoice = document.getElementById('city-popup-btn');
if(cityChoice){
	cityChoice.addEventListener("click", function(){
		let cityInputs = cityContent.querySelectorAll('.region-popup__checkbox');
		cityInputs.forEach((el) =>{
			if(el.checked){
				cityInput.setAttribute("value", el.parentElement.textContent.trim());
			}
		})
	})
}

	let resumeBlocks = document.querySelector('.resume__blocks');
	if(resumeBlocks){
		resumeBlocks.addEventListener("click", function(e){
			let target = e.target;
			if (target.classList.contains('plus__item')){
				let copyBlock = target.closest('.resume__block');
				let createHtmlBlock = document.createElement('div');
				createHtmlBlock.classList.add('resume__block');
				createHtmlBlock.innerHTML = copyBlock.innerHTML;
				copyBlock.after(createHtmlBlock);
			}
			if(target.classList.contains('del__item')){
				target.closest('.resume__block').remove();
			}
			if(target.closest('.custom-select')) {
				let select = target.closest('.custom-select').querySelector('.select-selected')
				let selectItems = target.closest('.custom-select').querySelector('.select-items')
			}
	})
	}

const addTable = document.querySelector('.resume__bottom__blocks table');
if (addTable){
	addTable.addEventListener("click", function(e){
		let target = e.target;
		if (target.classList.contains('table_add')){
			let tableLang = target.parentElement.querySelector(".table_lang input");
			let tableLevel = target.parentElement.querySelector(".table_level input");
			let tableUpload = target.parentElement.querySelector(".table_upload input");
			let tableMark = target.parentElement.querySelector(".table_mark input");
			if (tableLang.value != 0 && tableLevel.value != 0 && tableLevel.value != 0 && tableUpload.value != 0 && tableMark.value != 0){
				let createtableLang = document.createElement('td');
				let createtableLevel = document.createElement('td');
				let createtableUpload = document.createElement('td');
				let createtableMark = document.createElement('td');
				let creteDelBtn = document.createElement('td');
				let createDelBtnImg = document.createElement('img');
				createDelBtnImg.src = "img/del.svg"
				createDelBtnImg.classList.add("del_img");
				creteDelBtn.appendChild(createDelBtnImg);
				creteDelBtn.classList.add("table_del")
				let createtable = document.createElement('tr');
				createtableLang.textContent = tableLang.value;
				createtableLevel.textContent = tableLevel.value;
				createtableUpload.textContent = tableUpload.value;
				createtableMark.textContent = tableMark.value;
				createtable.appendChild(createtableLang);
				createtable.appendChild(createtableLevel);
				createtable.appendChild(createtableUpload);
				createtable.appendChild(createtableMark);
				createtable.appendChild(creteDelBtn);
				addTable.querySelector('tbody').lastElementChild.before(createtable);
				tableLang.value = '';
				tableLevel.value = '';
				tableUpload.value = null;
				tableUpload.previousElementSibling.textContent = 'Выберите сертификат';
				tableMark.value = null;
			}
			else{
				e.preventDefault();
				alert("Заполните поле");
			}
		}
		if (target.closest('.table_del')){
			target.parentElement.remove();
		}
	})
}

const smoothLinks = document.querySelectorAll('a[href^="#"].link');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// SELECT

let x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  if(selElmnt.options[selElmnt.selectedIndex].hasAttribute('data-formsob')){
	let atreb = selElmnt.options[selElmnt.selectedIndex].getAttribute('data-formsob');
	// $(a).attr("data-formsob", selElmnt.options[selElmnt.selectedIndex].dataset.formsob)
  }
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
			
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


// $(function () {
// 	$(".popup form").each(function() {$(this).validate({
// 	  rules: {
// 		name: {
// 		  required: true,
// 		  minlength: 2
// 		},
// 		phone: {
// 		  required: true,
// 		  minlength: 10
// 		},
// 		action: "required"
// 	  },
// 	  messages: {
// 		name: {
// 		  required: "Не введен ",
// 		  minlength: "Минимальная длинна Имени 2 символа"
// 		},
// 		phone: {
// 		  required: "Пожалуйста укажите свой телефон <br>",
// 		  minlength: "Минимальная длинна Имени 10 символа"
// 		},
// 		action: "Пожалуйста, предоставьте некоторые данные"
// 	  }
// 	});
// 	})
//   });
  
// const popupOrg = document.getElementById('popup-organiztaion');

// if (popupOrg){
// 	popupOrg.addEventListener('click', function(e){
// 		let target = e.target;
// 		if (target.classList.contains('form-sobs')){
// 			let ()
// 		}
// 	})
// }




