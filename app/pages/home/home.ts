import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import {ChecklistPage} from '../checklist/checklist';
import {ChecklistModel} from '../../providers/checklist-model/checklist-model';
import {Data} from '../../providers/data/data';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    checklists: ChecklistModel[] = [];

    constructor(public nav: NavController, public dataService: Data) {

    }

    addChecklist(): void {

    }

    renameChecklist(checklist): void {
    }

    viewChecklist(checklist): void {
    }

    removeChecklist(checklist): void {
    }

    save(): void {
    }

}
