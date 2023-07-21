const express = require("express");
const router = express.Router();

const appController = require("../controllers/app.controller");

router.get("/clients", appController.getClients);
router.get("/:clientId/projects", appController.getClientProjects);

module.exports = router;
