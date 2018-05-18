const crypto = require('crypto');

/**
 * Middleware para configurar o iframe da webview.
 */
function setupIFrame(req, res, next) {
    let header;
    if (req.query.fb_iframe_origin === 'https://www.facebook.com/') {
        header = 'ALLOW-FROM https://www.facebook.com/';
    } else if (req.query.fb_iframe_origin === 'https://www.messenger.com/') {
        header = 'ALLOW-FROM https://www.messenger.com/';
    }
    if (header) res.setHeader('X-Frame-Options', header);
    next();
};


/**
 * Autentica request do facebook messenger
 * @param {Object} signed_request Provido pela API do messenger extensions.
 * @param {String} secret App Secret do aplicativo.
 */
function authMessengerUser (signed_request, secret) {
    // Parâmetros para verificação
    let signature = signed_request.split('.')[0];
    let payload = signed_request.split('.')[1];

    // Decodifica payload
    let payload = JSON.parse(Buffer.from(payload, 'base64').toString());
    
    // Codifica payload com sha256
    let hash = crypto.createHmac('sha256', secret)
        .update(payload)
        .digest('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/\=/g, '');

    const isValid = hash === signature;

    return { isValid, payload };
}

module.exports = { setupIFrame, authMessengerUser };