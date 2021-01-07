const crypto = require('crypto');
const { sign, verify } = require('jsonwebtoken');
const createHash = (id) => crypto.createHash('md5').update(id).digest('hex');

const jwtSign = async (payload, privateKey, expiresIn, algorithm) =>{ sign(
    { payload }, privateKey, { expiresIn, algorithm },
  );
}
const signJWT = (payload, privateKey, expiresIn, algorithm) => jwtSign(payload, privateKey, expiresIn, algorithm);
module.exports = {
    createHash,
    jwtSign,
    signJWT
}