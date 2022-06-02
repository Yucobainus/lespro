$(document).ready(function () {

    let accordionsOne = document.querySelectorAll('.accordion-one__item')
    accordionsOne.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const icon = self.querySelector('.accordion-one__icon')
            const content = self.querySelector('.accordion-one__text')
            const head = self.querySelector('.accordion-one__header')
            if (content.classList.contains('_active')) {
                head.classList.remove('_active')
                icon.classList.remove('_active')
                content.classList.remove('_active')
                content.style.maxHeight = null;
                content.setAttribute('aria-expanded', false)
                content.setAttribute('aria-hidden', true)
            } else {
                head.classList.toggle('_active')
                icon.classList.toggle('_active')
                content.classList.toggle('_active')
                content.style.maxHeight = `${content.scrollHeight}px`
                content.setAttribute('aria-expanded', true)
                content.setAttribute('aria-hidden', false)
            }
        })
    })


    let accordionsTwo = document.querySelectorAll('.accordion-two__item')
    accordionsTwo.forEach(el => {
        const elem = el
        el.querySelector('.accordion-two__header').addEventListener('click', (e) => {
            const self = elem;
            const icon = self.querySelector('.accordion-two__icon')
            const content = self.querySelector('.accordion-two__text')
            const head = self.querySelector('.accordion-two__header')
            if (content.classList.contains('_active')) {
                head.classList.remove('_active')
                icon.classList.remove('_active')
                content.classList.remove('_active')
                content.style.maxHeight = null;
                content.setAttribute('aria-expanded', false)
                content.setAttribute('aria-hidden', true)
            } else {
                head.classList.toggle('_active')
                icon.classList.toggle('_active')
                content.classList.toggle('_active')
                content.style.maxHeight = `${content.scrollHeight}px`
                content.setAttribute('aria-expanded', true)
                content.setAttribute('aria-hidden', false)
            }
        })
    })


})