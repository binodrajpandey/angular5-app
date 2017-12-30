# Myapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

## Development steps

1. Install NODE
2. verify using following commands.</br>
`node -v`</br>
`npm -v`</br>
`npm i -g npm` if you want to update your npm version
3. Install angular-cli using following command </br>
`npm install -g @angular/cli`</br>
If you want to uninstall your angular use following command.</br>
`npm uninstall -g angular-cli`</br>
`npm uninstall --save-dev angular-cli`</br>
`npm cache clean`
4. create project </br>
`ng new myapp`
5. go to project folder and run project.</br>
`ng serve`
6. Navigate to `http:\\localhost:4200`
7. Install `Visual Studio Code` for IDE

## Routing
1. In order for routing lets create different component using angular-cli under `src/app`.</br>

 `ng g c student`</br>
 `ng g c user`</br>
 `ng g c department`</br>
 `ng g c about`</br>
2. Now create `app.routing.ts` file under `src/app` folder and crete appRoutes and export it. </br>
3. Now go to `app.module.ts` file and import routing.</br>
4. Go to `index.html` file and add base element.</br>
5. Go to `app.component.ts` and write `router-outlet` tag in template.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
