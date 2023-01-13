const addToStorages = (id) => {
  let userInformations;
  //
  const storedInformation = localStorage.getItem("user-informations");
  if (storedInformation) {
    userInformations = JSON.parse(storedInformation);
  } else {
    userInformations = {};
  }

  const quantity = userInformations[id];
  if (quantity) {
    const newQty = quantity + 1;
    userInformations[id] = newQty;
  } else {
    userInformations[id] = 1;
  }
  //set the user
  localStorage.setItem("user-informations", JSON.stringify(userInformations));
};
const removeFromStorage = (id) => {
  const storedInformation = localStorage.getItem("user-informations");
  if (storedInformation) {
    const userInformations = JSON.parse(storedInformation);
    if (id in userInformations) {
      delete userInformations[id];
      localStorage.setItem(
        "user-informations",
        JSON.stringify(userInformations)
      );
    }
  }
};
export { addToStorages, removeFromStorage };
