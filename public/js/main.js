console.log('hello, world')

let h1Text = document.querySelector('h1')

function colorChanger() {

  h1Text.innerText.includes('Dylan') == true ?
    h1Text.innerText += ' Dylan'
    : h1Text.innerText = 'Dylan'
    
}

document.querySelector('button').addEventListener('click', colorChanger)

