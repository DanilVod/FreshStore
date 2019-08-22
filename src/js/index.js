
let findingGrid = document.querySelector('.finding-grid');
let group = document.querySelector('body');
let tabNav = document.querySelector('.tabs-nav')
let product = ['Овощи','Ягоды','Полуфабрикаты','Мясо и субпродукты','Рыба и морепродукты','Пицца','Десерты и мороженное']; 

//Добавляю контент на страницу, первый for для добавления сетки продуктов, второй для имен пунктов выпадающего меню
for (let i = 0; i < 16; i++) { findingGrid.insertAdjacentHTML("beforeend", `<div class='finding-grid__box'><div class='finding-grid__image'><img class='icons' src='../../assets/img/finding-fructs${i}.svg'></div><div class='finding-grid__text'> <p>Овощи, фрукты</p></div></div>`)
};

for (let i = 0; i < product.length; i++) {
  tabNav.insertAdjacentHTML("beforeend", `<div class="tabs-nav__item" data-tab-name="${i}">${product[i]}</div>`)
}
//Выведение табов и продуктов на страницу
for (let i = 0; i <= 6;i++){
  let arr = [];
  let tabBox = document.querySelector('.tabs_box');
  tabBox.insertAdjacentHTML('afterend', `<div class="tabs__content tab tab-${i}"><div class="wrapper_product"></div> </div>`)
  arr.push(`.tab-${i}`)
  for(let j = 0; j < 9;j++){
    for(let item of arr) {
      let newTab = document.querySelector(`.wrapper_product`)
      newTab.insertAdjacentHTML("beforeend", `<div class="product-grid__tabs"><img class='picture__product-grid' src='../../assets/img/2.jpg'><p>Черника</br>Вологодская ягода</br>300 ГР.</p><div class="price_tab">59 руб.</div><img class='icons_tab' src='../../assets/img/control-cart.svg'></div>`)
    }
  }
}
//Чтобы при клике на таб появлялся список товаров
(function () {
  let tabsNav = document.querySelectorAll('.tabs-nav__item')
  let tabContent = document.querySelectorAll('.tab')
  let tabName;
  tabsNav.forEach(item=>{
    item.addEventListener('click', selectTabNav)
  })
  function selectTabNav() {
    
    tabsNav.forEach(item=>{
      item.classList.remove('is-active')
    });
    this.classList.add('is-active');
    tabName = 'tab-' + this.getAttribute('data-tab-name');
    console.log(tabName)
    selectTabContent(tabName)

  }
  function selectTabContent(tabName) {
    console.log(tabContent)
    tabContent.forEach(item=>{
      item.classList.contains(tabName) ? item.classList.add('is-active') :item.classList.remove('is-active')
    })
  }
})();

//Работа сетки, чтобы при нажатии появлялось меню
let findingBox = $('.finding-grid__box')
let tabContent = $('.tab-content__outer')   
findingBox.on("click", function(event) {          
  tabContent.fadeIn(150)
  tabContent.css('display','block')
  findingBox.removeClass('aica');
  $(this).toggleClass('aica');
  return false;
})
//Чтобы убиралось меню
$(function () {
  $(document).click(function() {
    findingBox.removeClass('aica')
    tabContent.fadeOut(150, function() {
      tabContent.css('display', 'none')
    })
  })
});
//Левая панелька
let controlText = $('.text');
$('.control').hover(() => controlText.fadeIn('150', () => controlText.css('display', 'block')), () => { 
  $('.finding').mouseenter( () => controlText.css('display', 'none')); }
,)
