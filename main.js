window.addEventListener('load', loadPage)

// function loadPage(){
//     applyRandomColorsToTextBorder()
//     randomizeColor()
//     randomizeColorRGB()
// }

/**
 * 
 */
 function applyRandomColorsToTextBorder() {
  const hexBorder = document.querySelector('.content_text_1')
  const rgbBorder = document.querySelector('.content_text_2')
  const hexText = document.getElementById('box1-h3')
  const rgbText = document.getElementById('box2-h3')
 
  const firstColor = randomizeColor()
  hexBorder.style.borderColor = firstColor
  hexText.innerText = firstColor
  
  const secondColor = randomizeColorRGB()
  rgbBorder.style.borderColor = secondColor
  rgbText.innerText = secondColor 
}


  
/**
 * exporting a HEX value to randomizeColor function
 */
function randomizeColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
 
  for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * exporting a rgb value to randomizeColorRGB function
 */
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