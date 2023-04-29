# Currency-Converter

Currency-Converter is a simple React-based app that allows users to convert exchange rates by specifying an amount, choosing a base currency, and selecting the currency to convert to.

## Technologies 

The app is built with ReactJs and uses the following packages and tools:

* Dotenv: for managing environment variables
* React Select: a package that allows users to search for and select currencies from a dropdown
* ExchangeRate-API: an API that provides exchange rates data

## State Management 
The app uses both the useContext and useState hooks to manage state. These hooks were chosen because of their simplicity and ease of use. While Redux is a popular choice for state management, it was not used in this app due to the limited time available to learn it.

## Design 
The app consists of 5 components and 1 context. The components were designed to be small, with each component handling a single responsibility. This approach makes it easier to debug, read, and re-use components.
## Data Source

ExchangeRate-API was chosen as the data source for the app because it meets the requirements for the app. The latest endpoint is used to fetch exchange rate data with a base currency, and all exchange rates are calculated based on this currency. This approach reduces the need for fetching data every time the user changes the currency symbol, which can be beneficial for apps with limited fetch data access.

## Validation
The app validates user input for the amount field using regular expressions. If the input is invalid, an error message is displayed to the user.

## Chellenge

I have a bit difficult time to combine "react select" package with data that I gto from API to create options in Select but I handle it by mapping the list and make it as an object and return it 

## Challenges

One challenge faced during development was integrating the React Select package with data from the API to create options in the dropdown. This was addressed by mapping the list and converting it into an object before returning it.

## How to use 
To use this currency converter app, you will need to follow these steps:

git clone https://github.com/your-username/currency-converter.git

cd currency-converter

touch .env

Go to https://www.exchangerate-api.com/ and sign up for a free API key.

REACT_APP_API_KEY=your-api-key-here

Add your API key to the .env file like this:

npm install

npm start with localhots: 3000
