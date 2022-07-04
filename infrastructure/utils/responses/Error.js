module.exports = ()=> ({
    send: (res, message, data)=> res.status(501).json({
        message,
        data
    })
})