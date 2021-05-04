module.exports=(request,response,next)=>{
console.log(request);
    response.status(404).json({
        error: 404,
        "this route dose not found": request.url
    })
}