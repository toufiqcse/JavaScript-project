// @ts-nocheck
const addToLocalDb = (id) => {
  let itemInfo;
  //get the item info
  const storedCart = localStorage.getItem("item-information");
  if (storedCart) {
    itemInfo = JSON.parse(storedCart); // convert string to number
  } else {
    itemInfo = {};
  }
  //check qty
  // add qty
  const quantity = itemInfo[id];
  if (quantity) {
    const newQty = quantity + 1;
    itemInfo[id] = newQty;
  } else {
    itemInfo[id] = 1;
  }
  //set the item to localStorage
  localStorage.setItem("item-information", JSON.stringify(itemInfo));
};
const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("item-information");
  if (storedCart) {
    const itemInfo = JSON.parse(storedCart);
    if (id in itemInfo) {
      delete itemInfo[id];
      localStorage.setItem("item-information", JSON.stringify(itemInfo));
    }
  }
};
const deleteCart = () => {
  localStorage.removeItem("item-information");
};
export { addToLocalDb, removeFromDb, deleteCart };
