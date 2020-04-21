
1. Write a function that performs some validity checks on two JSON files, geo.json and data.json

2. Write a function that takes in latitude and longitude as parameters, and returns the data from data.json sorted by   euclidean distance from the latitude longitude

3. Write a function that takes in latitude and longitude as parameters, and returns the row from data.json with the shortest distance from the latitude and longitude, in a nicely formatted way

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [Yarn](https://yarnpkg.com/)
- Install [VS Code](https://code.visualstudio.com/)

# Getting started
- Clone the repository
```
git clone --depth=1 https://github.com/Vuyisanani/json_validation.git
```
- Install dependencies
```
cd <project_name>
yarn install
```
- Run
```
tsc index.ts
node index.js
```