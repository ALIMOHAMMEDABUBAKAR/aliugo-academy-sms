# Aliugo Academy SMS API Documentation

This document provides a comprehensive overview of the Aliugo Academy SMS API, including authentication, student management, and user information retrieval.

## Authentication

The API uses JSON Web Tokens (JWT) for authentication. To access protected endpoints, you must include an `Authorization` header with a valid access token.

### 1. Obtain Token

*   **Endpoint:** `/api/token/`
*   **Method:** `POST`
*   **Description:** Authenticates a user and returns an access and refresh token pair.
*   **Request Body:**

| Field      | Type   | Description                |
| :--------- | :----- | :------------------------- |
| `username` | String | The user's username.       |
| `password` | String | The user's password.       |

*   **Response:**

| Field     | Type   | Description                |
| :-------- | :----- | :------------------------- |
| `access`  | String | The JWT access token.      |
| `refresh` | String | The JWT refresh token.     |

### 2. Refresh Token

*   **Endpoint:** `/api/token/refresh/`
*   **Method:** `POST`
*   **Description:** Refreshes an expired access token using a valid refresh token.
*   **Request Body:**

| Field     | Type   | Description                |
| :-------- | :----- | :------------------------- |
| `refresh` | String | The JWT refresh token.     |

*   **Response:**

| Field    | Type   | Description                |
| :------- | :----- | :------------------------- |
| `access` | String | A new JWT access token.    |

## User

### 1. Get User Profile

*   **Endpoint:** `/api/me/`
*   **Method:** `GET`
*   **Description:** Retrieves the profile of the currently authenticated user.
*   **Authentication:** Required
*   **Response:**

| Field      | Type   | Description                |
| :--------- | :----- | :------------------------- |
| `id`       | Integer| The user's ID.             |
| `username` | String | The user's username.       |
| `email`    | String | The user's email address.  |
| `role`     | String | The user's role (ADMIN, STAFF, or STUDENT). |

## Students

### 1. Register Student

*   **Endpoint:** `/api/register/`
*   **Method:** `POST`
*   **Description:** Registers a new student. This endpoint is only accessible to admin users.
*   **Authentication:** Required (Admin only)
*   **Request Body:** `multipart/form-data` with the following fields:

| Field                   | Type   | Description                                      |
| :---------------------- | :----- | :----------------------------------------------- |
| `level`                 | String | Nursery, Primary, Junior Secondary, Senior Secondary |
| `year`                  | Integer| Admission year                                   |
| `surname`               | String | Student's surname                                |
| `firstname`             | String | Student's first name                             |
| `othername`             | String | Student's other name (optional)                  |
| `gender`                | String | Male or Female                                   |
| `dob`                   | Date   | Date of birth (YYYY-MM-DD)                       |
| `nationality`           | String | Student's nationality (defaults to Nigeria)      |
| `state`                 | String | Student's state of origin                        |
| `lga`                   | String | Student's Local Government Area                  |
| `address`               | String | Student's residential address                    |
| `nin`                   | String | National Identification Number (required for SSS) |
| `guardian_name`         | String | Guardian's full name                             |
| `guardian_phone`        | String | Guardian's phone number                          |
| `guardian_alt_phone`    | String | Guardian's alternate phone number (optional)     |
| `guardian_relationship` | String | Relationship to the student                      |
| `guardian_occupation`   | String | Guardian's occupation (optional)                 |
| `guardian_address`      | String | Guardian's address (optional)                    |
| `class_applying`        | String | The class the student is applying for            |
| `previous_school`       | String | Name of the previous school attended (optional)  |
| `last_class_completed`  | String | The last class the student completed (optional)  |
| `department`            | String | Science, Art, or Commercial (for secondary)      |
| `passport_photo`        | File   | Passport photograph                              |
| `birth_certificate`     | File   | Birth certificate                                |
| `testimonial`           | File   | Testimonial from previous school (optional)      |
| `transfer_certificate`  | File   | Transfer certificate from previous school (optional) |
| `bece_result`           | File   | BECE result slip (optional)                      |
| `immunization_card`     | File   | Immunization card (optional)                     |

*   **Response:** The newly created student object.

### 2. Get Students List

*   **Endpoint:** `/api/students/`
*   **Method:** `GET`
*   **Description:** Retrieves a list of all students.
*   **Authentication:** Required
*   **Response:** An array of student objects. Each object includes `name` (full name) and `student_class` (class applying for) for frontend compatibility.

### 3. Get Student Details

*   **Endpoint:** `/api/students/<id>/`
*   **Method:** `GET`
*   **Description:** Retrieves the details of a specific student.
*   **Authentication:** Required
*   **Response:** A student object.

### 4. Update Student

*   **Endpoint:** `/api/students/<id>/`
*   **Method:** `PUT`
*   **Description:** Updates the details of a specific student. This endpoint is only accessible to admin users.
*   **Authentication:** Required (Admin only)
*   **Request Body:** The fields to be updated (e.g., `surname`, `firstname`, `class_applying`, `gender`).
*   **Response:** The updated student object.

### 5. Delete Student

*   **Endpoint:** `/api/students/<id>/`
*   **Method:** `DELETE`
*   **Description:** Deletes a specific student. This endpoint is only accessible to admin users.
*   **Authentication:** Required (Admin only)
*   **Response:** `204 No Content`
