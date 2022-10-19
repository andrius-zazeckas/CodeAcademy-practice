// Organizuojate vestuves - pasiimkite informaciją iš "https://boiling-reaches-93648.herokuapp.com/week-3/wedding" ir atvaizduokite lentelėje: vardą, plusOne ir attending. Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-".

const getGuestList = async () => {
  try {
    const response = await fetch(
      "https://boiling-reaches-93648.herokuapp.com/week-3/wedding"
    );
    if (response.ok) {
      const guests = await response.json();
      const name = guests.name;
      console.log(name);
    }
  } catch (error) {
    console.error(error);
  }
};

// const guestTable = (guest) => {};

getGuestList();
