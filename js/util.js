"use strict";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const getRandomKWs = () => {
  let keyWordBank = ["funny", "scary", "true", "meme", "photo"];
  return [
    keyWordBank.splice(getRandomInt(0, keyWordBank.length), 1)[0],
    keyWordBank.splice(getRandomInt(0, keyWordBank.length), 1)[0],
  ];
};
