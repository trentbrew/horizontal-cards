document.getElementById('demo').addEventListener('click', function (event) {
  let target = event.target.closest('.item')

  if (target) {
    this.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth',
    })
  }
})
