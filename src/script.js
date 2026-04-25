sliderNextButton = document.querySelector('.slider__next-btn');
sliderPrevButton = document.querySelector('.slider__prev-btn');
sliderItems = [...document.querySelectorAll('.slider__item')];

sliderNextButton.addEventListener('click', (event) => {
  const activeIndex = sliderItems.findIndex(item => item.classList.contains('slider__is-active'));
  if (activeIndex < sliderItems.length - 1) {
    const beforeIndex = activeIndex - 1
    const afterIndex = activeIndex + 1
    sliderItems.forEach((item, index) => {
      item.classList.remove('slider__is-active', 'slider__before-slide', 'slider__after-slide')
    })
    sliderItems[activeIndex + 1]?.classList.add('slider__is-active')
    sliderItems[beforeIndex + 1]?.classList.add('slider__before-slide')
    sliderItems[afterIndex + 1]?.classList.add('slider__after-slide')
  }
})

sliderPrevButton.addEventListener('click', (event) => {
  const activeIndex = sliderItems.findIndex(item => item.classList.contains('slider__is-active'));
  if (activeIndex > 0) {
    const beforeIndex = activeIndex - 1
    const afterIndex = activeIndex + 1
    sliderItems.forEach((item, index) => {
      item.classList.remove('slider__is-active', 'slider__before-slide', 'slider__after-slide')
    })
    sliderItems[activeIndex - 1]?.classList.add('slider__is-active')
    sliderItems[beforeIndex - 1]?.classList.add('slider__before-slide')
    sliderItems[afterIndex - 1]?.classList.add('slider__after-slide')
  }
})

