import * as angular from "angular";
import {DeveloperNoteComponent} from "./components/developer-note.component"; 
import {MyController} from "./controllers/mycontroller";
import {MyService} from "./services/myservice";


const myApp : ng.IModule = angular.module("myApp" , [])
                                .controller("MyController", MyController)
                                .service("MyService", MyService)
                                .component("developerNote",new DeveloperNoteComponent())
                                
export default myApp.name;

console.log("Application name : ", myApp.name);
