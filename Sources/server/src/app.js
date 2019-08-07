const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('config');

module.exports = (app, express) => {
  app.use(express.json({ limit: '100mb' }));
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
  app.use(bodyParser.json({ limit: '100mb' }));
  app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
  });
};
