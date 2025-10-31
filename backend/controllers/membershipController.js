import Membership from "../models/membershipModel.js";

// Get all memberships
export const getMemberships = async (req, res) => {
  try {
    const plans = await Membership.find();
    res.json(plans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new membership
export const addMembership = async (req, res) => {
  try {
    const { name, price, duration } = req.body;
    const plan = await Membership.create({ name, price, duration });
    res.json(plan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
