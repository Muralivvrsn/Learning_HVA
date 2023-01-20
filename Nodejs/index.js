const { EventEmitter } = require("events");
const emitter = new EventEmitter();
answers = [];
questions = ["what is your name?", "what is your age?", "what's up?"];
emitter.on("answer", function (question) {
  if (answers.length < questions.length) {
    console.log(question);
    process.stdin.on("data", (data) => {
      let answer = data.toString().trim();
      answers.push(answer);
      console.log(`The answer is ${answer}`);
      emitter.emit("answer", questions[answers.length]);
    });
  } else {
    console.log(answers);
    process.exit();
  }
});
emitter.emit("answer", questions[0]);
