import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passanger } from '../../models/passanger.interface';

@Component({
    selector: 'passanger-detail',
    templateUrl: 'passanger-detail.component.html',
    styleUrls: ['passanger-detail.component.scss']
})

export class PassangerDetailComponent {
    @Input()
    detail: Passanger;
    editingText: string;
    editing: boolean = false;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    @Output()
    add: EventEmitter<any> = new EventEmitter();

    constructor(){
        
    }

    onNameChange(name: string){
        if (this.editing == true) {
            this.detail.fullname = name;
        }
    }

    toggleEditing(){
        if (this.editing){
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove(){
        this.remove.emit(this.detail);
    }

    onAdding(){
        this.add.emit(this.detail);
    }
}