const items = [
  { productName: "Tamsios spalvos akiniai" },
  { productName: "Sviesios spalvos akiniai" },
  { productName: "Zalios spalvos akiniai" },
  { productName: "Geltoni akiniai" },
];

const getConcatinatedItems = () => {
  const initialValue = "";
  const concatinatedString = items.reduce(
    (previousValue, currentValue) =>
      `${previousValue} ${currentValue.productName.split(" ")[0]}`,
    initialValue
  );

  return concatinatedString;
};

console.log(getConcatinatedItems());
