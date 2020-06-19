module.exports.home = function(req,res){
    return res.end('<h1>user home page</h1>');
}

module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: "User Profile"
    });
}

//action for rendering Sign Up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "Codeial | Sign up"
    })
}

//action for rendering Sign In page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    })
}

//get the sign up data
module.exports.create = function(req,res){

}

//sign in and create a session for the user
module.exports.createSession = function(req,res){
    
}