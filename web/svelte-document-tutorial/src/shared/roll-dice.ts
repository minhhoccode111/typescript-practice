export async function rollDice(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Request failed"));
        return;
      }
      resolve(Math.floor(Math.random() * 6) + 1);
    }, 1000);
  });
}
