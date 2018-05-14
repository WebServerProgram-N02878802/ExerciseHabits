function App() { 
    this.Users = [];

    
    this.addUser = (username) => {
        console.log("adding user: " + username)
        var tempuser = new User();
        tempuser.name = username;
        tempuser.map = new Map();
        tempuser.todo = new Todo();
        this.Users.push(tempuser);
    }
    this.getUserMapState = (username) => {console.log("getting state for user: " + username); return this.Users.find( x => x.name == username).map;};
    this.getUserTodoState = (username) => {console.log("getting state for user: " + username); return this.Users.find( x => x.name == username).todo;};
    this.addUserMapMarker = (username, marker) => {console.log("storing map marker on server"); this.Users.find( x => x.name == username).map.MapMarkers.push(marker);}; //test
    this.addUserTodoElement = (username, element) => {console.log("storing todo element on server"); this.Users.find( x => x.name == username).todo.myList.push(element);}; //test
    this.delUserMapMarker =  (username, index) => {console.log("deleting map marker on server"); this.Users.find( x => x.name == username).map.MapMarkers.splice(index, 1);}; //test
    this.delUserTodoElement = (username, index) => {console.log("deleting todo element on server"); this.Users.find( x => x.name == username).todo.myList.splice(index, 1);}; //test
}

function User() {
    this.name = null;
    this.map = null;
    this.todo = null;
}

function Todo() {
    this.MyList = [];
}

function Map() {
    this.MapMarkers = [];
    this.Title = "NP MAP";
    this.Position = {lat: 41.748, lng: -74.083};
    this.Zoom = 16;
}

module.exports = App;