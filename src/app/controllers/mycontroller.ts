import * as angular  from "angular";
import {IMyService, SampleModel} from "../services/myservice";

export class MyController{
        private  title = "Awesome Developer Project";
        private error : boolean = false;
        private data : Array<SampleModel>;
        private errorMessage : string = "";

        static $inject = ['MyService'];
        constructor(private myService: IMyService){
            this.asyncTest();
        }

        asyncTest(): void {
            this.myService.asycTest().then((data: SampleModel[])=> {
                this.data = data;
                console.log("Data returned from service ", data);
            });
        }
    }