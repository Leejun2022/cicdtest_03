require("dotenv").config();
const passport = require("passport");
const kakao = require("./kakaoStrategy");
// const google = require("./googleStrategy");

module.exports = () => {
  //로그인 시에만 실행
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  //매 요청시 실행
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  kakao();
  // google();
};
