const axios = require('axios')
function isAkron(value) {
    return value.id == "84234401";
}

const headers = {
    'Client-Id': 'gp762nuuoqcoxypju8c569th9wz7q5',
    'Authorization': 'Bearer m6p6m50gtvrn6s4qm3ifysr7zgcf6q'
}
 axios.get(`https://api.twitch.tv/helix/search/channels?query=akron`, {
    headers: headers
 }).then(async function (response) {
     const filtered = response.data.data.filter(isAkron);
    if (filtered[0].is_live) {
    console.log('live')
}
else{
    console.log('not live')
}
}).catch(function (error) {
// handle error
console.log(error.data.error);
})
