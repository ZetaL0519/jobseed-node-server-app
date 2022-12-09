import CollectModel from "./collect-model.js";

export const findAllCollects = () => CollectModel.find().populate("job").populate("collectBy").exec();

export const createCollectByUser = (uid, jid) => CollectModel.create({collectBy: uid, job: jid});

export const deleteCollect = (uid, jid) => CollectModel.deleteOne({collectBy: uid, job: jid});

export const findOneCollect = (uid, jid) => CollectModel.findOne({collectBy: uid, job: jid}).populate("job").populate("collectBy").exec();

export const findAllCollectByUser = (uid) => CollectModel.find({collectBy: uid}).populate("job").exec();