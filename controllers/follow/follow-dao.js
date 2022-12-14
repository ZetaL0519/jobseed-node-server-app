import FollowModel from "./follow-model.js";

export const createFollow = (company, uid) => FollowModel.create({...company, follower: uid})

export const deleteFollow = (cid, uid) => FollowModel.deleteOne({companyId: cid, follower: uid})

export const findOneFollow = (cid, uid) => FollowModel.findOne({companyId: cid, follower: uid})

export const findFollowsByUid = (uid) => FollowModel.find({follower: uid}).populate("follower").exec();

export const findAllFollows = () => FollowModel.find().populate("follower").exec();