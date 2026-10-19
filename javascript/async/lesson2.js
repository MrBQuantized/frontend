// Using Promise.all method() - useful for mutliple promises

// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("✅ Promise One Resolved!.");
//   }, 2000);
// });
// const promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("❌ Promise Two Rejected!.");
//   }, 1500);
// });

// Promise.all([promiseOne, promiseTwo])
// .then((data) => console.log(data[0], data[1]))
// .catch((error) => console.log(error))

// This returns only ther error

// Promise / Async-Await

const preHeatOven = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const preHeatOven = true;

      if (preHeatOven) {
        resolve("Preheat oven to 180deg");
      } else {
        reject("Failed Task!");
      }
    }, 1000);
  });
};

const addSugarAndChocoChips = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addChoco = true;

      if (addChoco) {
        resolve("Place butter and chocolate chips, stir until melted and smooth",);
      } else {
        reject("Failed Task!")
      };
    }, 1000);
  });
};

const addFlourCocoaAndSalt = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addFlour = true;

      if (addFlour) {
        resolve("Add flour, cocoa and salt and stir until smooth");
      } else {
        reject("Failed Task!");
      }
    }, 1000);
  });
};

const bakeMixture = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bakeMixture = true;

      if (bakeMixture) {
        resolve("Bake for 24 minutes ");
      } else {
        reject("Failed Task!");
      }
    }, 1000);
  });
};

const bakeChocolateBrownies = async () => {
  const taskOne = await preHeatOven();
  console.log(taskOne);

  const taskTwo = await addSugarAndChocoChips();
  console.log(taskTwo);

  const taskThree = await addFlourCocoaAndSalt();
  console.log(taskThree);

  const taskFour = await bakeMixture();
  console.log(taskFour);
  console.log("Enjoy your perfect Chocolate Brownies");
};

bakeChocolateBrownies();
