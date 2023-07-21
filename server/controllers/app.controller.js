const postgre = require("../database");

const appController = {
  //get all clients
  getClients: async (req, res) => {
    try {
      const { rows } = await postgre.query("SELECT * FROM public.client_t");
      res.json(rows);
    } catch (error) {
      console.error(error);
    }
  },

  //get all client`s projects
  getClientProjects: async (req, res) => {
    const { clientId } = req.params;
    try {
      const products = await postgre.query(
        "SELECT * FROM public.project_num_t WHERE id_dep_client = $1",
        [clientId]
      );
      res.json(products.rows);
    } catch (error) {
      console.error(error);
    }
  },

  //create project
  createProject: async (req, res) => {
    const { clientId } = req.params;
    const { id, id_project } = req.body;
    console.log("data: ", data);
    try {
      const newProject = await postgre.query(
        `INSERT INTO project_num_t (id, id_dep_client, id_project) VALUES($1,$2,$3)`,
        [id, clientId, id_project]
      );
      res.json(newProject);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = appController;
