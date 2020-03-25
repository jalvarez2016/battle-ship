//Random Number Generator
function generateHash() {
  return Math.random().toString(36).substring(7);
}

export default generateHash;