// this thing here 
// 1. generates an ethereum account, 
// 2. uses its private key to sign a message
// 3. dissects the signature into s, v and r values
// 4. puts these values back together to a signature
// 5. gets public key from signature
// 6. gets signer's address from signature

const EthCrypto = require('eth-crypto');

const identity = EthCrypto.createIdentity();
    console.log("Identity:", identity);

const message = 'foobar';

// sign a message with private key
console.log("Signing message with private key..")
const messageHash = EthCrypto.hash.keccak256(message);
const signature = EthCrypto.sign(
      identity.privateKey, // privateKey
      messageHash // hash of message
  ); 

  console.log("Signature", signature);

// Get v, r and s from Signature
console.log("Splitting signature into v, r and s...");
const vrs = EthCrypto.vrs.fromString(signature);
console.log("v, r and s: ", vrs);

// combine v, r and s to signature
console.log("Combining v, r and s to signature...");
const assembledSignature = EthCrypto.vrs.toString(vrs);
console.log("Here is the combined signature again: ", assembledSignature);

// get publicKey from signature
console.log("getting public key from signature..")
const signerPubkey = EthCrypto.recoverPublicKey(
    assembledSignature, // signature
    EthCrypto.hash.keccak256('foobar') // message hash
)
    console.log("Signer's public key: ", signerPubkey)

// get signer's address
console.log("Getting signer's address..")
const signerAddress = EthCrypto.recover(
    assembledSignature,
    EthCrypto.hash.keccak256('foobar') // signed message hash
);

    console.log("Signer's address: ", signerAddress);