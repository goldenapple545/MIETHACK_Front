const create = document.getElementById('create-gif')

const gifName = 'Котик'
const layerCount = 5
const price = 10
const buyPrice = 7
// const img = 'img/cat0.jpeg'

let imgAlbum = ['img/cat0.jpeg', 'img/cat1.jpeg', 'img/cat2.jpeg']

// const gifImit = (imgAlbum) => {
//     for(let i = 0; i < imgAlbum.length; i++) {


const imageGif = document.getElementById('image-gif')
        let i = 0
        setInterval((e) => {
            imageGif.setAttribute('data-src', imgAlbum[i])
            imageGif.src = imgAlbum[i]
            i++
            if (i === 3) i = 0
        }, 500);
    // }
// }

document.getElementById('name').innerHTML += gifName
document.getElementById('layers-count').innerHTML += layerCount
document.getElementById('price').innerHTML += price
document.getElementById('buy-price').innerHTML += buyPrice
// document.getElementById('image-gif').setAttribute('data-src', imgAlbum[0])

create.addEventListener('click', (e) => {
    // var canvas = document.getElementById('bitmap');
    // var context = canvas.getContext('2d');
    // context.fillStyle = 'rgb(255,255,255)';
    // context.fillRect(0,0,canvas.width, canvas.height); //GIF can't do transparent so do white
    //
    // context.fillStyle = "rgb(200,0,0)";
    // context.fillRect (10, 10, 75, 50);   //draw a little red box
    // var encoder = new GIFEncoder();
    // encoder.setRepeat(0); //0  -> loop forever
    // //1+ -> loop n times then stop
    // encoder.setDelay(500); //go to next frame every n milliseconds
    // encoder.start();
    // encoder.addFrame(context);
    // context.fillStyle = "rgb(200,50,0)";
    // context.fillRect (50, 10, 75, 50);   //draw a little red box
    // encoder.addFrame(context);
    // encoder.finish();
    // var binary_gif = encoder.stream().getData() //notice this is different from the as3gif package!
    // var data_url = 'data:image/gif;base64,'+encode64(binary_gif);
    // encoder.finish();
    // encoder.download("download.gif");
})

const gif0 = document.getElementById('gif-0')
gif0.addEventListener('click', (e) => document.location='gifpage.html')

