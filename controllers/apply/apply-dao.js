import ApplyModel from "./apply-model.js";

export const findAllApplys = () => ApplyModel.find();

export const createApplyByUser = (uid, jid) => ApplyModel.create({applyBy: uid, job: jid});

export const deleteApply = (uid, jid) => ApplyModel.deleteOne({applyBy: uid, job: jid});

export const findAllApplyByUser = (uid) => ApplyModel.find({applyBy: uid}).populate("job").exec();