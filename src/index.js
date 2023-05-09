// write your code here
fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(ramens => renderRamens(ramens))

const newRamenFormyy = document.querySelector('#new-ramen')
newRamenFormyy.addEventListener('submit', dealWitRamen)
//console.log(newRamenFormyy)


//callback fucntion

function renderRamens(ramens) {
    ramens.forEach(ramen => {
        const image = document.createElement('img')
        image.src = ramen.image
        const ramenMenu = document.querySelector('#ramen-menu')
        ramenMenu.appendChild(image)
       // console.log(ramenMenu)
       // console.log(image)
    image.addEventListener('click', () => renderRamenDetails(ramen))
    })
}

const renderRamenDetails = (ramen) => {
  //  console.log(ramen)
    const ramenImage = document.querySelector('.detail-image')
    ramenImage.src = ramen.image
   // console.log(ramenImage)
    const ramenOnamaewa = document.querySelector('.name')
    ramenOnamaewa.innerText = ramen.name
    const ramenResty = document.querySelector('.restaurant')
    ramenResty.innerText = ramen.restaurant
    const ramenRatingu = document.querySelector('#rating-display')
    ramenRatingu.innerText = ramen.rating
    const ramenCommentu = document.querySelector('#comment-display')
    ramenCommentu.innerText = ramen.comment
}

function dealWitRamen (e) {
    e.preventDefault()
  //console.log(e.target.name)
  const newOnamae = document.querySelector('#new-name').value 
  const newResty = document.querySelector('#new-restaurant').value 
  const newRatingu = document.querySelector('#new-rating').value 
  const newImage = document.querySelector('#new-image').value 
  const newCommentu = document.querySelector('#new-comment')
  //console.log(e.target['new-comment'].value)
  let newRamenFormyy = {
    name: newOnamae,
    restaurant: newResty,
    image: newImage,
    rating: newRatingu,
    comment: newCommentu
  }
  console.log(newRamenFormyy)

  renderRamens([newRamenFormyy])
}
