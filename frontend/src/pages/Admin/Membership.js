import React, { useEffect, useState } from "react";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";

const Membership = () => {
  const [plans, setPlans] = useState(
    JSON.parse(localStorage.getItem("membershipPlans")) || []
  );
  const [plan, setPlan] = useState({ name: "", price: "", duration: "" });

  const handleChange = (e) => {
    setPlan({ ...plan, [e.target.name]: e.target.value });
  };

  const addPlan = (e) => {
    e.preventDefault();
    if (!plan.name || !plan.price || !plan.duration) return alert("Fill all fields");
    const updated = [...plans, { ...plan, id: Date.now() }];
    setPlans(updated);
    localStorage.setItem("membershipPlans", JSON.stringify(updated));
    setPlan({ name: "", price: "", duration: "" });
  };

  const deletePlan = (id) => {
    const updated = plans.filter((p) => p.id !== id);
    setPlans(updated);
    localStorage.setItem("membershipPlans", JSON.stringify(updated));
  };

  return (
    <div>
      <h4 className="mb-3 text-primary">Manage Membership Plans</h4>

      <form onSubmit={addPlan} style={{ maxWidth: "500px" }}>
        <Input label="Plan Name" name="name" value={plan.name} onChange={handleChange} />
        <Input label="Price (₹)" name="price" type="number" value={plan.price} onChange={handleChange} />
        <Input label="Duration (months)" name="duration" type="number" value={plan.duration} onChange={handleChange} />
        <Button text="Add Plan" type="submit" />
      </form>

      <hr />
      <h5>Available Plans</h5>
      {plans.length === 0 ? (
        <p>No plans added yet.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Plan Name</th>
              <th>Price</th>
              <th>Duration (months)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>₹ {p.price}</td>
                <td>{p.duration}</td>
                <td>
                  <button className="btn btn-sm btn-danger" onClick={() => deletePlan(p.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Membership;
