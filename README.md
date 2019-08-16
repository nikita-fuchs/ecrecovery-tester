# ecrecovery-tester
NodeJS script for testing the new ec-recover feature of aeternity

this thing here 
1. generates an ethereum account, 
2. uses its private key to sign a message
3. dissects the signature into s, v and r values
4. puts these values back together to a signature
5. gets public key from signature
6. gets signer's address from signature

Run:
```
$ npm install
$ node index.js
```
