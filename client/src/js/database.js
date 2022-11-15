import { openDB } from "idb";

// creating the database
const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

//=================================
//=================================
// TODO: Add logic to a method that accepts some content and adds it to the database
//=================================
//=================================
// Exporting a function we will use to PUT to the database:
export const putDb = async (content) => {
  // Creating a connection to the database and specifying the version we want to use:
  const jateDb = await openDB("jate", 1);
  // Opens a new transaction and then specifies the database and data privileges.
  // readwrite tells the database to allow changes:
  const tx = jateDb.transaction("jate", "readwrite");
  // Opens the desired object store.
  // store tells the database to store info via the front end:
  const store = tx.objectStore("jate");
  // Use the .put() method on the store and pass in the content:
  const request = store.put({ id: 1, value: content });
  // Get confirmation of the request:
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

//=================================
//=================================
// TODO: Add logic for a method that gets all the content from the database
//=================================
//=================================
// Exporting a function we will use to GET from the database:
export const getDb = async () => {
  console.log("GET all from the database");
  // Creating a connection to the database and specifying the version we want to use:
  const jateDb = await openDB("jate", 1);
  // Opens a new transaction and then specifies the database and data privileges.
  // readonly tells the database to not allow changes:
  const tx = jateDb.transaction("jate", "readonly");
  // Opens the desired object store.
  // store tells the database to store info via the front end:
  const store = tx.objectStore("jate");
  // Use the .getAll() method to get all data in the database:
  const request = store.getAll();
  // Get confirmation of the request:
  const result = await request;
  console.log("result.value", result);
  return result;
};

initdb();
