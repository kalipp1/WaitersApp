// selectors
export const getAllTables = ( state ) => state.tables;
export const getTableById = ( {tables} , tableId ) => tables.find(table => table.id === tableId);

//action names
const createActionName = name => `app/books/${name}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

//action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const updateTable = payload => ({ type: UPDATE_TABLE, payload})
export const fetchTables = () => {
    return (dispatch) => {
        fetch('http://localhost:3131/tables')
            .then(res => res.json())
            .then(tables => dispatch(updateTables(tables)));
    };
  };
  export const fetchTable = (payload) => {
    return (dispatch) => {
        const options = {
            type: UPDATE_TABLE,
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: payload.id,
              status: payload.status,
              peopleAmount: payload.peopleAmount,
              maxPeopleAmount: payload.maxPeopleAmount,
              bill: payload.bill
            }),
        };
        fetch(`http://localhost:3131/tables/${payload.id}`, options)
        .then(res => res.json())
        .then(updatedTable => {
            dispatch(updateTable(updatedTable));
        })
    };
  };

const reducer = (statePart = [], action) => {
    switch(action.type) {
        case UPDATE_TABLES:
            return [...action.payload]
        case UPDATE_TABLE:
            return statePart.map(table => {
                if (table.id === action.payload.id) {
                    return { ...action.payload };
                  } else {
                    return table;
                  }
            });
        default:
            return statePart
    }
};

export default reducer;