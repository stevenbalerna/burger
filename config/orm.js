var connection = require("./connection.js");
function printQuestionMarks(num){
    var questionMarks = []
    for (let i = 0; i < num; i++) {
        questionMarks.push("?")
        
    }
    return questionMarks.toString()
};

function convertObj2sql(objectName){
    var conversion = []
    for (var key in objectName) {
        conversion.push(key + "=" + objectName[key])
        
    }
    return conversion.toString()
};

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";"; 
        connection.query(queryString, function (err, result){
            if (err) {
                throw err
            }
            cb(result)
        }
    })
    },
    create: function(table, columns, values, cb){
        var queryString = "INSERT INTO " + table 
        queryString = queryString + " (";  
    }
};