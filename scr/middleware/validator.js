module.exports = (request, response, next) => {
  console.log(request.query.name);
  if (request.query.name === '') {
    next('erorr');
  } else {
    next();
  }
};