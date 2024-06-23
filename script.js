const toggles = document.querySelectorAll('.qtn-toggle')

toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})
