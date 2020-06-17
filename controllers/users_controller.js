module.exports.home = function(req,res){
    return res.end('<h1>user home page</h1>');
}

module.exports.profile = function(req,res){
    return res.end('<h1>user profile page</h1>');
}