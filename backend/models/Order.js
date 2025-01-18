const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderItems: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      qty: Number,
    },
  ],
  totalPrice: Number,
  isPaid: { type: Boolean, default: false },
  paidAt: Date,
});

module.exports = mongoose.model('Order', orderSchema);
