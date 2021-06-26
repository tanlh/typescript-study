/**
 * Learn about: singleton pattern
 */

console.log("");
console.log("============== Singleton ==============");

class Logger {
  // static instance
  private static instance: Logger;

  // private constructor
  private constructor(private appName: string) {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new Logger("My app");
    return this.instance;
  }

  printLog() {
    console.log("This is a log");
  }
}

// const myAppLogger = new Logger("My app"); ERROR, no public constructor

const myAppLogger = Logger.getInstance();
myAppLogger.printLog();
