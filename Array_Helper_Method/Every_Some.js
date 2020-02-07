function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () { // dont use arrow function because value is not accessible
    return this.value.length > 0;
}

var userName = new Field('Kush');
var password = new Field('my_password');
var mobileNumber = new Field('mobileNumber');
var gender = new Field('')
console.log(userName.validate() && password.validate()); // if there is multiple fieds are available the we need to keep on adding the validate method 

var fields = [userName, password, mobileNumber, gender] // just add all the fieds and pass it to the every functions

var formIsValid = fields.every((field) => {
    return field.validate()
});
console.log(formIsValid);