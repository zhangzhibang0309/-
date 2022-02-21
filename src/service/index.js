import axios from "axios";


axios.defaults.withCredentials = true;

// axios的实例对象
const requestPostToken = (code) => {
  axios
    .post("api", {
      access_token: "476dd0ef1cae8af4",
      lastNato_yb_uidme: "86119a29c2a1dbd041972ad2aea9be48",
      code,
      redirect_uri: "https://back.demozzz.com",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const requestJava = () => {
  axios
    .get("http://139.9.118.85:2333/backSchool?id=1043119044")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {});
};

export { requestJava, requestPostToken };
