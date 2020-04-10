const url = ''


fetch(url)
.then(function(res){
    return res.json()
})
.then(function(json){
    return ({
        importantData:json.importantData
    })
})  
