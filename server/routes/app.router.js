const express = require("express");
const router = express.Router();

const appController = require("../controllers/app.controller");

//get all clients
router.get("/clients", appController.getClients);
//get all projects of the client with given clientId
router.get("/:clientId/projects", appController.getClientProjects);
//create new project for the client with given clientId
router.post("/:clientId/projects", appController.createProject);

module.exports = router;
