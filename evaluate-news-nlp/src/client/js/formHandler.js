function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8081/test?url=${formText}`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        const random = getRndInteger(res.sentence_list.length -1)
        document.getElementById('subjectivity').textContent = `Subjectivity: ${res.subjectivity.toLowerCase()}`
        document.getElementById('snippet').textContent = `Text Snippet: ${res.sentence_list[random].text}`
    })
}

// return a random number between 0 and max (both included)
function getRndInteger(max) {
    return Math.floor(Math.random() * (max + 1))
}

export { handleSubmit }
