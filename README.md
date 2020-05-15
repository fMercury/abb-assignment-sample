# ABB_assignment_sample

In the backend folder is the Apollo server code and a robot's script that simulates the periodic entry of new data. the information is always the same. The data is from a new piece/part with 3 features and each with a different number of controls.

In the frontend folder there is a react application. the deviation control numbers that the robot sends are static and according to the value a different emoticon is rendered. The head color of each frame change with each new entry of data from the subscription. random numbers are generated in frontend and component style values are changed.

Next, the scripts to start the general project locally, or each separately.

TODO: 
 - test each server endpoint.
 - test that component is properly rendered
 - refactor the Backend separate the typedef and resolver from the index to different files
 - with test its possible to make a CI
 - 

## Start All 
In main folder execute
```
$ npm install
```
and 
```
$ npm start
```

if some permission error happen with script you have to execute
```
$ sudo chmod +x back.sh && sudo chmod +x front.sh 
```

## Start only backend
```
$ cd backend
$ npm install
$ nodemon & node robot.js
```

## Start only frontend
```
cd frontend
npm install
npm run start
```