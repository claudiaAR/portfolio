
 function applyRandomColorsToTheBoxes() {
  const content_text_1 = document.querySelector('.content_text_1')
  const content_text_2 = document.querySelector('.content_text_2')
  const box1h3 = document.getElementById('box1-h3')
  const box2h3 = document.getElementById('box2-h3')
 
  const firstColor = randomizeColor()
  content_text_1.style.borderColor = firstColor
  box1h3.innerText = firstColor

  const secondColor = randomizeColorRGB()
  content_text_2.style.borderColor = secondColor
  box2h3.innerText = secondColor 
}

function randomizeColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
 
  for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomizeColorRGB() {
  const redValue = Math.round(Math.random() * 255)
  const greenValue = Math.round(Math.random() * 255)
  const blueValue = Math.round(Math.random() * 255)
  return `rgb(${redValue}, ${greenValue}, ${blueValue})`
}

/**
 * toggles a span tag
 */

$(document).ready(function(){
  
  $('span').click(function(){
      $('.toggle_text').fadeToggle(100)
  })
})