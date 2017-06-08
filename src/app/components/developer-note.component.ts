import * as angular from "angular";

interface NoteModel  {
        title: string;
        description: string;
};

class NoteComponentController implements angular.IComponentController{
        private notes : Array<NoteModel>;
        private currentNote: NoteModel;

        constructor() {
            this.notes = [];
            this.currentNote = {
                title : '',
                description: ''
            };

            this.notes.push({
                title : 'My First Note',
                description: 'My first note description. Some description about this note will be added'
            });
        }

        addNote(): void {
            this.notes.push(this.currentNote);
            this.currentNote = {
                title: "",
                description:""
            };
        }
    }
export class DeveloperNoteComponent implements angular.IComponentOptions{
         templateUrl:string;
         controller: any;

         constructor() {
             this.templateUrl = "app/components/note.html";
             this.controller = NoteComponentController;
         }

    }

    