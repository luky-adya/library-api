
module.exports = {
  DB: process.env.HOST ? process.env.HOST : 'mongodb+srv://admin:bebas@learnit-sandbox-1he4a.mongodb.net/learnit-react?retrywrites=true&w=majority',
  APP_PORT: process.env.PORT ? process.env.PORT : 80,
};
