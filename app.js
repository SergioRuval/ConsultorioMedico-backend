require('dotenv').config();
const Server = require('./models/server');
/*const session    = require("express-session");
const MongoStore = require('connect-mongo')(session);
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('./models/usuario')

app.use(session({
    secret: "our-passport-local-strategy-app",
    store: new MongoStore( { mongooseConnection: mongoose.connection }),
    resave: true,
    saveUninitialized: true,
  }));

app.use(passport.initialize());

passport.serializeUser((user, cb) => {
    cb(null, user._id);
  });
  passport.deserializeUser((id, cb) => {
    User.findById(id)
      .then(user => cb(null, user))
      .catch(err => cb(err));
  });
  
  passport.use(new LocalStrategy(
    {passReqToCallback: true},
    (...args) => {
      const [req,,, done] = args;
  
      const {username, password} = req.body;
  
      User.findOne({username})
        .then(user => {
          if (!user) {
            return done(null, false, { message: "Incorrect username" });
          }
            
          if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false, { message: "Incorrect password" });
          }
      
          done(null, user);
        })
        .catch(err => done(err))
      ;
    }
  ));


app.use(passport.session());  







<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acceso denegado</title>
</head>
<body>

    <h1>Acceso Denegado</h1>
    
</body>
</html>




*/


const server = new Server();



server.listen();