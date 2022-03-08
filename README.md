# AddressBook

Address Book is an Angular 13 SPA web application that comsumes mock data from https://randomuser.me/

The Payload consumed is small, containing user's title, first and last names and their phone number.

Initial list view shows the first ten entries containing users' first and last name, currently only 10 entries are shown per page.

Clicking on a user's name opens the detail view where their phone number is displayed.

Other features include:
- pagination
- toggle light and dark themes.


Application was developed using node.js v16.14.0, Angular 13.

Styling utilizes Angular Material.

To run locally please run the following steps:
1) Open link on browser: https://github.com/mdperini/address-book
2) Click on 'Code' Button and select 'Download Zip'.
3) Once the file is downloaded, decompress file.
4) Open Visual Studio Code and select folder or open a bash-session inside of folder 'address-book'.
5) From the command-line run: 'npm i' 
6) Then run 'npm start'

Note: Once the start step is completed, your default browser will automatically open link http://localhost:4200/

------------------------------------------------------------------------------------------------------------------------------
Overall approach
■ What features you implemented.
    - Responsive module design that provides read-only access to random use data.
    - To give the design the proper 'look and feel' Angular Material components and themes were implemented.
        -Flex box was also applied for features like space-between, etc.
    - To give the design an Address Book feel pagination was implemented, displaying 10 entries per page. 
    - Summary / Detail was implemented as per requirement.
        - To close the detail view just click on the X on the upper right-hand side.
■ Given more time, what else would you have liked to complete and howlong would it have taken you?
    - Given more time:
        - internationalization support.
            - Random User supports several languages, for demo purposes we could support English, Spanish and Italian.
                - All test labels would also need to be translated.
            - Estimate: 2 days.
        - media queries support different popular form factors
            - Estimate: 2 days.
        - Replace current rxjs implementation with Promise.
            - Given we receive data in chunks versus individual items, Promise seems more ideal.
            - Additional research is required to re-shape the current implementation.   
            - Estimate: 3 days.
■ Given more time, what else would you have done to make the projectmore robust?
        - Given more time, I would like feedback from someone at Nuvalence to see what they expected from an address book application.
            - Most of my experience is in the financial sector, it would be fascinating to get their perspective.
        - Look into what it would take to provide a deployment to a cloud based infrastructure solution.
        - Offline support using a service-worker is another possibility.
        - Implement a datastore like Akti and provide support for CRUD operations.
        - Alter the design to support sales and marketing.
        - Provide search feature plus built-in or canned searches.

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
