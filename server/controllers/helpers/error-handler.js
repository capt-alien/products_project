module.exports = function(error) {
    console.log("Server error", error);
  var errMsg={message:'fail',
              error: error}
    this.json(errMsg);
  };
