
const loadEvent = async _ => {

    //NASA

    const apiKey = "KwzdFL3pypBDTCmm4yc1i3g3ZOhtVdylq4qFd1hp"
    const requestedDate = "2022-02-22"

    const apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${requestedDate}`)
    console.log(apod);
    
    const apodJson = await apod.json()

    console.log(apodJson);
    console.log(apodJson.explanation);
//UGYANEZ MASHOGY
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${requestedDate}`).then(
        function(apodResponse){
            console.log(apodResponse);
            apodResponse.json().then(
                function(apodResponseJson){
                    console.log(apodResponseJson.explanation);
                }
            )
        }
    )

}    

    
  window.addEventListener("load", loadEvent)