# What is Redux?
- state management library
- makes creating complex applications easier
- not required to create a React app!
- not limited to working with just React

## Redux Cycle
Action Creator -> Action -> Dispatch -> Reducers -> State

## Insurance Company Analogy

Person w/ Form -> Form -> Form Receiver -> Departments -> Compiled Department Data

- Action Creator: a function that returns a plain javascript object
- Action: javascript object returned by action creator, contains a TYPE and PAYLOAD
  - TYPE: describes some change that we might want to make
  - PAYLOAD: describes some context around the change we want to make
- Dispatch: a function that takes in an action and sends it to our reducers
- Reducers: a function that is responsible for taking in an action and some existing amount of data, processes the action and returns the modified data to the state
- State: All of our information is consolidated within this single object 
