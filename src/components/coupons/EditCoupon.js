import React, { useState, useEffect } from "react";
import Toast from "./../LoadingError/Toast";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCoupon, updateCoupon } from "./../../Redux/Actions/CouponAction";
import { COUPON_UPDATE_RESET } from "../../Redux/Constants/CouponConstants";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditCouponMain = (props) => {
  const { couponId } = props;

  const [index, setIndex] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [validityTime, setValidityTime] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [minAmount, setMinAmount] = useState(0);
  const [type, setType] = useState("");

  const dispatch = useDispatch();

  const couponEdit = useSelector((state) => state.couponEdit);
  const { loading, error, coupon } = couponEdit;

  const couponUpdate = useSelector((state) => state.couponUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = couponUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: COUPON_UPDATE_RESET });
      toast.success("Coupon Updated", ToastObjects);
    } else {
      if (!coupon.name || coupon._id !== couponId) {
        dispatch(editCoupon(couponId));
      } else {
        setIndex(coupon.index);
        setName(coupon.name);
        setCode(coupon.code);
        setValidityTime(coupon.validityTime);
        setPercentage(coupon.percentage);
        setMinAmount(coupon.minAmount);
        setType(coupon.type);
      }
    }
  }, [coupon, dispatch, couponId, successUpdate]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateCoupon({
        _id: couponId,
        index,
        name,
        code,
        validityTime,
        percentage,
        minAmount,
        type,
      })
    );
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/coupons" className="btn btn-danger text-white">
              Tr??? V??? Danh S??ch S???n Ph???m
            </Link>
            <h2 className="content-title">C???p Nh???t M?? Khuy???n M??i</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                C???p Nh???t M??
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="product_title" className="form-label">
                          T??n Th??ng ??p D???ng
                        </label>
                        <input
                          type="text"
                          placeholder="Nh???p t??n th??ng"
                          className="form-control"
                          id="product_title"
                          required
                          value={index}
                          onChange={(e) => setIndex(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_title" className="form-label">
                          T??n M?? Khuy???n M??i
                        </label>
                        <input
                          type="text"
                          placeholder="Nh???p t??n m??"
                          className="form-control"
                          id="product_title"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_title" className="form-label">
                          Code
                        </label>
                        <input
                          type="text"
                          placeholder="Nh???p code"
                          className="form-control"
                          id="product_title"
                          required
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Ng??y H???t H???n
                        </label>
                        <input
                          type="type"
                          placeholder="Nh???p ng??y"
                          className="form-control"
                          id="product_price"
                          required
                          value={validityTime}
                          onChange={(e) => setValidityTime(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Ph???n Tr??m Gi???m Gi??
                        </label>
                        <input
                          type="number"
                          placeholder="Nh???p ph???n tr??m"
                          className="form-control"
                          id="product_price"
                          required
                          value={percentage}
                          onChange={(e) => setPercentage(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">S??? L?????ng M??</label>
                        <input
                          placeholder="Type here"
                          className="form-control"
                          rows="7"
                          required
                          value={minAmount}
                          onChange={(e) => setMinAmount(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Lo???i M??</label>
                        <input
                          placeholder="Nh???p lo???i"
                          className="form-control"
                          rows="7"
                          required
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditCouponMain;
