import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddOrder() {
  const [order, setOrder] = useState({
    staffId: "",
    orderNo: "",
    site: "Kandy",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/orders", order)
      .then(() => {
        alert("Order added");
        navigate(`/addItems/${order.staffId}/${order.orderNo}/${order.site}`);
        setOrder({
          staffId: "",
          orderNo: "",
          site: "Kandy",
        });
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setOrder((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <div className="registerTitle">
        <button
          type="button"
          class="btn btn-dark btn-lg orderBtn"
          onClick={() => {
            navigate("/addOrder");
          }}
        >
          Add New Order
        </button>
        <button
          type="button"
          class="btn btn-dark btn-lg orderBtn"
          onClick={() => {
            navigate("/orderView");
          }}
        >
          Each Site Order Details
        </button>
      </div>
      <h4 className="registerTitle">Add New Order Details</h4>
      <form onSubmit={sendData} className="registerForm">
        <div className="form-group">
          <label for="exampleInputEmail1">Staff ID</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Site Manager Staff ID"
            name="staffId"
            value={order.staffId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Order Number</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Order Number"
            name="orderNo"
            value={order.orderNo}
            onChange={handleChange}
            required
          />
        </div>

        <div class="form-group row">
          <label for="fac" className="col-sm-2 col-form-label">
            Site
          </label>
          <div className="col-sm-10">
            <select
              id="fac"
              class="form-control"
              value={order.site}
              onChange={handleChange}
              name="site"
            >
              <option selected={order.site === "Kandy"} value="Kandy">
                Kandy
              </option>
              <option selected={order.site === "Matara"} value="Matara">
                Matara
              </option>
              <option selected={order.site === "Colombo"} value="Colombo">
                Colombo
              </option>
              <option selected={order.site === "Jaffna"} value="Jaffna">
                Jaffna
              </option>
              <option selected={order.site === "Kurunegala"} value="Kurunegala">
                Kurunegala
              </option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg">
          Next
        </button>
      </form>
    </div>
  );
}

export default AddOrder;
