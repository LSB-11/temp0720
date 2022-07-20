const family = ["아빠", "엄마", "실비"]
const info = {
  userName: "이자룡",
  job: "싸피최강",
  isMarriged: true,
  family: family,
  myStack: {
    frontEnd: "vue.js",
    backEnd:"node.js"
  },
  add: function(a, b) {
    return a + b;
  },
};

console.log(info.userName);

console.log(info.family[1]);
console.log(info.myStack.frontEnd);
console.log(info.add(4, 3));