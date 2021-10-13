const log = require("./logger")

log.info('This is Info')
log.warn('This is Warning')
log.error('This is Error')

console.log(process.pid)
console.log(process.execPath)
console.log(process.cwd())