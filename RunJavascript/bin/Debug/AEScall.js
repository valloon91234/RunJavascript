var enteredText = "227500";
var _0x6722=["\x75\x37\x47\x75\x35\x70\x6F\x73\x76\x77\x44\x73\x58\x55\x6E\x56\x35\x5A\x61\x71\x34\x67\x3D\x3D","\x70\x61\x72\x73\x65","\x42\x61\x73\x65\x36\x34","\x65\x6E\x63"];
var rkEncryptionKey=CryptoJS[_0x6722[3]][_0x6722[2]][_0x6722[1]](_0x6722[0])		
var _0x283e=["\x35\x44\x39\x72\x39\x5A\x56\x7A\x45\x59\x59\x67\x68\x61\x39\x33\x30\x61\x55\x4B\x32\x77\x3D\x3D","\x70\x61\x72\x73\x65","\x42\x61\x73\x65\x36\x34","\x65\x6E\x63"];
var rkEncryptionIv=CryptoJS[_0x283e[3]][_0x283e[2]][_0x283e[1]](_0x283e[0])
var utf8Stringified = CryptoJS.enc.Utf8.parse(enteredText);
var encrypted = CryptoJS.AES.encrypt(utf8Stringified.toString(), rkEncryptionKey, 
{
	mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7, iv: rkEncryptionIv
});
var encryptedText = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
console.log(encryptedText);