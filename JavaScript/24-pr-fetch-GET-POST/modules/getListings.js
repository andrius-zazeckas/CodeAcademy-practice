const getListings = async () => {
  try {
    const response = await fetch("https://robust-safe-crafter.glitch.me");

    const listings = await response.json();

    return listings;
  } catch (error) {
    console.error(error);
  }
};

export { getListings };
