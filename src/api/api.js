import mondaySdk from "monday-sdk-js";
import boardQuery from "./@utils/boardsQuery";

const monday = mondaySdk();
monday.setToken(process.env.REACT_APP_MONDAY_TOKEN);

const api = {
  async fetchBoards() {
    return new Promise((resolve) => {
      monday.api(boardQuery).then((res) => resolve(res));
    });
  },
};

export default api;
