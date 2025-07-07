// Create a target object
const target = {
  message: "Hello",
  value: 42
};

// Create a handler with get and set traps using Reflect
const handler = {
  get: function(obj, prop) {
    // Log the property access
    console.log(`Getting property '${prop}'`);
    // Use Reflect to get the property value
    return Reflect.get(obj, prop);
  },
  set: function(obj, prop, value) {
    // Log the property setting
    console.log(`Setting property '${prop}' to '${value}'`);
    // Use Reflect to set the property value
    return Reflect.set(obj, prop, value);
  }
};

// Create a proxy object
const proxy = new Proxy(target, handler);

// Access properties (triggers get trap)
console.log(proxy.message); // Output: Getting property 'message' \n Hello

// Set a property (triggers set trap)
proxy.value = 100; // Output: Setting property 'value' to '100'

// Access the updated property
console.log(proxy.value); // Output: Getting property 'value' \n 100

// Add a new property
proxy.newProp = "Proxy is cool!"; // Output: Setting property 'newProp' to 'Proxy is cool!'

// Access the new property
console.log(proxy.newProp); // Output: Getting property 'newProp' \n Proxy is cool!

/*
Expected Console Output:
Getting property 'message'
Hello
Setting property 'value' to '100'
Getting property 'value'
100
Setting property 'newProp' to 'Proxy is cool!'
Getting property 'newProp'
Proxy is cool!
*/
