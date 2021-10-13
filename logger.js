var log = {
    info: function(info){
        console.log(`Info: ${info}`)
    },
    warn: function(warn){
        console.log(`warn: ${warn}`)
    },
    error: function(error){
        console.log(`error: ${error}`)
    }
}

module.exports = log