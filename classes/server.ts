import express from 'express';
import { SERVER_PORT } from '../global/enviroment';

export default class Server{
    app : express.Application;
    port: number;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
    }

    start(){
        this.app.listen(this.port, ()=>{
            console.log('Server in port -> ',SERVER_PORT);
        });
    }

}