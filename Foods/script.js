const menu = document.querySelector('.menu').addEventListener('click', () => {
  document.querySelectorAll('.target').forEach((item) => {
    item.classList.toggle('show')
  })
})

const icons = document.querySelectorAll('.section-1-icons i')
window.scroll(0,0)

/*
let j = 0

setTimeout(() => {
  setInterval(() => {
  window.scroll(0, 50 * j)
  j++
}, 50)}, 5000)
*/
let i = 1


setInterval(() => {
  i++
  const icon = document.querySelector('.section-1-icons .show')


  icon.classList.remove('show')
  if(i>icons.length) {
    icons[0].classList.add('show');
    i = 1
  } 
  icon.nextElementSibling.classList.add('show')
},4000)