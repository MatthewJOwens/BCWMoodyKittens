/**
 * Stores the list of kittens
 * @type {Kitten[]}
 */
let kittens = [];
/**
 * Called when submitting the new Kitten Form
 * This method will pull data from the form
 * use the provided function to give the data an id
 * you can use robohash for images
 * https://robohash.org/<INSERTCATNAMEHERE>?set=set4
 * then add that data to the kittens list.
 * Then reset the form
 */
function addKitten(event) {
  event.preventDefault();
  const newKittenName = event.target.name.value;
  const newKittenImg = "https://www.robohash.org/set_set4/" + newKittenName + "?size=150x150";
  const newKittenId = generateId();
  const newKittenAffection = 5;
  const newKittenMood = "Tolerant";
  const newKitten = {
    id: newKittenId,
    name: newKittenName,
    img: newKittenImg,
    mood: newKittenMood,
    affection: newKittenAffection,
  };
  console.log(newKitten);
  kittens.push(newKitten);
  saveKittens();
  event.target.reset();
}

/**
 * Converts the kittens array to a JSON string then
 * Saves the string to localstorage at the key kittens
 */
function saveKittens() {
  window.localStorage.setItem('kittens', JSON.stringify(kittens));
  drawKittens();
}

/**
 * Attempts to retrieve the kittens string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the kittens array to the retrieved array
 */
function loadKittens() {
  const kittensData = JSON.parse(window.localStorage.getItem('kittens'));
  if (kittensData) {
    kittens = kittensData;
  }
}

/**
 * Draw all of the kittens to the kittens element
 */
function drawKittens() {
  loadKittens();
  let template = '';
  const kittenListElement = document.getElementById('kittens')

  kittens.forEach((kitten) => {
    template += `
      <div class="card bg-dark text-light m-1">
        <div class="kitten tolerant">
          <img src="${kitten.img}">
        </div>
        <p><strong>Name: </strong>${kitten.name}</p>
        <p><strong>Mood: </strong> ${kitten.mood}</p>
        <p><strong>Affection: </strong>${kitten.affection}</p>
        <div class="d-flex space-around">
        <button class="btn-cancel" onclick="pet(${kitten.id})">Pet</button>
        <button onclick="catnip(${kitten.id})">Catnip</button>
        </div>
      </div >
    `
  })
  kittenListElement.innerHTML = template;
}

/**
 * Find the kitten in the array by its id
 * @param {string} id
 * @return {Kitten}
 */
function findKittenById(id) {
  return kittens.find(k => k.id == id);
}

/**
 * Find the kitten in the array of kittens
 * Generate a random Number
 * if the number is greater than .7
 * increase the kittens affection
 * otherwise decrease the affection
 * save the kittens
 * @param {string} id
 */
function pet(id) {

}

/**
 * Find the kitten in the array of kittens
 * Set the kitten's mood to tolerant
 * Set the kitten's affection to 5
 * save the kittens
 * @param {string} id
 */
function catnip(id) {

}

/**
 * Sets the kittens mood based on its affection
 * Happy > 6, Tolerant <= 5, Angry <= 3, Gone <= 0
 * @param {Kitten} kitten
 */
function setKittenMood(kitten) {

}

function getStarted() {
  document.getElementById("welcome").remove();
  drawKittens();
}

/**
 * Defines the Properties of a Kitten
 * @typedef {{id: string, name: string, mood: string, affection: number}} Kitten
 */

/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
  return (
    Math.floor(Math.random() * 10000000) +
    "-" +
    Math.floor(Math.random() * 10000000)
  );
}
