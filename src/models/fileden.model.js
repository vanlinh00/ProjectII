const db = require('../config/database.config');

const File = function (user) {
    this.id = user.id_user;
    this.name = user.name_user;
    this.pass = user.pass_user;
    this.sdt = user.sdt_user;
    this.linkavt = user.linkavt_user;
    this.listidblock = user.list_id_block;
}
File.checkFileById = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query('SELECT * FROM base_document WHERE id = ?', id, (err, res) => {
                if (err) {
                    resolve(null);
                } else {
                    console.log('Check phone number successfully');
                    resolve(res);

                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};

File.addFileText = (datanew) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("INSERT INTO base_document SET ?", datanew, function (err, filetext) {
                if (err) {
                    resolve(null);
                } else {
                    resolve({ id: filetext.insertId, ...datanew });
                }
            });
        } catch (e) {
            resolve(null);
        }
    }));
};

File.getVanBanChoPhanLoai = (value) => {
    return new Promise((async (resolve, reject) => {

        try {
            db.query('SELECT * FROM base_document WHERE id_category = ?', value, (err, res) => {
                if (err) {

                    result(err, null);
                } else {

                    resolve(res);

                }
            })

        } catch (e) {
            reject(e);
        }
    }));
};

File.getVanBanChoPheDuyet = (id) => {
    return new Promise((async (resolve, reject) => {

        try {
            db.query('SELECT base_document.id_category AS id_category, base_document.ten_vb AS name, base_document.id AS id,  base_document.nguoi_gui_den AS nguoi_gui_den, base_document.noi_gui_den AS noi_gui_den, category.ten AS category FROM base_document JOIN category ON base_document.id_category = category.id WHERE trang_thai = ?', id, (err, res) => {
                if (err) {
                    resolve(null);
                } else {

                    resolve(res);

                }
            })

        } catch (e) {
            resolve(null);
        }
    }));
};
File.getVanBanChoPheDuyetByIdcategory = (id_category) => {
    return new Promise((async (resolve, reject) => {

        try {
            db.query(`SELECT base_document.ten_vb AS name, base_document.id AS id,  base_document.nguoi_gui_den AS nguoi_gui_den, base_document.noi_gui_den AS noi_gui_den, category.ten AS category FROM base_document JOIN category ON base_document.id_category = category.id WHERE id_category = '${id_category}' AND trang_thai ='${0}'`, (err, res) => {
                if (err) {
                    resolve(null);
                } else {

                    resolve(res);

                }
            })

        } catch (e) {
            resolve(null);
        }
    }));
};

File.upDateCategoryFileDen = (value, id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("UPDATE base_document SET id_category = ? WHERE id = ?", [value, id],
                (err, res) => {
                    if (err) {
                        resolve(null);
                    } else {

                        resolve(res);
                    }
                })

        } catch (e) {
            reject(e);
        }
    }));
};


File.UpDateTrangThaiDocumment = (value, id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("UPDATE base_document SET trang_thai = ? WHERE id = ?", [value, id],
                (err, res) => {
                    if (err) {
                        resolve(null);
                    } else {

                        resolve(res);
                    }
                })

        } catch (e) {
            reject(e);
        }
    }));
};
File.addXuLy = (datanew) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("INSERT INTO xu_ly SET ?", datanew, function (err, filetext) {
                if (err) {
                    resolve(null);
                } else {
                    resolve({ id: filetext.insertId, ...datanew });
                }
            });
        } catch (e) {
            resolve(null);
        }
    }));
};
File.checkIdChucVUCanPheDuyet=(id)=>{
    return new Promise((async (resolve, reject) => {

        try {
            db.query('SELECT list_id_chuc_vu_can_phe_duyet FROM category WHERE id = ?',id, (err, res) => {
                if (err) {

                  resolve(undefined);
                } else {

                    resolve(res);

                }
            })

        } catch (e) {
            reject(e);
        }
    }));
}
File.getAllUserDaXuLyVanBanByIdVanBan=(id)=>{
    return new Promise((async (resolve, reject) => {

        try {
            db.query('SELECT *FROM xu_ly WHERE id_base_document = ?',id, (err, res) => {
                if (err) {

                  resolve(undefined);
                } else {

                    resolve(res);

                }
            })

        } catch (e) {
            reject(e);
        }
    }));
}
File.addUserXulyVanBan=(datanew)=>{
    return new Promise((async (resolve, reject) => {
        try {
            db.query("INSERT INTO xu_ly SET ?", datanew, function (err, filetext) {
                if (err) {
                    resolve(null);
                } else {
                    resolve({ id: filetext.insertId, ...datanew });
                }
            });
        } catch (e) {
            resolve(null);
        }
    }));
}

File.vanBanDaPheDuyet = () => {
    return new Promise((async (resolve, reject) => {

        try {
            db.query(`SELECT base_document.trang_thai AS trang_thai, base_document.ten_vb AS name, base_document.id AS id,  base_document.nguoi_gui_den AS nguoi_gui_den, base_document.noi_gui_den AS noi_gui_den, category.ten AS category FROM base_document JOIN category ON base_document.id_category = category.id WHERE trang_thai !='${0}'`, (err, res) => {
                if (err) {
                    resolve(null);
                } else {

                    resolve(res);

                }
            })

        } catch (e) {
            resolve(null);
        }
    }));
};


File.allvanBanDen=()=>{
    return new Promise((async (resolve, reject) => {
        try {
            db.query('SELECT * FROM base_document', (err, res) => {
                if (err) {
                    resolve(null);
                } else {
                
                    resolve(res);

                }
            })
        } catch (e) {
            reject(e);
        }
    }));   
}


File.deleteFile = (id) => {
    //console.log(id);

    return new Promise((async (resolve, reject) => {
        try {
            db.query(`DELETE FROM base_document WHERE id = '${id}'`, (err, res) => {
                if (err) {
                    console.log('tai sao loi o day');
                } else {
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};
//  var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";


File.getAllUserDaXuLyVanBanByIdVanBanWithChucVu=(id)=>{
    return new Promise((async (resolve, reject) => {
//SELECT work.id as id,company.id as id_company, company.address as address_company FROM work JOIN company ON work.id_company = company.id
        try {
            db.query('SELECT xu_ly.id_base_document as id_base_document, xu_ly.hanh_dong as hanhdong, xu_ly.thoi_gian as thoi_gian , user.ho_ten as name_user, chuc_vu.name as chuc_vu_user FROM xu_ly JOIN user ON xu_ly.id_user = user.id JOIN chuc_vu ON user.chuc_vu = chuc_vu.id WHERE id_base_document = ?',id, (err, res) => {
                if (err) {

                  resolve(undefined);
                } else {

                    resolve(res);

                }
            })

        } catch (e) {
            reject(e);
        }
    }));
}

File.deleteIdXulyVB = (id) => {
    //console.log(id);

    return new Promise((async (resolve, reject) => {
        try {
            db.query(`DELETE FROM xu_ly WHERE id = '${id}'`, (err, res) => {
                if (err) {
                    console.log('tai sao loi o day');
                } else {
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};


module.exports = File;
