const url = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today'

fetch(url)
.then(Response => Response.json() )
.then(Data => {

        let element = document.getElementById('elem')
        element.innerHTML =
})