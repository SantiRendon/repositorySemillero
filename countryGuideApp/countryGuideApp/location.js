let ipLocation = `http://ip-api.com/json/?fields=status,country,countryCode,query`

fetch(ipLocation)
.then(res=> res.json())
.then(data=>{
    console.log(data)
    console.log(`la ip del usuario es ${data.query} del pais ${data.country}(${data.countryCode})`
    )
})