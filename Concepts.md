1. What is Mongoose?
Ans: Mongoose is an Object Data Modeling (ODM) library for Node.js and MongoDB. It provides a straightforward and schema-based solution to model application data and interact with MongoDB databases. It simplifies the process of writing MongoDB queries and ensures consistency in the structure of the data.

**Key Features of Mongoose:
=>Schema Definition: Mongoose allows you to define the structure of your documents using schemas. You can specify data types, required fields, default values, and validations for your MongoDB documents.
=>Data Validation: Mongoose automatically validates data before saving it to the database based on the schema rules. 
=>Model Creation: Mongoose models are used to create, read, update, and delete documents in a collection.
=>Query Helpers: Provides a simple API to perform CRUD operations and chainable query-building methods.

**When to Use Mongoose:
=>When you need a structured, schema-driven approach for working with MongoDB.
=>When you want built-in data validation and middleware support.
=>When you prefer a more object-oriented approach to working with MongoDB.


2. What is Schema in Mongoose?
Ans: In Mongoose, a schema is a blueprint or structure that defines the shape and content of documents in a MongoDB collection. It acts as a way to enforce data structure in a MongoDB database, which is otherwise schema-less.

**Key Features of a Schema in Mongoose:
=>Defines the Structure of a Document: Specifies the fields, their types, and constraints.
Example: A User schema might have fields like name, email, and password.
 
=>Applies Validation Rules: Enforces specific rules for data, such as required fields, minimum or maximum lengths, etc.

=>Adds Methods and Static Functions: Allows you to define instance methods or static methods for your schema.

=>Middleware Support: Enables pre- and post-hooks for operations like saving, deleting, or updating.

=>Data Transformation: You can modify how data is stored or retrieved using getters, setters, and virtuals.

//Example: Create a Schema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,         // Field type
    required: true,       // Validation: Field is required
    trim: true            // Automatically trim whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true          // Ensures unique email values in the collection
  },
  age: {
    type: Number,
    min: 0,               // Validation: Minimum age is 0
    max: 120              // Validation: Maximum age is 120
  },
  createdAt: {
    type: Date,
    default: Date.now     // Default value is the current date/time
  }
});


3. Difference between schema and model?
Ans: 
=>Schema: Defines the structure and rules of a document (blueprint).
=>Model: Uses the schema to interact with the database (CRUD operations).

4. What is MVC?
Ans: MVC (Model-View-Controller) is a design pattern used in software development to organize code in a way that separates concerns, making applications easier to manage, test, and scale.

It divides an application into three interconnected components:

###Model
**Purpose: Represents the data and business logic.
**Responsibilities:
=> Defines the structure of the data (e.g., database schemas).
=> Handles data-related operations (CRUD - Create, Read, Update, Delete).
=> Enforces validation and rules.

###View
**Purpose: Represents the user interface (UI).
**Responsibilities:
=> Displays data to the user.
=> Handles user interactions like buttons or forms.
=> Does not contain business logic.

###Controller
**Purpose: Acts as an intermediary between the Model and View.
**Responsibilities:
=> Handles user requests (e.g., HTTP requests).
=> Processes data using the model.
=> Passes the data to the view for rendering.


5. How MVC works together?
Ans: 
Step 1 => User Request: The user interacts with the app (e.g., visiting a URL or submitting a form).
Step 2 => Controller: The request is handled by a controller, which communicates with the model.
Step 3 => Model: The model fetches or updates data from the database.
Step 4 => View: The controller sends the data to the view, which renders it for the user.


6. Give a Example flow of MVC pattern.
Ans: 
Step 1 => User Action: Visits /profile/123.
Step 2 => Controller: Receives the request. Calls the model to fetch user data (User.findById(123)).
Step 3 => Model: Queries the database and returns the user.
Step 4 => Controller: Passes the user data to the view.
Step 5 => View: Renders the user’s profile.

7. What is the Key Benefits of MVC?
Ans:
=> Separation of Concerns: Each component has a distinct responsibility.
=> Scalability: Easier to add or modify features.
=> Maintainability: Simplifies debugging and testing.