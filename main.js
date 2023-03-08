const EthCrypto = require('eth-crypto');

const bobPrivateKey = "0x15679c82bb59a8ae2e4d36a2fbe845af88df7e0462be716999f808162e454d46";

//const encryptedString = "b6cf9653b54d24df7a78f752917687e003c5eb86fcd7c46b173e62680a1562a497115ce64ebccaa968c45a471e24183b00bc7722f23684de9693a2a37fbc6b874c1faca097dcaae86172a671e9f7d8b7aa81cf1c4d6a0a708e23752b716a3b6e71f0f95e2d70b2fc77727530a5dfeb53d20900d6c7aab04a30120f00665aff955884cb0619b8eebbb5e0cb607c0935b717d7df644d23ebc9f7621b41550bb813f33fd75823fca50327e3fe264963b356e72da85e2140d664f8bf66c4b24c6762ce3b54cda0fbea20b4e8be14cbb00d29958db5f17affb8d451990b7e915655917c";

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
  const result = await decryptWithPrivateKey(input, bobPrivateKey);
  return result;
}

module.exports = decrypt;