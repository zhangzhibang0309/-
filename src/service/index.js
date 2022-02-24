import axios from "axios";

axios.defaults.withCredentials = true;

// 获取学生易班信息
const requestGetData = async (code) => {
  const studentData = await axios.get("http://139.9.118.85:2333/backSchool", {
    params: {
      code,
    },
  });

  return studentData;
};

export { requestGetData };
