# HRMS Documentation

## Login Page

### Overview
The login page is a React component that allows users to authenticate themselves by entering their username and password. It communicates with a backend API to validate user credentials and manage session tokens.

### Microservices Architecture
The login functionality is part of a microservices architecture, where different services handle specific functionalities. The login service is responsible for user authentication and interacts with the following components:

1. **API Gateway**: 
   - The entry point for all client requests, routing them to the appropriate microservice.

2. **Authentication Service**:
   - The service that handles user login requests. It validates credentials and issues tokens.

### Backend Integration

1. **API Endpoint**:
   - The login page sends a POST request to the backend API at `http://localhost:5000/api/auth/login`.

2. **Request Format**:
   - The request body should be in JSON format:
     ```json
     {
       "loginId": "user@example.com",
       "password": "yourpassword"
     }
     ```

3. **Response Handling**:
   - On successful authentication, the response will include a token:
     ```json
     {
       "token": "your_jwt_token"
     }
     ```
   - In case of failure, the response will contain an error message:
     ```json
     {
       "message": "Invalid credentials"
     }
     ```

### Components

1. **State Management**:
   - The component uses the `useState` hook to manage two pieces of state:
     - `formData`: An object containing `username` and `password`.
     - `showPassword`: A boolean that toggles the visibility of the password input.

2. **Form Handling**:
   - The `handleSubmit` function is triggered when the form is submitted. It performs the following actions:
     - Prevents the default form submission behavior.
     - Sends a POST request to the backend API with the user's credentials.
     - Handles the response, storing the authentication token in local storage if the login is successful.

3. **UI Elements**:
   - The login form includes:
     - An input field for the username.
     - An input field for the password, with a button to toggle visibility.
     - A submit button labeled "Secure Sign-in".
     - A link for users who have forgotten their password.

### Styling
- The component utilizes Tailwind CSS for styling, ensuring a responsive and visually appealing layout. Key classes include:
  - `min-h-screen`: Ensures the component takes up at least the full height of the screen.
  - `flex`, `items-center`, `justify-center`: Used for centering elements.
  - `bg-gradient-to-br`: Applies a gradient background.

### Usage
To integrate this component into a larger application:
- Import the `LoginPage` component into the main application file (e.g., `App.jsx`).
- Ensure that the backend API is running and accessible at the specified URL.

### Dependencies
- The component relies on the following external libraries:
  - **React**: For building the user interface.
  - **FontAwesome**: For icons used in the password visibility toggle.
