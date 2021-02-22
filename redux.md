# What is Redux?
- state management library
- makes creating complex applications easier
- not required to create a React app!
- not limited to working with just React

## Redux Cycle
Action Creator -> Action -> Dispatch -> Reducers -> State

An **Action Creator** produces an **Action Object** which gets fed to **Dispatch** which forwards copies of the action to **Reducers** which creates new **State** which is available for us to consume. 

## Insurance Company Analogy

Person w/ Form -> Form -> Form Receiver -> Departments -> Compiled Department Data

- Action Creator: a function that returns a plain javascript object
- Action: javascript object returned by action creator, contains a TYPE and PAYLOAD
  - TYPE: describes some change that we might want to make
  - PAYLOAD: describes some context around the change we want to make
- Dispatch: a function that takes in an action and sends it to our reducers
- Reducers: a function that is responsible for taking in an action and some existing amount of data, processes the action and returns the modified data to the state
- State: All of our information is consolidated within this single object 

## Action Creators
```
// People dropping off a form 
// 1. create policy
const createPolicy = (name, amount) => {
  return {
    // Action (a form in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount,
    },
  }
}

// 2. create claim
const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect,
    },
  }
}

// 3. delete policy
const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name,
    },
  }
}
```

## Dispatch
```
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
	accounting: accounting,
	claimsHistory: claimsHistory,
	policies: policies
});

const store = createStore(ourDepartments);

// The form receiver, we want to pass the dispatch function an action. The dispatch will make a copy of it and send it to each of our reducers.
store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("Jim", 30));
store.dispatch(createPolicy("Bob", 40));
store.dispatch(createClaim("Alex", 120));
store.dispatch(createClaim("Jim", 50));
store.dispatch(deletePolicy("Bob"));

console.log(store.getState());
```

## Reducers
```
// Reducers (Departments!)
const claimsHistory = (oldListOfClaims = [], action) => {
	if (action.type === "CREATE_CLAIM") {
		// we care about this action (FORM)
		return [...oldListOfClaims, action.payload];
	}
	// we don't care about the action
	return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
	if (action.type === "CREATE_CLAIM") {
		return bagOfMoney - action.payload.amountOfMoneyToCollect;
	}
	if (action.type === "CREATE_POLICY") {
		return bagOfMoney + action.payload.amount;
	}
	return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
	if (action.type === "CREATE_POLICY") {
		return [...listOfPolicies, action.payload.name];
	} else if (action.type === "DELETE_POLICY") {
		return listOfPolicies.filter((name) => name !== action.payload.name);
	}
	return listOfPolicies;
};
```

