import {
  COUPON_CREATE_FAIL,
  COUPON_CREATE_REQUEST,
  COUPON_CREATE_RESET,
  COUPON_CREATE_SUCCESS,
  COUPON_DELETE_FAIL,
  COUPON_DELETE_REQUEST,
  COUPON_DELETE_SUCCESS,
  COUPON_EDIT_FAIL,
  COUPON_EDIT_REQUEST,
  COUPON_EDIT_SUCCESS,
  COUPON_LIST_FAIL,
  COUPON_LIST_REQUEST,
  COUPON_LIST_SUCCESS,
  COUPON_UPDATE_FAIL,
  COUPON_UPDATE_REQUEST,
  COUPON_UPDATE_RESET,
  COUPON_UPDATE_SUCCESS,
} from "../Constants/CouponConstants";

// ALL COUPONS
export const couponListReducer = (state = { coupons: [] }, action) => {
  switch (action.type) {
    case COUPON_LIST_REQUEST:
      return { loading: true, coupons: [] };
    case COUPON_LIST_SUCCESS:
      return {
        loading: false,
        coupons: action.payload,
      };
    case COUPON_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// DELETE COUPON
export const couponDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COUPON_DELETE_REQUEST:
      return { loading: true };
    case COUPON_DELETE_SUCCESS:
      return { loading: false, success: true };
    case COUPON_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// CREATE COUPON
export const couponCreateReducer = (
  // state = {},
  state = { coupons: [] },
  action
) => {
  switch (action.type) {
    case COUPON_CREATE_REQUEST:
      return { ...state, loading: true };
    case COUPON_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        coupon: action.payload,
        //   categories: [],
      };
    case COUPON_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case COUPON_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

// EDIT COUPON
export const couponEditReducer = (
  state = { coupon: {} },
  action
) => {
  switch (action.type) {
    case COUPON_EDIT_REQUEST:
      return { ...state, loading: true };
    case COUPON_EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        coupon: action.payload,
      };
    case COUPON_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// UPDATE COUPON
export const couponUpdateReducer = (state = { coupon: {} }, action) => {
  switch (action.type) {
    case COUPON_UPDATE_REQUEST:
      return { ...state, loading: true };
    case COUPON_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case COUPON_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case COUPON_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
