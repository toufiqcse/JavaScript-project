//location object
const locationObj =
    [ { name: 'Hoper Hat', distance: 14 },
    { name: 'Pathan para', distance: 58 },
    { name: 'Chowmohoni', distance: 20 },
    { name: 'Location 4', distance: 77 },
    { name: 'Location 5', distance: 66 },
    { name: 'Location 6', distance: 82 },
    { name: 'Location 7', distance: 42 },
    { name: 'Location 8', distance: 67 },
    { name: 'Location 9', distance: 42 },
    { name: 'Hitchmi', distance: "14km" } ];
const closestLocation = locationObj.reduce(
    ( position, location ) =>
        position.distance < location.distance
            ? position
            : location
);
console.log( closestLocation );