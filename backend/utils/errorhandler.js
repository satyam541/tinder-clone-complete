class ErrorHandler extends Error
{
    constructor(message,statusCode)
    {
        super(message);
        this.statusCode = statusCode;
        this.code = ErrorHandler.CODE_ERROR;
        this.message = message;

        Error.captureStackTrace(this, this.constructor);

    }


}


module.exports  =   ErrorHandler;