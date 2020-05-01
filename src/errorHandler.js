"use strict";
exports.__esModule = true;
var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.handleError = function (error) {
        console.log("This is the error that I have received...");
        console.log({ error: error });
        console.log("typeof " + typeof error.errors);
        console.log("Exiting...");
    };
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
exports.errorHandler = new ErrorHandler();
//# sourceMappingURL=errorHandler.js.map