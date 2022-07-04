module.exports = ()=> ({
    send: (res, message, data)=> res.status(404).json({
        message,
        data
    })
})