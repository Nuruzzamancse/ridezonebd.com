var User = require('../model/user');

var createUser = (req, res, next) => {
    console.log('this is create user');

    var name = req.body.name,
        email = req.body.email,
        userName = req.body.username,
        password = req.body.password,
        wishList = req.body.wishList,
        buyList = req.body.buyList

    var myUser = new User({
        name: name,
        email: email,
        username: userName,
        password: password,
        wishList: wishList,
        buyList: buyList,
        isAdmin: false
    });

    User.addUser(myUser, (err, user) => {
        if (err) {
            res.status(404).json({
                'message': err
            })
        } else {
            res.status(201).json({
                success:true,
                'message': 'user created'
            })
        }

    });

    // myUser.save((err, user) => {
    //     if(err) {
    //         return res.status(404).json({
    //             message: err,
    //             success: false
    //         });
    //     }
    //     else {
    //         return res.status(200).json({
    //             success: true,
    //             data: user
    //         });
    //     }
    // });
};


var getUser = (req, res, next) => {
    User.findById(req.params.id, (err, User) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            return res.status(200).json({
                success: true,
                data: User
            });
        }
    });
}

var getAllUser = (req, res, next) => {
    User.find( (err, User) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            return res.status(200).json({
                success: true,
                data: User
            });
        }
    });
}

var updateUser = (req, res, next) => {

    console.log('In Update User');

    var name = req.body.name,
        email = req.body.email,
        userName = req.body.username,
        wishList = req.body.wishList,
        buyList = req.body.buyList;

    console.log('WIshList' +wishList);
    console.log('Buy List' +buyList);

    User.findById(req.params.id, (err, User) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            User.name = name || User.name;
            User.email = email || User.email;
            User.username = userName || User.username;
            User.wishList = wishList ;
            User.buyList = buyList || User.buyList;

            console.log("Wish" + User.wishList);
            console.log("Buy" + User.buyList);

            User.save((err, User) => {
                if(err){

                    console.log('Update error' + err);

                    return res.status(404).json({
                        message: err,
                        success: false
                    });
                }
                else {
                    console.log('Update successfully');

                    return res.status(200).json({
                        success: true,
                        data: User
                    });
                }
            });
        }
    });
}


var deleteUser = (req, res, next) => {

    console.log('Here delete');

    User.findByIdAndRemove(req.params.id, (err) => {
        if(err){

            console.log('In error' +err);

            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {

            console.log('Here in success');

            return res.status(200).json({
                message: "User deleted",
                success: true
            });
        }
    });
}

module.exports = {
    createUser,
    deleteUser,
    getAllUser,
    getUser,
    updateUser
}