const initialState = {
  notes: [
    {
      id: 378,
      date: "22/05/2022",
      isImportant: false,
      note: "This is first note",
    },
    {
      id: 234,
      date: "29/06/2022",
      isImportant: false,
      note: "This is second note",
    },
  ],
};

const reducer = (previousState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_NOTE":
      return {
        ...previousState,
        notes: [...previousState.notes, payload],
      };
    default:
      return previousState;
  }
};

export default reducer;
