module.exports = ()=> ({
    send: (res, message, data)=> res.status(403).json({
        message,
        data
    })
})