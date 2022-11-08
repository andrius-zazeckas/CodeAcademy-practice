// NodeJS - aplinka, kuri leidžia kurti serverius, nes pasiekia sistemą.
// NPM - paketų valdytojas/package manager, kuris leidžia įkelti kodo gabaliukus į projektą.

// nodemon - pastoviai paleidžia Node kodą net po išsaugojimų atnaujina.

const http = require("http"); // mūsų sistemoje kreipkis į http package.

/* 
 Importuok http biblioteka. Biblioteka = kodo gabaliukas su funkcionalumu
 http kintamasis dabar gali sukurti serverį, kuris aptarnaus (angl. serves) užklausas (angl. requests)
*/

const port = 5_000; // specifiška vieta, kurioje teikti užklausą. Tipiškai 3000, 5000.
const randomNumber = Math.round(Math.random());

// http.createServer sukuria ir grąžina serverį. Pasiekia užklausą (req) ir atsakymą (res)
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain"); // panašu, kaip JavaScripte su fetch

  // jei atsitiktinis numeris yra 1, grąžink error (klaidą)
  if (randomNumber) {
    res.statusCode = 403;
    res.end("Error! Something went wrong!");
  }

  res.statusCode = 200;

  res.end("Hello!!");
});

server.listen(port, () => {
  // nurodom portą, ties kuriuo bus klausomasi (laukiama užklausų)
  console.log(`Server is running ${randomNumber}.`);
});
