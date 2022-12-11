import ApplyModel from "./apply-model.js";
import JobModel from '../jobs/jobs-model.js';

export const findAllApplys = () => ApplyModel.find().populate("job").populate("applyBy").exec();

export const createApplyByUser = (uid, jid) => ApplyModel.create({applyBy: uid, job: jid});

export const updateApply = (aid, apply) => ApplyModel.updateOne({_id: aid}, {$set: apply})

export const deleteApply = (uid, jid) => ApplyModel.deleteOne({applyBy: uid, job: jid});

export const deleteApplyById = (aid) => ApplyModel.deleteOne({_id: aid})

export const findOneApply = (uid, jid) => ApplyModel.findOne({applyBy: uid, job: jid}).populate("job").populate("applyBy").exec();

export const findAllApplyByUser = (uid) => ApplyModel.find({applyBy: uid}).populate("job").exec();

export const findAllUserApplysJob = (jid) => ApplyModel.find({job: jid}).populate("applyBy").exec();

export const acceptApply = (uid, jid) => ApplyModel.updateOne({applyBy: uid, job: jid},{$set: {accept: true}});

export const findAllAcceptedApplys = () => ApplyModel.find({accept: true}).populate("applyBy").populate("job").populate("postBy").exec()