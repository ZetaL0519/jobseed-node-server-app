import ApplyModel from "./apply-model.js";
import JobModel from '../jobs/jobs-model.js';

export const findAllApplys = () => ApplyModel.find().populate("job").populate("applyBy").exec();

export const createApplyByUser = (uid, jid) => ApplyModel.create({applyBy: uid, job: jid});

export const deleteApply = (uid, jid) => ApplyModel.deleteOne({applyBy: uid, job: jid});

export const findAllApplyByUser = (uid) => ApplyModel.find({applyBy: uid}).populate("job").exec();

export const findAllUserApplysJob = (jid) => ApplyModel.find({job: jid}).populate("applyBy").exec();