const gifName = 'Котик'
const layerCount = 5
const price = 10

document.getElementById('gif-name').innerHTML += gifName
document.getElementById('layer-count').innerHTML += layerCount
document.getElementById('price').innerHTML += price

const imgAlbum = ['img/cat0.jpeg', 'img/cat1.jpeg', 'img/cat2.jpeg']

const imageGif = document.getElementById('image-gif')
let i = 0
setInterval((e) => {
    imageGif.setAttribute('data-src', imgAlbum[i])
    imageGif.src = imgAlbum[i]
    i++
    if (i === 3) i = 0
}, 500);

gif0.addEventListener('click', (e) => document.location='gifpage.html')


