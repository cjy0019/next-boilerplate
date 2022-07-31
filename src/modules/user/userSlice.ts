import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// TODO : rootReducer를 구성하기 위해 임시로 작성한 slice입니다. 파일 삭제하면 됩니다.

const initialState = {
  id: 0,
  email: '',
  lastName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedUser(state, action: PayloadAction<string>) {
      state.email = action.payload;
      return state;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
