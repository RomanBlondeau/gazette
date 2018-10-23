const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('config');

module.exports = (app, express) => {
  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
  });
};
