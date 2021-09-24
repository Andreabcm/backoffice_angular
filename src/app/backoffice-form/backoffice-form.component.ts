import { Component } from '@angular/core';
import { Backoffice } from '../backoffice';

@Component({
    selector: 'app-backoffice-form',
    templateUrl: './backoffice-form.component.html',
   /*  styleUrls: ['./backoffice-form.component.css'] */
})

export class BackofficeFormComponent {

    genders = [ 'Male', 'Female' ];
    model = new Backoffice(18, 'username', 'email', this.genders[2], 'bio');
    submitted = false;

    onSubmit() { this.submitted = true; }

    newBackoffice() { this.model = new Backoffice(42, '', '', '', '');}

/*     jonSnow(): Backoffice {
        const myCharacter =  new Backoffice(42, 'Jon Snow',
                                    'jon.snow@westeros.com',
                                    'Male',
                                    'King of the North');
        console.log('My hero is called ' + Backoffice.name); // "My character is called Jon Snow"
        return myCharacter;
    }
 */
}