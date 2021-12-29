require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth pitch snake hidden arm army gate'; 
let testAccounts = [
"0x304188b8dbf57ef7790eb88b05185570e2c599b3981afe1b8e6b6634cc043ea9",
"0x378cfe992ae1b47e09abf051eaef8d0a958e3d89b2d02572042498932fc51acd",
"0x38caf6e4ee5085fbd6223b1725a4c66942f284d9b11407ad2cf9e5ff03b33355",
"0xa405db0409b2e40b79043bf8d09ac81f0e1ace744dadf1d27af3d649a8759b93",
"0xe9871902b297df9aea89435ec45bb1b9d854c084770c3b4e8d63d584e6aee120",
"0xaf475737976542a668e3df442026734662134fb7fbc79145daa66836e3bd5735",
"0x4cc98f2763e2dc25f446dffeb53d1bc54bf3edb279c4900ed445212a75356688",
"0x31afb79bd29affb663aec57d6be1ca712fd649641515b57b4a6ea5a46724cea9",
"0x978bee2600b0dcba878ef9db3b884b6dffc82d462a5addabda61ac4d5eb9bbbd",
"0x886c73da05072c6b8c82e76792a68eb1d52f47a6c067179c5be23022d538d919"
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

