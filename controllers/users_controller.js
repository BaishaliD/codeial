module.exports.home = function(req,res){
    return res.end('<h1>user home page</h1>');
}

module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: "User Profile"
    });
}