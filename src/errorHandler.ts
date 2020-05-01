export class ErrorHandler {
  public handleError(error: any) {
    console.log("This is the error that I have received...");
    console.log({ error });
    // console.log({ errors: error.errors });
    console.log(`typeof ${typeof error.errors}`);
    console.log("Exiting...");
  }
}

export const errorHandler: ErrorHandler = new ErrorHandler();
