import { populateListings } from "./populateListings";

const filterByCity = (listings) => {
  const vilniusButton = document.querySelector("#vilniusButton");

  const filterByVilnius = () => {
    const vilnius = listings.filter((listing) => listing.city === "Vilnius");
    populateListings(vilnius);
  };

  vilniusButton.addEventListener("click", filterByVilnius);
};
export { filterByCity };
