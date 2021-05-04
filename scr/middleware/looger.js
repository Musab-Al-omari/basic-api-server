module.exports = (req, res, next) => {
  // console.log('before',req)
  // console.log('the methods:', req.method, 'the path:', req.url, 'the prams:', req.params);
  next();
};