const selectConfig = () => {
    const buttonConfig = document.querySelectorAll('.btn-config')

    buttonConfig.forEach(function(button) {
        button.addEventListener('click', function(event){

            buttonConfig.forEach(btn => btn.classList.remove('active'))

            button.classList.add('active')

            event.stopPropagation()
            console.log(this.textContent)
        })
    })

    document.addEventListener('click', () => buttonConfig.forEach(btn => btn.classList.remove('active')))
}

document.addEventListener('DOMContentLoaded', () => {
    selectConfig()
})
