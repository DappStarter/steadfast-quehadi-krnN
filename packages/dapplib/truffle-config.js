require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn purchase install clip blue simple'; 
let testAccounts = [
"0x0177fca73c88833c75cf5654ebd009828c25fccfcafd0cd767d82c8c82c43119",
"0xd2379ffc4870e67852affc78a15084478042356d26fa761075be406ca645000f",
"0xbc6985abb2a61628e382c7f2be41eafffc2ca78821a4fb6cb62cf3da42969b43",
"0xe8dc0dea190b9a12237d4b394681595d5ef6eb4574d666f2797a6446373fea87",
"0x707390bddd33d26d2a3bd090172a826adb58667bd0b5fbae0c996e458b6cda85",
"0x6bfb36b35de6716c7738ad26a40a15fb0182e2ead38b16980b6b78b962bd6da0",
"0xe5f6fc32cfc44feba0f1d62bfa2c7318a3998e2e417b2a18072fd8c64db7064c",
"0xd3ed708a09c1835eb106608977f4b895d42932bd46170c2f8227b7da6dcd4aa2",
"0xc1f7ab482be82b524c33def51d8a39bdd85226dbc9610f8df2f8f390f627e963",
"0xfce579be9c32680adaae9d58b0ee245efcdd3fa0c8e61a7456a2aa384e7e51ef"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

