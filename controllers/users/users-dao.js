import usersModel from "./users-model.js";



export const findUsers = async () => await usersModel.find();

export const findAllUsers = async () => await usersModel.find()

export const findUserByUsername = async (username) => await usersModel.findOne({username})

export const findUserByCredentials = async (username, password) =>
    await usersModel.findOne({username, password})

export const createUser = async (user) => await usersModel.create(user);

export const deleteUser = async (uid) => await usersModel.deleteOne({_id: uid});

export const updateUser = async (uid, user) => await usersModel.updateOne({_id: uid}, {$set: user})

// export const findUserByUsername = (username) => usersModel.findOne(username)





