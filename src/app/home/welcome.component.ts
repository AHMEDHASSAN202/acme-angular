import { Component } from '@angular/core';

@Component({
    templateUrl: './app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    public sourceCode: string = 'https://github.com/AHMEDHASSAN202/acme_angular';
    public info: any = {
        name: 'Ahmed Hassan',
        avatar: './app/assets/images/ahmed.jpg',
        facebook: 'https://www.facebook.com/AhmedHaasanElbhai',
        github: 'https://github.com/AHMEDHASSAN202'
    };
}
