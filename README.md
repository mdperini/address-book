# AddressBook

Angular 13 Address Book web application that comsumes data from https://randomuser.me/

Payload consumed is small, containing user's title, first and last names and their phone number.

Initial view shows the first ten entries containing user's first and last name, currently only 10 entries are shown per page.

Clicking on the user's name opens the detail view where their phone number is displayed.

Pagination is available.

So is the ability to toggle light and dark themes.


Application was developed using node.js v16.14.0, Angular 13.

Styling utilizes Angular Material.

To run locally please run the following steps:
1) Open link on browser: https://github.com/mdperini/address-book
2) Click on 'Code' Button and select 'Download Zip'.
3) Once the file is download, decompress file.
4) Open Visual Studio Code and select folder or open a bash-session inside of folder 'address-book'.
5) From the command-line run: 'npm i' 
6) Then run 'npm start'

Note: Once the start step is completed, your default browser will automatically open link http://localhost:4200/


------------------------------------------------------------------------------------------------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
