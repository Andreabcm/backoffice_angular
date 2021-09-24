import { Component } from '@angular/core';
import { Backoffice } from '../backoffice';

@Component({
    selector: 'app-backoffice-form',
    templateUrl: './backoffice-form.component.html',
    styleUrls: ['./backoffice-form.component.css']
})

export class BackofficeFormComponent {

    genders = [ 'Male', 'Female' ];
    model = new Backoffice(18,'', '', '', this.genders[2], '');
    submitted = false;

    onSubmit() { this.submitted = true; }

    newBackoffice() { this.model = new Backoffice(42, '', '', '', '', '');}
}