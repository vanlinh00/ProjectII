var roomModel = require('../models/roomModels')
let addRoom = async (newRoom) => {
    return new Promise((async (resolve, reject) => {
        try {
            let room = await roomModel.addRoom(newRoom);
            console.log(room);

            if (room != null) {
                resolve(room);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            resolve(null);
        }
    }));

}
let getAllRoom = () => {
    return new Promise((async (resolve, reject) => {
        try {
            let allRoom = await roomModel.getAllRoom();
            console.log("khong in ra gi a 2");
   console.log(allRoom);
            if (allRoom != undefined) {
                if (allRoom.length != 0) {
                    resolve(allRoom);
                }else{
                    resolve([]);
                }
            }
            else {
                resolve([]);
            }
        } catch (e) {
            resolve(null);
        }
    }));
};
let getUserByIdRoom=(id)=>{
    return new Promise((async (resolve, reject) => {
        try {
            let allUserInRoom = await roomModel.getUserByIdRoom(id);
            if (allUserInRoom!=null) {
                resolve(allUserInRoom);
            } else {
                resolve(null);
            }

        } catch (e) {
            resolve(null);
        }
    }));
}
let deleteRoom=(id)=>{
    return new Promise((async (resolve, reject) => {
        try {
            let room = await roomModel.deleteRoom(id);
            if (room!=null) {
                resolve(true);
            } else {
                resolve(null);
            }

        } catch (e) {
            resolve(null);
        }
    }));
}
let getRoomById= (id)=>{
    return new Promise((async (resolve, reject) => {
        try {
            let room = await roomModel.getRoomById(id);
            if (room!=null) {
                resolve(room[0]);
            } else {
                resolve(null);
            }

        } catch (e) {
            resolve(null);
        }
    }));
}
let editRoomByid=(room,IdRoom)=>{
    return new Promise((async (resolve, reject) => {
        try {
            let user = await roomModel.editRoomByid(room.ma_phong,room.ten_phong,room.so_can_bo,room.dia_chi,room.id_truong_phong,room.sdt_phong,IdRoom);
            if (user!=null) {
                resolve(true);
            } else {
                resolve(null);
            }

        } catch (e) {
            resolve(null);
        }
    }));
}

module.exports = {
    addRoom: addRoom,
    getAllRoom: getAllRoom,
    getUserByIdRoom:getUserByIdRoom,
    deleteRoom:deleteRoom,
    getRoomById:getRoomById,
    editRoomByid:editRoomByid
}