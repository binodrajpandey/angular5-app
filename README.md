# Myapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

## Development steps

1. Install Node js.
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

## Service
1. Create service using command line under `src/app`.</br>
`ng g s post`</br>
2. Inject http module inside service constructor.
3. Add HttpModule in import section of `app.module.ts` .
4. write method to communicate with server.


## Routing
1. In order for routing lets create different component using angular-cli under `src/app`.</br>

 `ng g c student`</br>
 `ng g c user`</br>
 `ng g c department`</br>
 `ng g c about`</br>
2. Now create `app.routing.ts` file under `src/app` folder and crete appRoutes and export it. </br>
3. Now go to `app.module.ts` file and add routing in import section.</br>
4. Go to `index.html` file and add base element.</br>
5. Go to `app.component.ts` and write `router-outlet` tag in template.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
