import { Application } from "express";
export function startServer(app: Application, PORT:number | string) : void{
    const server = app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`)
    })
    server.on("error", (err: Error) => {
        console.error("Critical Server Error:", err.message);
        process.exit(1); 
    })
}

