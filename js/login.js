document.getElementById('submit').addEventListener('click',  (ev) => {
    ev.preventDefault()
    const form = document.getElementById('form_1')
    const username = form.elements.name.value
    const password = form.elements.name.value
    let login = true
    if (login) document.location='usersettings.html'
})