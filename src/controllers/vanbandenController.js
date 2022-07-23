var filedenService = require('../services/filedenService');


const WordExtractor = require("word-extractor");

let themvanbanden = async (req, res) => {
    const mess = req.flash('messages');
    res.render('user/themvanbanden', { user: req.user, mes: mess });
}
let themvanbandentc = async (req, res) => {
    //    type: req.file.mimetype,
    //    size: req.file.size,
    //    path: req.file.path,
    var ten_vb = req.body.ten_vb
    var nguoi_gui_den = req.body.nguoi_gui_den
    var noi_gui_den = req.body.noi_gui_den
    var thoi_gian_nhan = req.body.thoi_gian_nhan
    var ma_co_quan = req.body.ma_co_quan
    var so_ki_hieu = req.body.so_ki_hieu

    if (req.file == undefined || so_ki_hieu == "" || ma_co_quan == "" || nguoi_gui_den == "" || ten_vb == "" || noi_gui_den == "" || thoi_gian_nhan == "") {

        req.flash('messages', "vui lòng nhập đầy đủ tham số");
    }
    else {
        var fileDen = {
            ten_vb: req.body.ten_vb,
            nguoi_gui_den: req.body.nguoi_gui_den,
            noi_gui_den: req.body.noi_gui_den,
            thoi_gian_nhan: req.body.thoi_gian_nhan,
            ma_co_quan: req.body.ma_co_quan,
            so_ki_hieu: req.body.so_ki_hieu,
            name: req.file.filename,
        }
        var data = await filedenService.addFileText(fileDen);
        if (data !== null) {
            req.flash('messages', "thêm văn bản thành công");

        }
    }
    res.redirect("/vanthu/themvanbanden");
}
let vanbanchophanloai = async (req, res) => {
    var vanbanchophanloai = await filedenService.getVanBanChoPhanLoai();
    const mess = req.flash('messages');
    res.render("user/vanbanchophanloai", { alldatavb: vanbanchophanloai, user: req.user, mess });

}
let vanbanchophanloaiphanloai = async (req, res) => {
    let fileVanbanDen = await filedenService.checkFileById(req.query.id);
    let namefileworld = fileVanbanDen.name;
    var fileVanBan = {
        id: fileVanbanDen.id,
        nguoi_gui_den: fileVanbanDen.nguoi_gui_den,
        name: fileVanbanDen.tenvb,
        namefileworld:namefileworld,
    }
    res.render("user/vanbanchophanloaiphanloai", { user: req.user, fileVanBan });
}
let postvanbanchophanloaiphanloai = async (req, res) => {
    if (req.body.radio != null) {
        var fileDen = await filedenService.upDateCategoryFileDen(parseInt(req.body.radio), req.query.id);
        if (fileDen != null) {
            req.flash('messages', "phân loại văn bản thành công");
        } else {
            req.flash('messages', "phân loại văn bản thất bạn");
        }
    }
    res.redirect("/vanbanden/vanbanchophanloai")
}

let vanbanchopheduyet = async (req, res) => {
    const message = req.flash("messages");
    var vanBanChoPheDuyet;
    var idLoaiVanBanDen = req.query.id;
    var idChuVUCanPheDuyet;
    var vanBanDaLoc = [];
    /*
    if (idLoaiVanBanDen == undefined) {
        var allvanBanChoPheDuyet = await filedenService.getVanBanChoPheDuyet();
        // res.render("user/vanbanchopheduyet.ejs", {
        //     vanBanChoPheDuyet: vanBanChoPheDuyet,
        //     user: req.user,
        //     message: message
        // });
        for (let i = 0; i < allvanBanChoPheDuyet.length; i++) {
            console.log(allvanBanChoPheDuyet[i].id_category)
            vanBanChoPheDuyet = await filedenService.getVanBanChoPheDuyetByIdcategory(allvanBanChoPheDuyet[i].id_category);
            idChuVUCanPheDuyet = await filedenService.checkIdChucVUCanPheDuyet(allvanBanChoPheDuyet[i].id_category);

            for (let i = 0; i < vanBanChoPheDuyet.length; i++) {

                var checkIdXuDaXuLyVanBanChua = await filedenService.checkIdXuDaXuLyVanBanChua(vanBanChoPheDuyet[i].id, req.user.id);

                if (checkIdXuDaXuLyVanBanChua == 2 || checkIdXuDaXuLyVanBanChua == 3) {

                    var idChuVuCuoiCungdaPheDuyet = await filedenService.idChucVuCuoiCungdaPheDuyet(vanBanChoPheDuyet[i].id);

                    if (idChuVuCuoiCungdaPheDuyet == 0 && req.user.chuc_vu == idChuVUCanPheDuyet[0]) {
                        vanBanDaLoc.push(vanBanChoPheDuyet[i]);
                    }
                    else if (idChuVuCuoiCungdaPheDuyet != 0) {
                        var idChuVUCanPhuyetTieptheo = await filedenService.idChuVUCanPhuyetTieptheo(idChuVUCanPheDuyet, idChuVuCuoiCungdaPheDuyet);
                        if (idChuVUCanPhuyetTieptheo == req.user.chuc_vu) {

                            vanBanDaLoc.push(vanBanChoPheDuyet[i]);
                        }
                    }

                }
            }
        }
    } else {
        vanBanChoPheDuyet = await filedenService.getVanBanChoPheDuyetByIdcategory(idLoaiVanBanDen);

        idChuVUCanPheDuyet = await filedenService.checkIdChucVUCanPheDuyet(idLoaiVanBanDen);

        for (let i = 0; i < vanBanChoPheDuyet.length; i++) {

            var checkIdXuDaXuLyVanBanChua = await filedenService.checkIdXuDaXuLyVanBanChua(vanBanChoPheDuyet[i].id, req.user.id);

            if (checkIdXuDaXuLyVanBanChua == 2 || checkIdXuDaXuLyVanBanChua == 3) {

                var idChuVuCuoiCungdaPheDuyet = await filedenService.idChucVuCuoiCungdaPheDuyet(vanBanChoPheDuyet[i].id);

                if (idChuVuCuoiCungdaPheDuyet == 0 && req.user.chuc_vu == idChuVUCanPheDuyet[0]) {
                    vanBanDaLoc.push(vanBanChoPheDuyet[i]);
                }
                else if (idChuVuCuoiCungdaPheDuyet != 0) {
                    var idChuVUCanPhuyetTieptheo = await filedenService.idChuVUCanPhuyetTieptheo(idChuVUCanPheDuyet, idChuVuCuoiCungdaPheDuyet);
                    if (idChuVUCanPhuyetTieptheo == req.user.chuc_vu) {

                        vanBanDaLoc.push(vanBanChoPheDuyet[i]);
                    }
                }

            }
        }
    }
*/

    vanBanChoPheDuyet = await filedenService.getVanBanChoPheDuyetByIdcategory(idLoaiVanBanDen);

    idChuVUCanPheDuyet = await filedenService.checkIdChucVUCanPheDuyet(idLoaiVanBanDen);

    for (let i = 0; i < vanBanChoPheDuyet.length; i++) {

        var checkIdXuDaXuLyVanBanChua = await filedenService.checkIdXuDaXuLyVanBanChua(vanBanChoPheDuyet[i].id, req.user.id);

        if (checkIdXuDaXuLyVanBanChua == 2 || checkIdXuDaXuLyVanBanChua == 3) {

            var idChuVuCuoiCungdaPheDuyet = await filedenService.idChucVuCuoiCungdaPheDuyet(vanBanChoPheDuyet[i].id);

            if (idChuVuCuoiCungdaPheDuyet == 0 && req.user.chuc_vu == idChuVUCanPheDuyet[0]) {
                vanBanDaLoc.push(vanBanChoPheDuyet[i]);
            }
            else if (idChuVuCuoiCungdaPheDuyet != 0) {
                var idChuVUCanPhuyetTieptheo = await filedenService.idChuVUCanPhuyetTieptheo(idChuVUCanPheDuyet, idChuVuCuoiCungdaPheDuyet);
                if (idChuVUCanPhuyetTieptheo == req.user.chuc_vu) {

                    vanBanDaLoc.push(vanBanChoPheDuyet[i]);
                }
            }

        }
    }
    res.render("user/vanbanchopheduyet.ejs", {
        vanBanChoPheDuyet: vanBanDaLoc,
        user: req.user,
        message: message
    });

}

let vanbanchopheduyetpheduyet = async (req, res) => {
    let fileVanbanDen = await filedenService.checkFileById(req.query.id);


    let allXyLyVanBan = await filedenService.getAllUserDaXuLyVanBanByIdVanBanWithChucVu(req.query.id);

    let namefileworld = fileVanbanDen.name;



    res.render('user/vanbanchopheduyetpheduyet.ejs', { user: req.user, fileVanbanDen, allXyLyVanBan });
}

let postVanBanChoPheDuyetPheduyetYes = async (req, res) => {
    var idVB = req.query.id;


    var today = new Date();

    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var dateTime = date + ' ' + time;

    var userXuLyVb = {
        id_user: req.user.id,
        id_base_document: idVB,
        hanh_dong: "yes",
        thoi_gian: dateTime,

    }

    var updateXuLyVanBan = await filedenService.addUserXulyVanBan(userXuLyVb)
    var vbPheduyet = await filedenService.checkFileById(idVB);

    //  console.log(vbPheduyet)
    if (vbPheduyet != null) {
        var idChuVUCanPheDuyet = await filedenService.checkIdChucVUCanPheDuyet(vbPheduyet.id_category);
        // console.log(idChuVUCanPheDuyet);
        if (idChuVUCanPheDuyet[idChuVUCanPheDuyet.length - 1] == req.user.chuc_vu) {
            var updatTrangThai = await filedenService.UpDateTrangThaiDocumment("1", idVB)

            req.flash('messages', "Hoàn Thành Phê Duyệt");
        } else {
            req.flash('messages', "Phê duyệt văn bản thành công");
        }
    }

    res.redirect("/vanbanden/vanbanchopheduyet")

}

let postVanBanChoPheDuyetPheduyetNo = async (req, res) => {

    var idVB = req.query.id;

    var today = new Date();

    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var dateTime = date + ' ' + time;

    var userXuLyVb = {
        id_user: req.user.id,
        id_base_document: idVB,
        hanh_dong: "no",
        thoi_gian: dateTime,

    }

    req.flash('messages', "Không duyệt văn bản");

    var getAllUserXuLyVB = await filedenService.getAllUserDaXuLyVanBanByIdVanBan(idVB);
    var lasdId = getAllUserXuLyVB[getAllUserXuLyVB.length - 1].id;

    var getAllUserXuLyVB = await filedenService.deleteIdXulyVB(lasdId);
    // var updatTrangThai = await filedenService.UpDateTrangThaiDocumment("2", idVB)
    // var updateXuLyVanBan = await filedenService.addUserXulyVanBan(userXuLyVb)

    res.redirect("/vanbanden/vanbanchopheduyet")
}

let vanBanDaPheDuyet = async (req, res) => {
    //var vanbanchophanloai = await filedenService.getVanBanChoPhanLoai();
    var vanbandapheduyet = await filedenService.vanBanDaPheDuyet();
    const message = req.flash('messages');
    var allvanban = [];
    for (let i = 0; i < vanbandapheduyet.length; i++) {
        var vanban = {
            name: vanbandapheduyet[i].name,
            id: vanbandapheduyet[i].id,
            nguoi_gui_den: vanbandapheduyet[i].nguoi_gui_den,
            category: vanbandapheduyet[i].category,
            trang_thai: (vanbandapheduyet[i].trang_thai == 1) ? "Đã Duyệt" : "Không Duyệt"
        }
        allvanban.push(vanban);

    }
    res.render("user/vanbandapheduyet.ejs", {
        vanBanDaPheDuyet: allvanban,
        user: req.user,
        message: message
    })

}
let xoaVanBanDen = async (req, res) => {
    try {
        let file = await filedenService.deleteFile(req.body.id);
        return res.status(200).json({
            'message': 'success'
        })

    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }

}

let getXemVanBan = async (req, res) => {

    let fileVanbanDen = await filedenService.checkFileById(req.query.id);


    let allXyLyVanBan = await filedenService.getAllUserDaXuLyVanBanByIdVanBanWithChucVu(req.query.id);


    let namefileworld = fileVanbanDen.name;

    // const extractor = new WordExtractor();
    // const extracted = extractor.extract("../Project2/uploads/" + namefileworld);
    // extracted.then(function (doc) {
    //     var fileVanBan = {
    //         id: fileVanbanDen.id,
    //         name: fileVanbanDen.tenvb,
    //         nguoi_gui_den: fileVanbanDen.nguoi_gui_den,
    //         id_category: fileVanbanDen.id_category,
    //         contentvb: doc.getBody(),
    //     }

    res.render("user/xemvb", { user: req.user, fileVanbanDen, allXyLyVanBan });

    //  });
}

let postTimKiemVanBan = async (req, res) => {

   // console.log(req.body);

    var vanBanChoPheDuyet = [];
    
    if(req.body.ten_vb!=null)
    {
        var allFileDenByName= await filedenService.getVanBanDenByName(req.body.ten_vb);
        
        console.log(allFileDenByName);
        vanBanChoPheDuyet = allFileDenByName;
    }
    res.render("user/timkiemvanban", { user: req.user, vanBanChoPheDuyet });

}
let timkiemvanban = async (req, res) => {

    var vanBanChoPheDuyet = [];

    res.render("user/timkiemvanban", { user: req.user, vanBanChoPheDuyet });

}
module.exports = {
    themvanbanden: themvanbanden,
    themvanbandentc: themvanbandentc,
    vanbanchophanloai: vanbanchophanloai,
    vanbanchophanloaiphanloai: vanbanchophanloaiphanloai,
    postvanbanchophanloaiphanloai: postvanbanchophanloaiphanloai,
    vanbanchopheduyet: vanbanchopheduyet,
    vanbanchopheduyetpheduyet: vanbanchopheduyetpheduyet,
    postVanBanChoPheDuyetPheduyetYes: postVanBanChoPheDuyetPheduyetYes,
    postVanBanChoPheDuyetPheduyetNo: postVanBanChoPheDuyetPheduyetNo,
    vanBanDaPheDuyet: vanBanDaPheDuyet,
    xoaVanBanDen: xoaVanBanDen,
    getXemVanBan: getXemVanBan,
    timkiemvanban: timkiemvanban,
    postTimKiemVanBan: postTimKiemVanBan,
}