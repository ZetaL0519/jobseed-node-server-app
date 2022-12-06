import CollectModel from "./collect-model.js";

export const findAllCollects = () => CollectModel.find();

export const createCollectByUser = (uid, jid) => CollectModel.create({collectBy: uid, job: jid});

export const deleteCollect = (uid, jid) => CollectModel.deleteOne({collectBy: uid, job: jid});

export const findAllCollectByUser = (uid) => CollectModel.find({collectBy: uid}).populate("job").exec();