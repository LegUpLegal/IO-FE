import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();
monday.setToken(process.env.REACT_APP_MONDAY_TOKEN);

const api = {
  async fetchBoards() {
    return new Promise((resolve) => {
      monday
        .api(
          `{
      
      boards(limit: 3) {
        name
        columns {
          title
          id
          type
        }
        items {
          name
          group {
            id
          }
          column_values {
            id
            value
            text
          }
        }
      }
    }
    `
        )
        .then((res) => resolve(res));
    });
  },
};

export default api;
