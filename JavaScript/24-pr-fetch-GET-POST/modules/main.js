import { getListings } from "./getListings.js";
import { populateListings } from "./populateListings.js";

const showListings = async () => {
  const listings = await getListings();

  populateListings(listings);
};

showListings();
