import FollowModel from "./follow-model.js";

export const createFollow = (company, uid) => FollowModel.create({...company, follower: uid})

export const deleteFollow = (fid) => FollowModel.deleteOne({_id: fid})

export const findFollowsByUid = (uid) => FollowModel.find({follower: uid})