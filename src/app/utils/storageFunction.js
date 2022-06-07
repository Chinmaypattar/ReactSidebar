// To set a value in local storage
export const setLocalStorage = (key, value) => {
    if (typeof value === "string") {
      if (value) {
        localStorage.setItem(key, value);
      }
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  
  // To get a value from local storage
  export const getLocalStorage = key => {
    let retrievedData;
    if (localStorage && localStorage.getItem(key)) {
      retrievedData = localStorage.getItem(key);
      if (typeof retrievedData === "string") {
        return retrievedData;
      }
      return JSON.parse(retrievedData);
    }
    return retrievedData;
  };
  
  // To get an object from local storage
  // Use this method to retrieve only objects from localStorage
  export const getObjectFromLocalStorage = key => {
    let retrievedData;
    if (localStorage && localStorage.getItem(key)) {
      retrievedData = localStorage.getItem(key);
      retrievedData = JSON.parse(retrievedData);
      return retrievedData;
    }
    return retrievedData;
  };
  
  // To Remove Particular Local Storage Data
  export const deleteLocalStorage = key => {
    if (localStorage && localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
  };