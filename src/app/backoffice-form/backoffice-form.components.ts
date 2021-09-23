import { Component } from '@angular/core';
import { Backoffice } from '../backoffice';

@Component({
    selector: 'app-backoffice-form',
    templateUrl: './backoffice-form.component.html',
    styleUrls: [ './backoofice-form.component.css' ]
})

export class BackofficeFormComponent {

    genders = [ 'Male', 'Female' ];
    model = new Backoffice(18, 'Dr IQ', this.genders[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }

}