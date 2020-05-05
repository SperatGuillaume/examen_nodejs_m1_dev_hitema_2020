const crypto = require('crypto');


function sha1Encode(data) {
    // To be implemented!
    let sha1Encode = crypto.createHash('sha1')
    sha1Encode.update(data)
    return sha1Encode.digest('hex')
}

module.exports.digestAuth = (request, response, next) => {
    // To be implemented!

    let authorization = request.headers.authorization;
    console.log('authorization', authorization);

    let encoded = authorization.replace('Basic', '');
    let decoded = Buffer.from(encoded, 'base64').toString('utf8');
    let auth = decoded.split(':');
    let isValid = auth[0] === 'node' && auth[1] === sha1Encode('password');

    isValid ? next() : response.sendStatus(401);
}