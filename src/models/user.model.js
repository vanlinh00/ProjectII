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
User.addUser = (dataNew)=>{
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
module.exports = User;
