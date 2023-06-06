# nx-base for web-project-name

## First time setup

Do a search and replace for `web-project-name` and replace it with the name of your project.
For example `my-awesome-project`. It should be all lowercase and use dashes instead of spaces.
Please note that further `serve` and `build` commands will use this name.

## Project setup

To install the dependencies run `yarn workspace:set`, this will install all the dependencies for all the applications and libraries.

## Resetting the project

If you want to reset the project to a clean state run `yarn workspace:reset`. This will remove all the node_modules and reinstall them, it will also clear the cache and remove dist folders.

## Running the project

To run the project run `yarn serve:application-name`. This will run the web application. The default port for the web application is 3000.

## Building the project

To build the project run `yarn build:application-name`. This will build the web application. The default output folder for the web application is dist/apps/application-name.

## Committing the project

This project is setup to use commitizen. Creating a commit will run commitizen. For more information you can read the [commitizen documentation](https://github.com/commitizen/cz-cli)
