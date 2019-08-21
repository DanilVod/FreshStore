
let findingGrid = document.querySelector('.finding-grid');
let group = document.querySelector('body');
let tabsContent = document.querySelector('.tab-content__outer')
let product = ['Овощи','Ягоды','Полуфабрикаты','Мясо и субпродукты','Рыба и морепродукты','Пицца','Десерты и мороженное']; 

//Добавляю контент на страницу, первый for для добавления сетки продуктов, второй для имен пунктов выпадающего меню
for (let i = 0; i < 16; i++) { findingGrid.insertAdjacentHTML("beforeend", `<div class='finding-grid__box'><div class='finding-grid__image'><img class='icons' src='../../assets/img/finding-fructs${i}.svg'></div><div class='finding-grid__text'> <p>Овощи, фрукты</p></div></div>`)
};
console.log(tabsContent)
for (let i = 0; i < product.length; i++) {tabsContent.insertAdjacentHTML("beforeend", `<a>${product[i]}</a>`)
}


console.log(findingBox);
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


