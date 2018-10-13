# Ghent Parking App

Ghent Parking App visualizes the parking data from Open Data Ghent.

### Prerequisites

- Yarn

### Installation and setup

Clone the repository

```
git clone https://github.com/Yensbroo/ghent-parkings
```

Go to folder destination

```
cd ghent-parkings
```

Install dependencies

```
yarn install
```

Run the application

```
yarn start
```

## Code

The [ParkingsPage](https://github.com/Yensbroo/ghent-parkings/blob/develop/src/pages/parkingsPage.jsx) component is the overview of all the available parkings which renders the presentational [ParkingDetail](https://github.com/Yensbroo/ghent-parkings/blob/develop/src/components/parkingDetail.jsx) component displaying the data retreived from the redux store.

When the [ParkingsPage](https://github.com/Yensbroo/ghent-parkings/blob/develop/src/pages/parkingsPage.jsx) component renders, the available capacity of each parking from the API gets stored in the capacity state in order to update the available capacity when a user clicks the Park here button.

Detaild information of a certain parking gets displayed in the [ParkingPage](https://github.com/Yensbroo/ghent-parkings/blob/develop/src/pages/parkingPage.jsx) component which passes data to the [ParkingDetail](https://github.com/Yensbroo/ghent-parkings/blob/develop/src/components/parkingDetail.jsx) component.

## Testing

For this app i used Jest and Enzyme to test.

In order to run the tests use

```
yarn test
```

## Deployment

This explains how to deploy the app to Heroku. Please make sure you have an account on Heroku.

Create the heroku app

```
heroku create ghent-parkings --buildpack mars/create-react-app
```

Commit & deploy

```
git add .
git commit -m "enter commit message here"
git push heroku master
```

Visit the app

```
heroku open
```

## Built With

- React
- Redux
- Bootstrap

## Authors

- **Yens Broothaers** - [YensBroo](https://github.com/YensBroo)
