# eth-crypto-local

Browserifies the stuff in main.js into bundle.js which can be used within browsers

## Usage

1. Install node and npm

2. Clone this repo and navigate to the directory

3. Run: npm install

4. Install browserify globally with: npm install -g browserify

5. Run: browserify main.js -s freeverse -o bundle.js

6. Copy the newly created bundle.js and reference it in the html of your webapp

7. Call: freeverse.decrypt(encryptedWeb3) in client-side javascript, where *encryptedWeb3* is the encrypted web3 address passed by the Freeverse webmarket as a URL parameter
