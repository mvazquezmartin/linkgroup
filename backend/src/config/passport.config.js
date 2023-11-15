import passport from "passport";
import jwt from "passport-jwt";
import google from "passport-google-oauth20";
import jwtConfig from "./jwtConifug.js";
import cookieExtractor from "../utils/cookieExtractor.util.js";

const JWT_KEY = jwtConfig.JWT_KEY;

const JWTStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;
const GoogleStrategy = google.Strategy;

const initializePassport = () => {
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: JWT_KEY,
      },
      async (jwt_payload, done) => {
        try {
          done(null, jwt_payload);
        } catch (error) {
          done(error);
        }
      }
    )
  );
};

export default initializePassport;
