const EthCrypto = require('eth-crypto');

const pvk = "<insert the private key provided by Freeverse here>";

// decrypts a string that was encrypted for a given publicKey
const decryptWithPrivateKey = async (encryptedString, privateKey) => {
  // converting the encypted String into an encrypted object
  const encryptedObject = EthCrypto.cipher.parse(encryptedString);
  // decrypt the en encrypted object with the private key
  const decrypted = await EthCrypto.decryptWithPrivateKey(
    privateKey,
    encryptedObject,
  );
  return decrypted;
};

// Start function
const decrypt = async function(input) {
  const result = await decryptWithPrivateKey(input, pvk);
  return result;
}

module.exports = decrypt;
