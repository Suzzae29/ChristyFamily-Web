const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)

    })
})
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

const menu = document.querySelector('#open-menu')
const navigation = document.querySelector('.my-navigation')




// menu.addEventListener('click', () => {
//     if(navigation.style.display == 'none') {
//         navigation.style.display = 'block'
//     } 
//     else {
//         navigation.style.display = 'none'
//     }
 
// })

menu.addEventListener('click', () => {
    if(navigation.style.display == 'none') {
        navigation.style.display = 'block'
        navigation.classList.add('animate__animated', 'animate__fadeIn')
    } 
    else {
        navigation.style.display = 'none'
        navigation.classList.remove('animate__animated', 'animate__fadeIn')

    }
 
})


