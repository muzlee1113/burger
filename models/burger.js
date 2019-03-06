// Inside burger.js, import orm.js into burger.js
var orm = require("../config/orm")

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var datahandler = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        });
    },
    insertOne: function (burger_name, cb) {
        console.log("this is a " + burger_name)
        orm.insertOne("burgers", "burger_name", burger_name, function (res) {
            cb(res)
        });
    },
    updateOne: function(id, cb){
        orm.updateOne("burgers", "devoured", 1, "id", id, function(res){
            cb(res)
            console.log("devouring the buger with id " + id)
        });
    }
}

// Export at the end of the burger.js file.
module.exports = datahandler;