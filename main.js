window.addEventListener('load', loadPage)


function loadPage(){
    hex()
    rgb()
    hex3()
    rgb4()
}

/**
 * 
 * Identifies the elements that will be changed 
 * border changes the color and the rbg value gets printed in the button
 * repets this function in four different borders
 * 
 */
function rgb(){
  const rgbBorder = document.querySelector('.content_text_2')
  const rgbText = document.getElementById('rgb_button')

  rgbText.onclick = () => {
    const rbgColor = randomizeColorRGB()
    rgbBorder.style.borderColor = rbgColor
    rgbText.innerText = rbgColor 
  }
}

function hex(){
  const hexText = document.getElementById('hex_button')
  const hexBorder = document.querySelector('.content_text_1')

  hexText.onclick = () =>{
    const hexColor = randomizeColor()
    hexBorder.style.borderColor = hexColor
    hexText.innerText = hexColor
  }
}

function hex3(){
  const hexText2 = document.getElementById('hex_button_3')
  const hexBorder2 = document.querySelector('.content_text_3')

  hexText2.onclick = () =>{
    const hexColor = randomizeColor()
    hexBorder2.style.borderColor = hexColor
    hexText2.innerText = hexColor
  }
}

function rgb4(){
  const rgbBorder = document.querySelector('.content_text_4')
  const rgbText = document.getElementById('rgb_button_4')

  rgbText.onclick = function(){
    const rbgColor = randomizeColorRGB()
    rgbBorder.style.borderColor = rbgColor
    rgbText.innerText = rbgColor 
  }
}

/**
 * exporting a HEX value 
 * 
 */

 /**
 * An object that defined part of what is returned in the day
 * @typedef  {{letter: String, color: number}}
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
 * exporting a rgb value 
 */
function randomizeColorRGB() {
  const redValue = Math.round(Math.random() * 255)
  const greenValue = Math.round(Math.random() * 255)
  const blueValue = Math.round(Math.random() * 255)
  return `rgb(${redValue}, ${greenValue}, ${blueValue})`
}

/**
 * 
 * toggles a span tag
 */

$(document).ready(function(){
  
  $('span').click(function(){
      $('.toggle_text').fadeToggle(10)
  })
})

