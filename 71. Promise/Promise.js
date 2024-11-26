const promise = new Promise((resolve, reject) => {
  // Do something async here
  if (greatSuccess) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});

promise
  .then((Success) => {
    console.log("Yay!", Success);
  })

  .catch((err) => {
    console.log("Oh no!", err);
  });
