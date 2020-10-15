// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise((resolve) => {
    // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
    console.log(`...doubling ${num}. Please hold...`);
    setTimeout(() => {
      // 2. returns the double of the num
      resolve(num * 2);
    }, 2000);
  });
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  const a = await doublesLater(num);
  const b = await doublesLater(a);
  const c = await doublesLater(b);

  return a + b + c;
};

// 4. verification
handleSum(10).then((ans) => console.log(ans));
