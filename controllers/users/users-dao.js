import usersModel from "./users-model.js";

export const findUsers = () => usersModel.find();

export const createUser = (user) => usersModel.create(user);

export const deleteUser = (uid) => usersModel.deleteOne(uid);

export const updateUser = (uid, user) => usersModel.updateOne(uid, user)

export const findUserByUsername = (username) => usersModel.findOne(username)