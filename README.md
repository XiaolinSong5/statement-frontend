# StatementFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.
This is the front end project for the 'Customer Statement Processor' of RABO bank. It's a website where a report of failed records can bed requested.

It loads the googleapis and Rabobank css template.
It's written in Angular5 (TypeScript).

### Coding conventions
Follow the Angular Styleguide: https://angular.io/guide/styleguide
Run `ng generate component component-name` to generate a new component. You can also use 
`ng generate directive|pipe|service|class|module`.

### Development setup
It's handy to have an editor which can compile .ts files real-time, for example:

* IntelliJ Ultimate
* SublimeText (add plugin: https://packagecontrol.io/packages/TypeScript)
* Brackets (add plugin: http://brackets.dnbard.com/extension/brackets-typescript)

You need some programs or tools to run this project locally:

* NPM (version 3 or higher) and NodeJs (version 6 or higher)
* Angular client (check version in package.json): 
* Install all the node modules, run: `npm install`

## Development server
To run this project, first run the back-end applicatie statement-backend (http://localhost:8080)), because it requests some information which is shown on the front
end.
Run `ng serve --open` for a dev server. The app will automatically reload if you change any of the source files.


You can also open the application manually in de browser, open http://localhost:4200


### TEST
If you can successful op the page for any reason, you can also try to use the mockdata
In record.service.ts 
enable the line: return of(RECORDS);
and disable the line  //return this.http.get<Record[]>(this.recordsUrl);

The result page is like the example pages in de root:
resultpageonlinoutput.pdf of resultpagewithinputexample.pdf

### Message
if the processing goes wrong, the error message of some other message can be shown at the end of the page.
With button "clear" you can clear the messages.

### Root files
A lot of files exist in the project's root. Here's what they're used for:

| Filename            | Say what?       |
|---------------------|-------------------|
| .angular-cli.json   | Configuration file for angular-cli, see https://github.com/angular/angular-cli/wiki/angular-cli |
| .editorconfig       | For consisting coding styles between editors and IDEs, see http://editorconfig.org |
| .npmrc              | npm configuration file, for proxy, repository, etc. settings |
| karma.conf.js       | test config |
| package-lock.json   | describes the exact tree that was generated, such that subsequent installs are able to generate 
                        identical trees, regardless of intermediate dependency updates |                  
| tsconfig.json       | typescript compiler config |
| tslint.json         | typescript format and code check config |

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).



### Further help
To get more help on the Angular CLI use `ng help` or go check out the 
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
