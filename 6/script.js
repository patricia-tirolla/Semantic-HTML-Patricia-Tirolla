// TODO: Set item in localStorage
localStorage.setItem("name:", "Kevin");
// TODO: Get item from localStorage
localStorage.getItem("name:");
// TODO: Remove item from localStorage
localStorage.removeItem("name:");
// TODO: Clear all items from localStorage
localStorage.clear();
// TODO: Add an object to localStorage
const user1 = { name: 'Gisele', age: '43'};
localStorage.setItem('user', JSON.stringify(user1));
// TODO: Get an object from localStorage
JSON.parse(localStorage.getItem('user'));
// TODO: Set item in sessionStorage
sessionStorage.setItem("name:", "kevin");
// TODO: Get item from sessionStorage
sessionStorage.getItem("name:");
// TODO: Remove item from sessionStorage
sessionStorage.removeItem("name:");
// TODO: Clear all items from sessionStorage
sessionStorage.clear();
// TODO: Add an object to sessionStorage
const user = { name: 'Gisele', age: '43'};
sessionStorage.setItem('user', JSON.stringify(user));
// TODO: Get an object from sessionStorage
JSON.parse(sessionStorage.getItem('user'));