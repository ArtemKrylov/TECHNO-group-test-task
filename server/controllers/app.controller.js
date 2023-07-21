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
};

module.exports = appController;
