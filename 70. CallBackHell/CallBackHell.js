setTimeout(() => {
  console.log("5 seconds in the future");
  setTimeout(() => {
    console.log("10 seconds in the future");
    setTimeout(() => {
      console.log("15 seconds in the future");
      setTimeout(() => {
        console.log("20 seconds in the future");
      }, 5000);
    }, 5000);
  }, 5000);
}, 5000);
