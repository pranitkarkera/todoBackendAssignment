const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
});

const TaskModel = mongoose.model("todolist", TaskSchema);
module.exports = TaskModel;
