"use strict";
exports.__esModule = true;
var Director = /** @class */ (function () {
    function Director() {
        this.id = 1;
        this.name = "my director";
        this.address = "Modiin";
        this.salary = 15000;
    }
    Director.prototype.work = function (currentWork) {
        console.log("I am a Director, my currentWork is:", currentWork);
    };
    return Director;
}());
var Developer = /** @class */ (function () {
    function Developer() {
        this.id = 2;
        this.name = "my developer";
        this.address = "Bney Brak";
        this.salary = 10000;
        this.domain = "web";
    }
    Developer.prototype.work = function (currentWork) {
        console.log("I am a Developer, my currentWork is:", currentWork);
    };
    return Developer;
}());
var PrivateClient = /** @class */ (function () {
    function PrivateClient() {
        this.id = 3;
        this.name = "my private director";
        this.address = "Eilat";
        this.responsibleEmployeeId = 1;
    }
    PrivateClient.prototype.client = function (feedback) {
        console.log("I am a PrivateClient, my feedback is:", feedback);
    };
    return PrivateClient;
}());
var OrganizationClient = /** @class */ (function () {
    function OrganizationClient() {
        this.id = 4;
        this.name = "my OrganizationClient";
        this.address = "Jerusalem";
        this.responsibleEmployeeId = 2;
    }
    OrganizationClient.prototype.client = function (feedback) {
        console.log("I am a OrganizationClient, my feedback is:", feedback);
    };
    return OrganizationClient;
}());
function sendEmail(user) {
    if (user instanceof Director) {
        console.log("send email to director");
    }
    else {
        console.log("send email to not director");
    }
    writeDetails(user);
    return user;
}
function writeDetails(user) {
    if ("salary" in user) {
        console.log("the salary is: ", user.salary);
    }
    else {
        console.log("the responsibleEmployeeId is: ", user.responsibleEmployeeId);
    }
    // For a n in x expression, where n is a string literal or string literal type and x is a union type, the “true” branch narrows to types which have an optional or required property n, and the “false” branch narrows to types which have an optional or missing property n.
}
function logIn(user) {
    console.log("in login");
    if (isClient(user)) {
        user.client("great");
    }
    else {
        user.work("new game");
    }
}
function isClient(user) {
    return user.responsibleEmployeeId !== undefined;
}
console.log("\nIWorker object:\n");
var w1 = new Director();
sendEmail(w1);
logIn(w1);
console.log("\nIClient object:\n");
var c1 = new PrivateClient();
sendEmail(c1);
logIn(c1);
