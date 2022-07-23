
var filedenService = require('../services/filedenService');
var romservice = require('../services/roomService');
var userService = require('../services/userService');
let login = async (req, res) => {

    res.render('login.ejs')

}
let trangchu = async (req, res) => {
    // console.log(req.user.email);
    var allVanBanDenDaDuyet = await filedenService.vanBanDaPheDuyet();
    var allVanBanDen = await filedenService.allvanBanDen();
    var allRoom = await romservice.getAllRoom();
    var allUser = await userService.getalluser();

    var data = {
        countAllText: allVanBanDen.length,
        countAllTextDaDuyet: allVanBanDenDaDuyet.length,
        countAllRoom: allRoom.length,
        countAllUserService: allUser.length,
    }
    //console.log(allVanBanDen.length);
    // console.log(allVanBanDenDaDuyet.length);

    res.render('user/trangchu.ejs', {
        user: req.user,
        lengthVBDChuaDuyet: allVanBanDen.length - allVanBanDenDaDuyet.length,
        lengthVBDaDuyet: allVanBanDenDaDuyet.length,
        data,
    });


}

// edit the infor of user by user
let getInforUser = async (req, res) => {

    var userInfor = await userService.getInforUserById(req.user.id);

    res.render("user/profile", { user: req.user, userInfor });

}

let postEditUser = async (req, res) => {

    console.log(req.body);

    var userInfoUpdate = await userService.editInforUserById(req.body, req.user.id);

    var userInfor = await userService.getInforUserById(req.user.id);

    res.render("user/profile", { user: req.user, userInfor });
}



module.exports = {
    login: login,
    trangchu: trangchu,
    getInforUser: getInforUser,
    postEditUser: postEditUser,
}
