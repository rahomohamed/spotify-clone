export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // remove this
  // token:
  //   "BQBl9j2-wYswzXkUCIoFECuwrppaWb2Mm41W2xc8qCMArL46pfUIgVWUAmX_pHdjFBFVp2dPmK1T6-NHc3HdpWstZEJlbVk6Z7zTMroPHiO78vK7SEx3p4jA9UZ70ZJ2Rv30U9-NKVD_2v5ojqyD1bT45cy_c1Yrvn9k-XLeBX3iF6Bo",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
