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
    const { id_dep_client } = req.params;
    try {
      const products = await postgre.query(
        "SELECT * FROM public.project_num_t WHERE id_dep_client = $1",
        [id_dep_client]
      );
      res.json(products.rows);
    } catch (error) {
      console.error(error);
    }
  },

  //get clients by project`s id
  getClientProjects: async (req, res) => {
    const { clientId: id_dep_client } = req.params;
    try {
      const clients = await postgre.query(
        "SELECT * FROM public.project_num_t WHERE id_dep_client = $1",
        [id_dep_client]
      );
      res.json(clients.rows);
    } catch (error) {
      console.error(error);
    }
  },

  //create project
  createProject: async (req, res) => {
    const { clientId: id_dep_client } = req.params;
    const { id_project } = req.body;
    try {
      const newProject = await postgre.query(
        `INSERT INTO project_num_t (id_dep_client, id_project) VALUES($1,$2) RETURNING *`,
        [id_dep_client, id_project]
      );

      res.json(newProject.rows[0]);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = appController;
