const mongoose = require('mongoose');

const discussfriendsSchema = mongoose.Schema({
   email: {
      type: String,
      required: true
   },
   title: {
      type: String,
      required: true
   },
   problem: {
      type: String,
      required: true
   },
   time: {
      type: Date,
      default: Date.now
   }
});

const discussfriendModel = mongoose.model('discussFriends', discussfriendsSchema);

discussfriendModel.getEveryProblem = (result) => {
   discussfriendModel.aggregate([{ $sort: { time: -1, } }, { $limit: 20 }],(err,data)=>{
      result(null,data);
   });
}
module.exports = discussfriendModel;