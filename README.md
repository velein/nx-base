# Project Name

Project description

## Running an application

To run an application execute following command.

```bash
npm run application-name:serve
```

## Building an application

To build an application execute following command. The default output folder for applications is `dist/apps/{{application-name}}`.

```bash
npm run application-name:build
```

You can also trigger builds for all applications at once by running following command.

```bash
npm run build:all
```

## Project setup

Do a search and replace for `web-project-name` and replace it with the name of your project.
For example `my-awesome-app`. It should be all lowercase and use dashes instead of spaces.
Please note that further `serve` and `build` commands will use this name.

To install the dependencies run `npm install`, this will install all the dependencies for all the applications and libraries.

## Resetting the project

If you want to reset the project to a clean state run `npm run workspace:reset`. This will remove all the node_modules and reinstall them, it will also clear the cache and remove dist folders.

## Committing the project

This project is setup to use commitizen. Creating a commit will run commitizen. For more information you can read the [commitizen documentation](https://github.com/commitizen/cz-cli)

## Vite checker

Applications are using [vite checker](https://vite-plugin-checker.netlify.app/) to check for errors and warnings. You can disable it by removing it from the app's `vite.config.ts` file.
