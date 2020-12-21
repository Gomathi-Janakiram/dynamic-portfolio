let url = "http://localhost:8000/"

async function createAboutme() {
    let aboutme = document.getElementById("aboutmeSection").value;
    // console.log(aboutme)
    try {
        let result = await fetch(url + "updateAboutme", { 
            method: "POST",
            body: JSON.stringify({ aboutme }),
            headers: {
                "content-type": "application/json"
            }
        })
        let resultData = result.json()
        console.log(resultData)
    } catch (err) {
        console.log(err)
    }
}

async function getAboutme() {
    try {
        await fetch("")

    } catch (err) {
        console.log(err)
    }
}



