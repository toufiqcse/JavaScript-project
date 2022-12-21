// @ts-nocheck

const searchSport = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  //clear the search field
  searchField.value = "";
  if (searchText == "") {
    console.log("erooorrrr");
  } else {
    // load the data from the  API by the name
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySports(data));
    // // load data from the API by the event name
    // const eventUrl = `https://www.thesportsdb.com/api/v1/json/2/searchevents.php?e=Arsenal_vs_Chelsea`;
    // fetch(eventUrl)
    //   .then((response) => response.json())
    //   .then((eventData) => displayEvent(eventData));
  }
};

const displaySports = (playMember) => {
  //   console.log(playMember);
  const newPlayer = playMember.player;
  const tablebody = document.getElementById("table-body");
  tablebody.textContent = "";
  newPlayer.forEach((element) => {
    // console.log(element);
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td onclick = "anotherPage(${element.idPlayer})">${element.strPlayer}</td>
        <td onclick = "anotherPage(${element.idPlayer})"> <img src ="${element.strThumb}  "></a> </td>
    `;
    tablebody.appendChild(tr);
  });
};

const anotherPage = (playerId) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`;
  fetch(url)
    .then((res) => res.json())
    .then((playerData) => displayPlayerDetails(playerData.players[0]));
};

const displayPlayerDetails = (playerData) => {
  console.log(playerData);
  // document.write(playerData.dateBorn);
  // window.location = "player-details.html";
  const playerModalShow = document.getElementById("modalShow");
  playerModalShow.textContent = "";
  const div = document.createElement("div");
  div.classList.add("modal");
  // console.log(playerModalShow);
  div.innerHTML = `
  <div class="container mx-auto m">
        <div class="row">
            <div class="col-3">
            <div>
            
                <header>
                    <h6 id="player-name" class=" mt-4 mb-0 ">Name</h6>
                    <p id="player-name">${playerData.strPlayer}</p>
                </header>
                <div id="player-information" >
                    
                        <div class="mb-2">
                            <h5>Thumb</h5>
                            <img src ="${playerData.strThumb}">
                        </div>
                        <div class="mb-2">
                            <h5>User Rating</h5>
                            <p>${playerData.intLoved}</p>
                        </div>               
                        <div class="mb-2">
                            <h5>Born</h5>
                            <p>${playerData.dateBorn}</p>
                        </div>
                        <div class="mb-2">
                            <h5>Birth Place</h5>
                            <p>${playerData.strBirthLocation}</p>
                        </div>
                        <div class="mb-2">
                            <h5>Position</h5>
                            <p>${playerData.strPosition}</p>
                        </div>
                        <div class="mb-2">
                            <h5>Status</h5>
                            <p>${playerData.strStatus}</p>
                        </div>
                        <div class="mb-2">
                            <h5>Ethnicty</h5>
                            <p>${playerData.strEthnicity}</p>
                        </div>
                        <div class="mb-2">
                            <h5>Team Member</h5>
                            <p></p>
                        </div>
                        <div class="mb-2">
                            <h5>Height</h5>
                            <p>${playerData.strHeight}</p>
                        </div>
                        <div class="mb-2">
                            <h5>Weight</h5>
                            <p>${playerData.strWeight}</p>
                        </div>
                        <div class="mb-2">
                            <h5>Outfitter</h5>
                            <p>${playerData.strOutfitter}</p>
                        </div>
                        <div class="mb-2">
                            <h5>Kit</h5>
                            <p>${playerData.strKit}</p>
                        </div>
                        <div class="mb-2">
                            <h5>Agent</h5>
                            <p>${playerData.strAgent}</p>
                        </div>
                        <div class="mb-2">
                            <h5>Market Value</h5>
                            <p></p>
                        </div>
                        <div class="mb-2">
                            <h5>Player Manager ID</h5>
                            <p>${playerData.idPlayerManager}</p>
                        </div>
                        <div class="mb-2">
                            <h5>Sport</h5>
                            <p>${playerData.strSport}</p>
                        </div>
                        <div class="mb-2">
                            <h5>Team</h5>
                            <p>${playerData.strTeam}</p>
                        </div>
                        <div class="mb-2">
                            <h5>2nd  Team</h5>
                            <p>${playerData.idTeam2}</p>
                        </div>
                        <div class="mb-2">
                            <h5>League</h5>
                            <p></p>
                        </div>
                    
                </div>
            </div>
            <!-- Player Description -->
            <div class="col-9">
                <header>
                    <h5 class=" mt-4 text-center">Description</h2>
                </header>

                <div id="player-description">
                    <div>
                        <div class ="mx-5">
                           <p class="px-6 py-2">${playerData.strDescriptionEN}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 `;
  playerModalShow.appendChild(div);
};

// for player details
// // display event
// const displayEvent = (eventName) => {
//   // console.log(eventName);
//   const newEvent = eventName.event;
//   newEvent.forEach((eventElement) => {
//     // console.log(eventElement.strEvent);
//     const eventContainer = document.getElementById("event-player");
//     const div = document.createElement("div");
//     div.innerHTML = `
//     <p> ${eventElement.strEvent}</p>
//     `;
//     // eventContainer.appendChild(div);
//   });
// };
