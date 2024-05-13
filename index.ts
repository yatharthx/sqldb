import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "sqldb > ",
});

rl.prompt();

rl.on("line", (line) => {
  const cmd = line.trim();

  switch (cmd) {
    case ".exit":
      rl.close();
      break;
    default:
      console.log(`Unrecognized command: ${cmd}`);
      rl.prompt();
  }
}).on("close", () => {
  process.exit(0);
});

