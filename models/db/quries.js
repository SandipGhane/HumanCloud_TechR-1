const findOneByID = async(Model,profileID) => {
    Model.findOne(profileID);
}
module.exports = {
    findOneByID
}