import * as angular from "angular";

    export interface SampleModel {
        address : any;
        company: any;
        email:string;
        id:number;
        name: string;
        phone: string;
        username: string;
        website: string;
    }
    export interface IMyService{
        doSomething(): string;
        asycTest(): any;
    }

    export class MyService implements IMyService{
        static $inject = ['$http'];

        constructor(private $http: angular.IHttpService){

        }

        doSomething(): string {
            return "Doing Something";
        }

        asycTest(): angular.IHttpPromise<SampleModel[]>{
            return this.$http({
                method: 'GET',
               url: 'https://jsonplaceholder.typicode.com/users'
            }).then(response => response.data)
        }
    }