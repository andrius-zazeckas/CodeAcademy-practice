export const renderHome = (req, res) => {
  const number = +req.query.number;

  const countdownNumber = +req.query.countdownNumber;

  const userIp =
    req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  res.render("index", {
    title: "code academy",
    pageName: "Home page",
    userIp,
    number,
    countdownNumber,
  });
};
