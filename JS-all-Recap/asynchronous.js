// //synchronous system
// const processOrder = (customer) => {
//   console.log(`Processing Order for ${customer}`);

//   const currentTime = new Date().getTime();
//   while (currentTime + 9000 >= new Date().getTime());
//   console.log("Order Processed for customer 1");
// };
// console.log(`Processing Order for customer`);
// processOrder("Toufiq");
// console.log(`completed Order for customer`);

// use asynchronously
const takeOrder = (customer, callback) => {
  console.log(`Take order for ${customer}`);
  callback(customer);
};
const processOrder = (customer, callback) => {
  console.log(`Processing Order for ${customer}`);

  setTimeout(() => {
    console.log("cocking Completed");
    console.log(`Order Processed for ${customer}`);
    callback(customer);
  }, 7000);
};

const CompeteOrder = (customer) => {
  console.log(`  Order completed for ${customer}`);
};

takeOrder("Customer -1", (customer) => {
  processOrder(customer, (customer) => {
    CompeteOrder(customer);
  });
});

console.log("non-blocking workings");

// for better readable code performance we will use Promise
const hasMeetings = false;
// const hasMeetings = true;

// create promise
const meetingPromise = new Promise((resolve, reject) => {
  //set condition to check promise is fulfilled
  if (!hasMeetings) {
    const time = new Date();
    const meetingDetails = {
      name: "Web Development Team",
      location: "Google Meet",
      time: time,
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting has already been"));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time} `;
  return Promise.resolve(calender);
};

// meetingPromise
//   .then(addToCalender)
//   .then((res) => {
//     console.log(res);
//   })
//   .then((res) => {})
//   .catch((err) => {
//     console.log(err.message);
//   });

//synchrounous theke asyn convert
//only use async function
// reduce the .then and .catch

async function mymeetings() {
  try {
    const meetingDetails = await meetingPromise;
    const calender = await addToCalender(meetingDetails);
    console.log(calender);
  } catch {
    console.log("Meeting has already been");
  }
}
mymeetings();
