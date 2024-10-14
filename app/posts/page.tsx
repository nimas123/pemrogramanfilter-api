import dataJson from "../../public/data/data.json"; // Import JSON data
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

// Interface for user data
interface IUser {
  id: number;
  name: string;
  hobbies?: { id: number; name: string }[];
  age: number;
  address: string;
  city: string;
  phone: string;
}

const UserList = () => {
  const users: IUser[] = dataJson;

  // Task 1: Retrieve all data
  const getAllUsers = () => users;

  // Task 2: Retrieve data by a specific name
  const getUsersByName = (name: string) => {
    return users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
  };

  // Task 3: Retrieve data by city
  const getUsersByCity = (city: string) => {
    return users.filter(user => user.city.toLowerCase() === city.toLowerCase());
  };

  // Task 4: Retrieve data by minimum age
  const getUsersByAge = (minAge: number) => {
    return users.filter(user => user.age >= minAge);
  };

  // Get all users (now it's being used properly)
  const allUsers = getAllUsers();  // Now this retrieves all users from getAllUsers function
  const usersNamedJohn = getUsersByName("John");
  const usersInNewYork = getUsersByCity("New York");
  const usersOverThirty = getUsersByAge(30);

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">USER PAGE</h1>
      <center><h3>DISPLAY ALL USERS</h3></center>
      {allUsers.map((user) => (  // Using 'allUsers' to display all the users
        <CardList key={user.id}>
          <p>Name: {user.name}</p>
          {user.hobbies && user.hobbies.length > 0 && (
            <p>Hobbies: {user.hobbies.map(hobby => hobby.name).join(", ")}</p>
          )}
          <p>Age: {user.age}</p>
          <p>Address: {user.address}</p>
          <p>City: {user.city}</p>
          <p>Phone: {user.phone}</p>
          <ViewUserButton userId={user.id} />
        </CardList>
      ))}
      <center><h3>DISPLAY USERS WITH SPECIFIC NAME (&quot;John&quot;)</h3></center>
      {usersNamedJohn.map((user) => (
        <CardList key={user.id}>
          <p>Name: {user.name}</p>
          {user.hobbies && user.hobbies.length > 0 && (
            <p>Hobbies: {user.hobbies.map(hobby => hobby.name).join(", ")}</p>
          )}
          <p>Age: {user.age}</p>
          <p>Address: {user.address}</p>
          <p>City: {user.city}</p>
          <p>Phone: {user.phone}</p>
          <ViewUserButton userId={user.id} />
        </CardList>
      ))}
      <center><h3>DISPLAY USERS IN NEW YORK</h3></center>
      {usersInNewYork.map((user) => (
        <CardList key={user.id}>
          <p>Name: {user.name}</p>
          {user.hobbies && user.hobbies.length > 0 && (
            <p>Hobbies: {user.hobbies.map(hobby => hobby.name).join(", ")}</p>
          )}
          <p>Age: {user.age}</p>
          <p>Address: {user.address}</p>
          <p>City: {user.city}</p>
          <p>Phone: {user.phone}</p>
          <ViewUserButton userId={user.id} />
        </CardList>
      ))}
      <center><h3>DISPLAY USERS AGED OVER 30 YEARS</h3></center>
      {usersOverThirty.map((user) => (
        <CardList key={user.id}>
          <p>Name: {user.name}</p>
          {user.hobbies && user.hobbies.length > 0 && (
            <p>Hobbies: {user.hobbies.map(hobby => hobby.name).join(", ")}</p>
          )}
          <p>Age: {user.age}</p>
          <p>Address: {user.address}</p>
          <p>City: {user.city}</p>
          <p>Phone: {user.phone}</p>
          <ViewUserButton userId={user.id} />
        </CardList>
      ))}
    </>
  );
};

export default UserList;
