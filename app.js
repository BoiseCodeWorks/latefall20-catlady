let cat = {
  name: "Mr. Snibbles",
  petCount: 0,
  moods: [
    {
      img: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_10,y_0/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg?itok=NB9DbGG9",
      status: "Happy"
    },
    {
      img: "https://media.istockphoto.com/photos/portrait-of-british-short-hair-blue-cat-with-yellow-eyes-picture-id866080898?k=6&m=866080898&s=612x612&w=0&h=WowvebXRpSx52wzJCDs_DD0FrOUCJE5c90nNJ329uIs=",
      status: "Irritated"
    },
    {
      img: "https://us.123rf.com/450wm/baggira/baggira1703/baggira170300027/75539553-a-ferocious-evil-cat-on-the-windowsill-on-the-street-angry-mistrustful-cussing-cat-the-cat-looks-mal.jpg?ver=6",
      status: "Bitey"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8rVyvIUPa2qZ1I-DaipSIjtjQaGuA3kTAmrsK7fLk85qn4qS",
      status: "Blood Thirsty"
    }

  ]
}

function petCat() {
  cat.petCount++
  drawCat()
}

//responsible for updating our cats mood every 2 seconds
function giveCatnip() {
  //first way to set up an interval
  // let intervalId = setInterval(function () { console.log("running") }, 1000)
  // console.log(intervalId)
  let time = 2
  //setInterval returns an Id unique to the interval that was just set
  let intervalId = setInterval(drawCatMood, 1000 * time)

  let clearIntervalHandler = function () {
    clearInterval(intervalId)
  }
  //using a setTimeout with clearInterval and the intervalId just created, you can stop the interval after x seconds
  setTimeout(clearIntervalHandler, 10000)
}

//returns random index within range of array length
function getRandomCatMoodIndex() {
  return Math.floor(Math.random() * cat.moods.length)
}

//returning random mood object from cats.mood array
function getRandomCatMood() {
  let index = Math.floor(Math.random() * cat.moods.length)
  let mood = cat.moods[index]
  return mood
}

function drawCatMood() {
  let catImageElem = document.getElementById("cat-img")
  let catStatusElem = document.getElementById("cat-status")
  let catMood = getRandomCatMood()
  console.log(catMood)
  // @ts-ignore ignoring this error because we know this is going on an image tag and has src attribute
  catImageElem.src = catMood.img
  catStatusElem.innerText = catMood.status

  //used this to get random index and access array with that index
  // let randomIndex = getRandomCatMoodIndex()
  // // console.log(randomIndex);
  // // @ts-ignore ignoring this error because we know this is going on an image tag and has src attribute
  // catImageElem.src = cat.moods[randomIndex].img
  // catStatusElem.innerText = cat.moods[randomIndex].status

  // if (cat.petCount > 5) {
  //   // @ts-ignore ignoring this error because we know this is going on an image tag and has src attribute
  //   catImageElem.src = cat.moods[1].img
  //   catStatusElem.innerText = cat.moods[1].status
  // } else {
  //   catImageElem.src = cat.moods[0].img
  //   catStatusElem.innerText = cat.moods[0].status
  // }
}



//draw is responsible for updating the clients page
function drawCat() {
  let catNameElem = document.getElementById("cat-name")
  let catPetCountElem = document.getElementById("cat-pets")

  catNameElem.innerText = `${cat.name} is a good cat`
  catPetCountElem.innerText = `Pet Count: ${cat.petCount}`
  drawCatMood()
}

drawCat()