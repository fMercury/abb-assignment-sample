# ABB_assignment_sample

## Description: 

In the backend folder is the Apollo server code and a robot's script that simulates the periodic entry of new data. The information is always the same. The data is from a new piece/part with 3 features and each with a different number of controls.

In the frontend folder there is a react application. The deviation control numbers that the robot sends are static and according to the value a different emoticon is rendered. The head color of each frame change with each new entry of data from the subscription. Random numbers are generated in frontend and component style values are changed.

TODO: 
 - test each server endpoint.
 - test that each component is properly rendered
 - refactor Backend, separate the typedef and resolver to separated files
 - with test its possible to make a CI setup
 - 

## Setup
Next, the scripts to start the general project locally, or each separately.

### Start All 
In main folder execute
```
$ npm install
```
and 
```
$ npm start
```

Server will be on http://localhost:4000 

Frontend on http://localhost:3000

if some permission message happen with bash scripts execute
```
$ sudo chmod +x back.sh && sudo chmod +x front.sh 
```
 
### Start only backend
```
$ cd backend
$ npm install
$ nodemon & node robot.js
```

### Start only frontend
```
cd frontend
npm install
npm run start
```

## Operations 

### Query Example
```
query {
  partQuery{
    name
    features{
      name
      controls{
        name
        dev
        devOutTotal
        expected
      }
    }
  }
}
```

### Mutation Example
```
mutation {
  pushPart( newPart: {
                name:"Part A", 
                features:[  {name:"Seam", 
                            controls: [	{name: "X", dev:0, devOutTotal:0, expected:0}, 
                                        {name: "Y", dev:0, devOutTotal:0, expected:1},
                                        {name: "Z", dev:0, devOutTotal:0, expected:-1},
                                        {name: "length", dev:0, devOutTotal:0, expected:0},
                                        {name: "diameter", dev:0, devOutTotal:0, expected:1}]}, 
                            {name:"Slot", 
                            controls: [	{name: "X", dev:0, devOutTotal:0, expected:0}, 
                                        {name: "Y", dev:0, devOutTotal:0, expected:1},
                                        {name: "Z", dev:0, devOutTotal:0, expected:-1},
                                        {name: "length", dev:0, devOutTotal:0, expected:0},
                                        {name: "A", dev:0, devOutTotal:0, expected:0}, 
                                        {name: "B", dev:0, devOutTotal:0, expected:1},
                                        {name: "C", dev:0, devOutTotal:0, expected:-1},
                                        {name: "length", dev:0, devOutTotal:0, expected:0}]}, 
                            {name:"Hole", 
                            controls: [	{name: "X", dev:0, devOutTotal:0, expected:0}, 
                                        {name: "Y", dev:0, devOutTotal:0, expected:1},
                                        {name: "Z", dev:0, devOutTotal:0, expected:-1},
                                        {name: "M", dev:0, devOutTotal:0, expected:0}, 
                                        {name: "N", dev:0, devOutTotal:0, expected:1},
                                        {name: "L", dev:0, devOutTotal:0, expected:-1}]},
                            {name:"Aux", 
                            controls: [	{name: "X", dev:0, devOutTotal:0, expected:0}, 
                                        {name: "Y", dev:0, devOutTotal:0, expected:1},
                                        {name: "Z", dev:0, devOutTotal:0, expected:-1},
                                        {name: "M", dev:0, devOutTotal:0, expected:0}, 
                                        {name: "N", dev:0, devOutTotal:0, expected:1},
                                        {name: "L", dev:0, devOutTotal:0, expected:-1}]},
        ] 
            } ){
	name
  }
}
```

### Subscription Example
```
subscription{
  newPartNotification{
    name
    features{
      name
      controls{
        name
        dev
        devOutTotal
        expected
      }
    }
  }
}
```
