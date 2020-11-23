const boardQuery = 
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
            title
            id
            value
            text
          }
        }
      }
    }
    `
export default boardQuery