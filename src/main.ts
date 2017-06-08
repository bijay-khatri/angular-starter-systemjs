import * as angular from "angular";
import moduleMyApp from "./app/app";


const app : ng.IModule = angular.module("app" , [moduleMyApp]);

console.log("Application name : ", app.name);
