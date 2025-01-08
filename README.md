Crypto Views
============

Crypto Views is a React-based application that provides users with cryptocurrency data and charts. The project includes internationalization (i18n) for multilingual support and a mock backend server for serving cryptocurrency data.

Features
--------

-   **Cryptocurrency List**: Displays a list of cryptocurrencies with their current price and percentage change.
-   **Interactive Charts**: View detailed 12-month historical price data for selected cryptocurrencies.
-   **Internationalization (i18n)**: Supports multiple languages (English and Spanish by default).
-   **Mock Backend Server**: Serves static cryptocurrency data using Node.js and Express.
-   **Responsive Design**: Fully responsive layout using TailwindCSS.

* * * * *

Technologies Used
-----------------

### Frontend

-   **React**: For building the user interface.
-   **React Router**: For managing navigation.
-   **Chart.js**: For rendering dynamic charts.
-   **TailwindCSS**: For styling the application.
-   **i18next**: For internationalization.
-   **React-i18next**: Integration of i18next into React.

### Backend

-   **Node.js**: Runtime for the backend server.
-   **Express**: Lightweight web framework for serving data.

### Development Tools

-   **Webpack**: Module bundler for building the frontend.
-   **ESLint**: For code linting.
-   **JSON Loader**: Handles JSON files in the frontend.

* * * * *

Installation and Setup
----------------------

### Prerequisites

Ensure you have the following installed:

-   **Node.js**: Version 14 or later
-   **npm**: Version 6 or later

### Clone the Repository

bash

Copy code{

    "name": "cryptoviews",

    "private": true,

    "workspaces": [

        "backend",

        "frontend"

    ],

    "scripts": {

        "start": "concurrently \"npm run --prefix backend start\"  \"npm run --prefix frontend start\""

    },

    "devDependencies": {

        "concurrently": "^9.1.2"

    }

}
Crypto Views
============

Crypto Views is a React-based application that provides users with cryptocurrency data and charts. The project includes internationalization (i18n) for multilingual support and a mock backend server for serving cryptocurrency data.

Features
--------

-   **Cryptocurrency List**: Displays a list of cryptocurrencies with their current price and percentage change.
-   **Interactive Charts**: View detailed 12-month historical price data for selected cryptocurrencies.
-   **Internationalization (i18n)**: Supports multiple languages (English and Spanish by default).
-   **Mock Backend Server**: Serves static cryptocurrency data using Node.js and Express.
-   **Responsive Design**: Fully responsive layout using TailwindCSS.

* * * * *

Technologies Used
-----------------

### Frontend

-   **React**: For building the user interface.
-   **React Router**: For managing navigation.
-   **Chart.js**: For rendering dynamic charts.
-   **TailwindCSS**: For styling the application.
-   **i18next**: For internationalization.
-   **React-i18next**: Integration of i18next into React.

### Backend

-   **Node.js**: Runtime for the backend server.
-   **Express**: Lightweight web framework for serving data.

### Development Tools

-   **Webpack**: Module bundler for building the frontend.
-   **ESLint**: For code linting.
-   **Concurrently**: Runs both the frontend and backend servers with a single command.

* * * * *

Installation and Setup
----------------------

### Prerequisites

Ensure you have the following installed:

-   **Node.js**: Version 14 or later
-   **npm**: Version 6 or later

### Clone the Repository

bash

Copy code

`git clone https://github.com/your-username/crypto-views.git
cd crypto-views`

### Install Dependencies

1.  Install all dependencies for the monorepo:

    bash

    Copy code

    `npm install`

* * * * *

Running the Project
-------------------

### Start the Frontend and Backend

Run the following command from the root directory to start both the backend and frontend servers:

bash

Copy code

`npm start`

-   The **backend** will run on `http://localhost:4000`.
-   The **frontend** will run on `http://localhost:3000`.

* * * * *

Project Structure
-----------------

bash

Copy code

`crypto-views/
├── backend/
│   ├── data.json              # Mock data for cryptocurrencies
│   ├── server.js              # Backend server implementation
│   └── package.json           # Backend dependencies and scripts
├── frontend/
│   ├── public/
│   │   └── locales/           # Translation files
│   │       ├── en/translation.json
│   │       └── es/translation.json
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── pages/             # React pages (e.g., Dashboard)
│   │   ├── i18n.js            # Internationalization configuration
│   │   ├── App.js             # Main application component
│   │   └── index.js           # Entry point
│   └── package.json           # Frontend dependencies and scripts
├── package.json               # Monorepo configuration and shared scripts
├── README.md                  # Documentation
└── .gitignore                 # Git ignore file`

* * * * *

Key Functionality
-----------------

### Backend

-   **Mock Data**: `data.json` provides static data for cryptocurrencies.
-   **Endpoints**:
    -   `/api/cryptos`: Returns the list of all cryptocurrencies.
    -   `/api/cryptos/:id`: Returns historical data for a specific cryptocurrency.

### Frontend

-   **Dashboard**: Main page displaying the cryptocurrency list and interactive chart.
-   **Language Switcher**: Allows users to toggle between English and Spanish.
-   **Dynamic Chart**: Updates based on the selected cryptocurrency.

* * * * *

How to Add a New Language
-------------------------

1.  Add a new folder in `frontend/public/locales` with the language code (e.g., `fr` for French).
2.  Add a `translation.json` file inside the new folder.
3.  Update the `i18n.js` configuration if needed.

* * * * *

Known Issues
------------

-   **CORS Errors**: Ensure the backend server is running on `http://localhost:4000`.
-   **Missing Translations**: Verify that all keys are present in the translation files.

* * * * *

Future Improvements
-------------------

-   **API Integration**: Replace the mock backend with real-time data from a cryptocurrency API.
-   **Dark Mode**: Add a toggle for dark/light themes.
-   **User Authentication**: Allow users to save preferences and charts.

* * * * *

License
-------

This project is licensed under the MIT License. See the `LICENSE` file for details.

* * * * *

Let me know if you need additional changes or further clarifications! 🚀
`git clone https://github.com/your-username/crypto-views.git
cd crypto-views`

### Install Dependencies

1.  **Install Frontend Dependencies**:

    bash

    Copy code

    `cd frontend
    npm install`

2.  **Install Backend Dependencies**:

    bash

    Copy code

    `cd ../backend
    npm install`

* * * * *

Running the Project
-------------------

### Start the Backend Server

1.  Navigate to the `backend` folder:

    bash

    Copy code

    `cd backend`

2.  Start the server:

    bash

    Copy code

    `npm start`

    The backend will run on `http://localhost:4000`.

### Start the Frontend

1.  Navigate to the `frontend` folder:

    bash

    Copy code

    `cd ../frontend`

2.  Start the development server:

    bash

    Copy code

    `npm start`

    The frontend will run on `http://localhost:3000`.

* * * * *

Project Structure
-----------------

bash

Copy code

`crypto-views/
├── backend/
│   ├── data.json              # Mock data for cryptocurrencies
│   ├── server.js              # Backend server implementation
│   └── package.json           # Backend dependencies and scripts
├── frontend/
│   │   ├── src/
        ├── i18n/
│   │   └── locales/           # Translation files
│   │       ├── en/translation.json
│   │       └── es/translation.json
│   │   ├── components/        # React components
│   │   ├── pages/             # React pages (e.g., Dashboard)
│   │   ├── i18n.js            # Internationalization configuration
│   │   ├── App.js             # Main application component
│   │   └── index.js           # Entry point
│   └── package.json           # Frontend dependencies and scripts
├── README.md                  # Documentation
└── .gitignore                 # Git ignore file`

* * * * *

Key Functionality
-----------------

### Backend

-   **Mock Data**: `data.json` provides static data for cryptocurrencies.
-   **Endpoints**:
    -   `/api/cryptos`: Returns the list of all cryptocurrencies.
    -   `/api/cryptos/:id`: Returns historical data for a specific cryptocurrency.

### Frontend

-   **Dashboard**: Main page displaying the cryptocurrency list and interactive chart.
-   **Language Switcher**: Allows users to toggle between English and Spanish.
-   **Dynamic Chart**: Updates based on the selected cryptocurrency.

* * * * *

How to Add a New Language
-------------------------

1.  Add a new folder in `frontend/public/locales` with the language code (e.g., `fr` for French).
2.  Add a `translation.json` file inside the new folder.
3.  Update the `i18n.js` configuration if needed.

* * * * *

Known Issues
------------

-   **CORS Errors**: Ensure the backend server is running on `http://localhost:4000`.
-   **Missing Translations**: Verify that all keys are present in the translation files.

* * * * *

Future Improvements
-------------------

-   **API Integration**: Replace the mock backend with real-time data from a cryptocurrency API.
-   **Dark Mode**: Add a toggle for dark/light themes.
-   **User Authentication**: Allow users to save preferences and charts.

* * * * *

License
-------

This project is licensed under the MIT License. See the `LICENSE` file for details.

* * * * *

Let me know if you want to refine or add anything else! 🚀
