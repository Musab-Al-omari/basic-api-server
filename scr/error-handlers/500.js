module.exports = (error, request, response, next) => {

    response.status(500).json(
        {
            error: error,
            message: `sth wrong happened ${error.message}`,
            path: request.path
        }

    )
}