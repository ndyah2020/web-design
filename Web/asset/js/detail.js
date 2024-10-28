const selectConfig = () => {
    const buttonConfig = document.querySelectorAll('.btn-config')


    buttonConfig.forEach(button => {
        button.addEventListener('click', (event) =>  {

            buttonConfig.forEach(btn => btn.classList.remove('active'))

            button.classList.add('active')

            event.stopPropagation()
        })
    })

    document.addEventListener('click', () => {
        buttonConfig.forEach(btn => btn.classList.remove('active'))
    })
}

document.addEventListener('DOMContentLoaded', () => {
    selectConfig()
})
