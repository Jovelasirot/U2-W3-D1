class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  same(owner) {
    if (this.ownerName === owner.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const petInput = document.getElementById("petName");
const ownerInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

const saveButton = document.querySelector("form button");

const animals = [];

const fillRowWithCards = () => {
  const row = document.getElementById("animals");

  row.innerHTML = "";

  animals.forEach((animal) => {
    const newCard = document.createElement("div");
    newCard.classList.add("col");

    newCard.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${animal.petName} of ${animal.ownerName}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">Type of animal:        ${animal.species}</h6>
                  <h6 class="card-subtitle mb-2 text-body-secondary">Race:      ${animal.breed}</h6>
              </div>
          </div>
          `;

    row.appendChild(newCard);
  });

  petInput.value = "";
  ownerInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";
};

const formReference = document.getElementsByTagName("form")[0];
formReference.addEventListener("submit", (e) => {
  e.preventDefault();

  const userInput = new Pet(
    petInput.value,
    ownerInput.value,
    speciesInput.value,
    breedInput.value
  );

  animals.push(userInput);

  fillRowWithCards();
});
