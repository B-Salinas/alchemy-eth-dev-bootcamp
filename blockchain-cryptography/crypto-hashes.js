// WEEK 1: BLOCKCHAIN CRYPTOGRAPHY
// CRYPTOGRAPHIC HASHES

// 1. Find Favorite Color
// BRUTE FORCE HASHING

const { sha256 } = required("ethereum-cryptography/sha256");
const { utf8ToBytes, toHex } = require("ethereum/cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

// given a hash, return the color that created the hash
function findColor(hash) {}

// --------------------------------------------------------------

// Comparing Two Hashes
const a = "apple";
const b = "banana";

const aBytes = utf8ToBytes(a);
const bBytes = utf8ToBytes(b);

const aHash = sha256(aBytes);
const bHash = sha256(bBytes);

console.log(toHex(aHash) === toHex(aHash)); // returns True
console.log(toHex(aHash) === toHex(bHash)); // returns False
console.log(toHex(bHash) === toHex(bHash)); // returns True
console.log(toHex(bHash) === toHex(aHash)); // returns False

module.exports = findColor;
