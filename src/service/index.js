import axios from "axios";

axios.defaults.withCredentials = true;

// 转form-data
function paramsToFormData(obj) {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Array) {
      obj[key].forEach((item) => {
        formData.append(key, item);
      });
      return;
    }
    formData.append(key, obj[key]);
  });
  return formData;
}

// 获得token
const requestPostToken = async (code) => {
  let formData = paramsToFormData({
    client_id: "476dd0ef1cae8af4",
    client_secret: "86119a29c2a1dbd041972ad2aea9be48",
    code,
    redirect_uri: "https://back.demozzz.com",
  });

  let token = await axios.post("api", formData);
  return token;
};

// 获取学生易班信息
const requestGetMe = async (access_token) => {
  const studentData = await axios.get("apii", {
    params: {
      access_token,
    },
  });

  return studentData;
};

const requestGetBackCheck = async (id) => {
  const backData = await axios.get("http://139.9.118.85:2333/backSchool", {
    params: {
      id,
    },
  });

  return backData;
};

export {
  requestPostToken,
  requestGetMe,
  requestGetBackCheck,
};
