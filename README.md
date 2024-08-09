# incubyte-tdd
# String Calculator Application

## Overview

This project is a String Calculator application that performs addition operations based on input strings. It supports custom delimiters, handles newlines, and throws errors for negative numbers.

## Prerequisites

- **Node.js** (>= 14.x)
- **npm** (Node Package Manager)

## Setup

Follow these steps to set up and run the project:

1. **Clone the Repository**

    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Start the Application**

    ```bash
    npm start
    ```

    The application will be available at [http://localhost:3000](http://localhost:3000).

## Running Test Cases

To ensure everything is working correctly, run the test cases using Jest:

1. **Run Tests**

    ```bash
    npm test
    ```

    This command executes all test cases defined in your project. Jest will display the results, including details of passed and failed tests.

2. **View Test Results**

    After running the tests, check the terminal output for a summary of test results and any errors.

## API Documentation

### Base URL

The base URL for the API is [http://localhost:3000](http://localhost:3000).

### Endpoints

#### `POST /calculate`

Calculates the sum from the input string.

- **Request:**

    ```bash
    curl -X POST http://localhost:3000/add \
    -H "Content-Type: application/json" \
    -d '{"input": "1,2,3"}'
    ```

- **Response:**

    ```json
    {
        "result": 6
    }
    ```

- **Error Responses:**

    - **Negative Numbers**

      ```bash
      curl -X POST http://localhost:3000/add \
      -H "Content-Type: application/json" \
      -d '{"input": "1,-2,3"}'
      ```

      **Response:**

      ```json
      {
          "error": "Negatives not allowed: -2"
      }
      ```

    - **Custom Delimiters**

      ```bash
      curl -X POST http://localhost:3000/add \
      -H "Content-Type: application/json" \
      -d '{"input": "//;\n1;2;3"}'
      ```

      **Response:**

      ```json
      {
          "result": 6
      }
      ```

### Error Handling

Errors will be returned in JSON format with an `error` key detailing the issue.

## Troubleshooting

- **Application Not Starting**: Verify that Node.js is properly installed, all dependencies are installed, and port 3000 is available.
- **Test Failures**: Review the test output for specific error messages and adjust your code or test cases accordingly.

For more assistance, consult the [Jest documentation](https://jestjs.io/docs/en/getting-started) for test-related issues and the [Node.js documentation](https://nodejs.org/en/docs/) for application-related issues.

---

Feel free to adjust this README to match the exact details and requirements of your project.
