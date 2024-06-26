// Daniella Boaz (209371913), Gal Kalev (318657632)
//src/components/ErrorClass.js

//Class for errors when an error is thrown
class ErrorHandling extends Error {
    constructor(action) {
        let message;
        switch (action) {
            case 'fetch':
                message = 'Error fetching data';
                break;
            case 'delete':
                message = 'Error deleting data';
                break;
            case 'addMeal':
                message = 'Error adding meal to data';
                break;
            default:
                message = 'An error occurred';
        }
        super(message);
        this.name = this.constructor.name;
    }
}

export default ErrorHandling;