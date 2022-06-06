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





    function scrollbar(scrollbar_id, textModificator, floatMode) {
        let inputLeft = document.getElementById(scrollbar_id + "-left")
        let inputRight = document.getElementById(scrollbar_id + "-right")
        let thumbLeft = document.getElementById(scrollbar_id + "-thumb-min")
        let thumbRight = document.getElementById(scrollbar_id + "-thumb-max")
        let range = document.getElementById(scrollbar_id + "-range")

        let minValue = document.getElementById(scrollbar_id + "-value-min")
        let maxValue = document.getElementById(scrollbar_id + "-value-max")

        function setLeftValue() {
            let _this = inputLeft,
                min = parseFloat(_this.min),
                max = parseFloat(_this.max)

            _this.value = Math.min(parseFloat(_this.value), parseFloat(inputRight.value) - 1)

            let percent = ((_this.value - min) / (max - min)) * 100
            thumbLeft.style.left = percent + "%";
            range.style.left = percent + "%";
            minValue.value = `${parseFloat(_this.value)} ${textModificator}`;
        }
        setLeftValue()

        function setRightValue() {
            let _this = inputRight,
                min = parseFloat(_this.min),
                max = parseFloat(_this.max)

            _this.value = Math.max(parseFloat(_this.value), parseFloat(inputLeft.value) + 1)

            let percent = ((_this.value - min) / (max - min)) * 100
            thumbRight.style.right = (100 - percent) + "%";
            range.style.right = (100 - percent) + "%";
            maxValue.value = `${parseFloat(_this.value)} ${textModificator}`;
        }
        setRightValue()
        inputLeft.addEventListener("input", setLeftValue)
        inputRight.addEventListener("input", setRightValue)

        function changeLeftPosition() {
            if (parseFloat(minValue.value) !== 0 && minValue.value != '' && parseFloat(minValue.value) < parseFloat(maxValue.value)) {
                let _value = parseFloat(minValue.value)
                inputLeft.value = _value
                setLeftValue()
            }
        }
        function changeRightPosition() {
            if (parseFloat(maxValue.value) !== 0 && maxValue.value != '' && parseFloat(maxValue.value) > parseFloat(minValue.value)) {
                let _value = parseFloat(maxValue.value)
                inputRight.value = _value
                setRightValue()
            }
        }
        minValue.addEventListener("input", changeLeftPosition)
        maxValue.addEventListener("input", changeRightPosition)
    }

    scrollbar("price", "₽")


})