const crypto = require('crypto');

const createHash = (id) => crypto.createHash('md5').update(id).digest('hex');

module.exports = {
    createHash
}