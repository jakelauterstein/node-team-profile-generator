const Employee = require("./Employee")

class Manager extends Employee {
    //call parent constructor
    constructor(name, id, email, officeNumber){
        super(name, id, email);

        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager";
    }
}


module.exports = Manager