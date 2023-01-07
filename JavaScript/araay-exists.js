function megaFriend(friends) {
  //check the insert input array or not
  if (Array.isArray(friends) == false) {
    return " Please prove array";
  }
  let mega = friends[0];
  for (const friend of friends) {
    if (friend.length > mega.length) {
      mega = friend;
    }
  }
  return mega;
}
const friends = ["Alim", "Akbar", "Abrar hasan"];
const myBigBuddy = megaFriend(friends);
// console.log(myBigBuddy);

if (friends.indexOf("Alim") != -1) {
  //   console.log("Alim Exists");
}

if (friends.includes("Alim")) {
  console.log("Alim is included");
}
