if(process.env.NODE_ENV === "development") require("dotenv").config();

class Main {
    public static main():void {
        console.log("Hello world");
    }
}

Main.main();
