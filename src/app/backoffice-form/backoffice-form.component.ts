import { Component } from '@angular/core';
import { Backoffice } from '../backoffice';

@Component({
    selector: 'app-backoffice-form',
    templateUrl: './backoffice-form.component.html'
})

export class BackofficeFormComponent {

    genders = [ 'Male', 'Female' ];
    model = new Backoffice(18, 'Dr IQ', this.genders[0], 'Chuck Overstreet');
    submitted = false;

    onSubmit() { this.submitted = true; }

    newBackoffice() { this.model = new Backoffice(42, '', '', '');}

    jonSnow(): Backoffice {
        const myHero =  new Backoffice(42, 'Jon Snow',
                                    'jon.snow@westeros.com',
                                    'Male');
        console.log('My hero is called ' + Backoffice.name); // "My character is called Jon Snow"
        return myHero;
    }

}