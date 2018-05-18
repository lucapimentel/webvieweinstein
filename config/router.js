const router = require("express").Router();
// const multipart = require('connect-multiparty')();

const controllers = require("../controller");


router.get('/agendamento', controllers.agendamento.agendamento);

router.get("*", (req, res) => {
  res.status(404);
  res.send("Error 404");
});

module.exports = router;
