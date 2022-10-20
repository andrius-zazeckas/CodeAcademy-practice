// Organizuojate vestuves - pasiimkite informaciją iš "https://boiling-reaches-93648.herokuapp.com/week-3/wedding" ir atvaizduokite lentelėje: vardą, plusOne ir attending. Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-".

const getGuestList = async () => {
  try {
    const response = await fetch(
      "https://boiling-reaches-93648.herokuapp.com/week-3/wedding"
    );
    if (response.ok) {
      const guests = await response.json();

      return guests;
    }
  } catch (error) {
    console.error(error);
  }
};

const tableElement = document.querySelector("#guest-list");

const addRow = (guest) => {
  const nameColumn = document.createElement("td");
  const plusOneColumn = document.createElement("td");
  const atttendingColumn = document.createElement("td");
  const rowElement = document.createElement("tr");

  nameColumn.textContent = guest.name;
  plusOneColumn.textContent = guest.plusOne ? "+" : "-";
  atttendingColumn.textContent = guest.attending ? "+" : "-";

  rowElement.append(nameColumn, plusOneColumn, atttendingColumn);
  tableElement.append(rowElement);
};

const populateTable = async () => {
  const guest = await getGuestList();

  guest.forEach((guest) => addRow(guest));
};

populateTable();
