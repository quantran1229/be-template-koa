// Load .env
import dotenv from 'dotenv'
dotenv.config()

// Constant class to store constant value + value set using ENV
export default class Constant {
    static instance = new Constant();
    // Default Http Code
    HTTP_CODE = {
        Success: 200,
        Created: 201,
        SuccessNoContent: 204,
        BadRequest: 400,
        Unauthorized: 401,
        Forbidden: 403,
        NotFound: 404,
        Conflict: 409,
        BodyParseError: 422,
        InternalError: 500
    }

    // Set Constant variable as ENV variable
    APP_PORT = process.env.APP_PORT;
    APP_HOST = process.env.APP_HOST;
    NODE_ENV = process.env.NODE_ENV;

    constructor(){
    }
}