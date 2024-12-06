import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginAPI, whoAmIAPI, fetchBalanceAPI } from '../../api/modules/user';
import { setJWT, removeJWT } from "../../utils/localStorage"

const initialState = {
  value: {
    account_number: '',
    birth_date: '',
    document_number: '',
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    balance: null, // To store the balance
    last_time: null, // To store the last updated time
  },
  errorMessage: "",
  loading: false,
};


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const login = createAsyncThunk(
  'user/fetchLogin',
  async (loginValues, { rejectWithValue }) => {
    const response = await loginAPI(loginValues);
    if (response.errors.length) {
      return rejectWithValue(response?.errors[0]?.error)
    }
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const whoAmI = createAsyncThunk(
  'user/whoAmI',
  async (jwt, { rejectWithValue }) => {
    const response = await whoAmIAPI(jwt);
    if (response.errors.length) {
      return rejectWithValue(response?.errors[0]?.error)
    }
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchBalance = createAsyncThunk(
  'user/fetchBalance',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchBalanceAPI();
      return response.data; // Assuming API returns the data in response.data
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch balance");
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state) => {
      state.value = initialState.value
      removeJWT()
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        setJWT(action.payload.jwt)
        state.value = action.payload;
        state.loading = false;

      })
      .addCase(login.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.errorMessage = "";
        state.loading = true;
      })

    builder
      .addCase(whoAmI.fulfilled, (state, action) => {
        state.value = action.payload; // Update user details
        state.loading = false;
        state.errorMessage = '';
      })
      .addCase(whoAmI.rejected, (state) => {
        removeJWT(); // Clear the token on invalid session
        state.value = initialState.value;
        state.loading = false;
      });

    // .addCase(whoAmI.fulfilled, (state, action) => {
    //   state.value = action.payload;
    // })
    // .addCase(whoAmI.rejected, (state, action) => {
    //   removeJWT()
    // })

    builder
      .addCase(fetchBalance.fulfilled, (state, action) => {
        state.value.balance = action.payload.balance;
        state.value.last_time = action.payload.last_time;
      })
      .addCase(fetchBalance.rejected, (state, action) => {
        state.errorMessage = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectIsLogged = (state) => !!state.user?.value?.email
export const selectUserLogged = (state) => state.user?.value || {}
export const selectUserErrorMessage = (state) => state.user?.errorMessage || ""
export const selectUserLoading = (state) => state.user?.loading || false
export const selectUserBalance = (state) => ({
  balance: state.user?.value?.balance || 0,
  last_time: state.user?.value?.last_time || null,
});


export default userSlice.reducer;