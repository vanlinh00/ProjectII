const db = require('../config/database.config');

const User = function (user) {
    this.id = user.id_user;
    this.name = user.name_user;
    this.pass = user.pass_user;
    this.sdt = user.sdt_user;
    this.linkavt = user.linkavt_user;
    this.listidblock = user.list_id_block;
}

User.get_all = () => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("SELECT * FROM user", function (err, user) {
                if (err) {
                    resolve(null);
                } else {
                    resolve(user);
                }
            });
        } catch (e) {
            reject(e);
        }
    }));
};

User.checkgmail_user = (gamil) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query('SELECT * FROM user WHERE email = ?', gamil, (err, res) => {
                if (err) {
                    //   console.log('Error check phone number', err);
                    resolve(err, null);
                } else {
                    //   console.log('Check phone number successfully');
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};
User.checkuserbyid = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query('SELECT * FROM user WHERE id = ?', id, (err, res) => {
                if (err) {
                    //    console.log('Error check phone number', err);
                    resolve(null)
                } else {
                    //  console.log('Check phone number successfully');
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};
User.addUser = (dataNew) => {
    console.log("vao duoc model")
    return new Promise((async (resolve, reject) => {
        try {
            db.query("INSERT INTO user SET ?", dataNew, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    resolve({ id: data.insertId, ...dataNew });
                }
            });
        } catch (e) {
            resolve(null);
        }
    }));
}
User.deleteAllUser = (id) => {
    //console.log(id);

    return new Promise((async (resolve, reject) => {
        try {
            db.query(`DELETE FROM user WHERE id_phong_ban = '${id}'`, (err, res) => {
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
User.deleteUser = (id) => {
    //console.log(id);
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`DELETE FROM user WHERE id = '${id}'`, (err, res) => {
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
User.getInforUserById = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`SELECT user.id as id,  user.ho_ten as ho_ten, user.password as password, user.email as email, chuc_vu.name as chuc_vu, phong_ban.ten_phong as ten_phong  FROM user JOIN chuc_vu ON user.chuc_vu = chuc_vu.id JOIN phong_ban ON user.id_phong_ban = phong_ban.id WHERE user.id = '${id}'`, (err, res) => {
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
}
// User.editInforUserById= (ho_ten,password,id)=>{
//     return new Promise((async (resolve, reject) => {
//         try {
//             db.query(`UPDATE user SET ho_ten = '${ho_ten}', passsword ='${password}' WHERE id = '${id}'`,
//                 (err, res) => {
//                     if (err) {
//                         resolve(null);
//                     } else {

//                         resolve(res);
//                     }
//                 })

//         } catch (e) {
//             reject(e);
//         }
//     }));
// }

User.editInforUserById = (ho_ten, password, id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query("UPDATE user SET ho_ten = ?, password = ? WHERE id = ?", [ho_ten, password, id],
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
}

User.editInforUserByIdForAdmin = (ho_ten, ngay_sinh, goi_tinh, email, password, id) => {
    // User.editInforUserByIdForAdmin(userInfor.ho_ten, userInfor.ngay_sinh, userInfor.goi_tinh,userInfor.email, userInfor.password,idUser);
    return new Promise((async (resolve, reject) => {
        try {
            db.query("UPDATE user SET ho_ten = ?, ngay_sinh = ? ,goi_tinh =?, email=? , password = ? WHERE id = ?", [ho_ten,ngay_sinh,goi_tinh,email, password, id],
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
}
module.exports = User;
