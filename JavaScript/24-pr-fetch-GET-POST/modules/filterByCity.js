import { populateListings } from "./populateListings";
const vilniusButton = document.querySelector("#vilniusButton");

const filterByCity = (listings) => {
  const filterByVilnius = () => {
    const vilnius = listings.filter((listing) => listing.city === "Vilnius");
    populateListings(vilnius);
  };

  vilniusButton.addEventListener("click", filterByVilnius);
};
export { filterByCity };
