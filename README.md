# [Map Markers](https://jimmeryn.github.io/map-markers/)

Import addresses from .csv file (up to 20) and display all of the addresses on a map, using a different coloured marker for
each category.

## Used technologies

This app was created with:

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [Material-UI](https://material-ui.com/)
- [React Simple Maps](https://www.react-simple-maps.io/)

Geocoding done by:

- [ArcGIS](https://www.arcgis.com/index.html)

## CSV File Structure

Your .csv file structure should look like this:

| Category            | City         | State              | Zip   | Address                 |
| ------------------- | ------------ | ------------------ | ----- | ----------------------- |
| Shop                | Glencoe      | Kentucky           | 41046 | 1650 Tapering Pointe Rd |
| Shop                | Racine       | Ohio(OH)           | 45771 | 49275 Bald Knob Rd      |
| House               | Grove City   | Pennsylvania(PA)   | 16127 | 525 N Liberty Rd        |
| House               | Calumet City | Illinois(IL)       | 60409 | 311 Marquette Ave       |
| Factory             | Bremen       | Alabama(AL)        | 35033 | 117 County Rd #9        |
| Some other category | Monroe       | North Carolina(NC) | 28110 | 1616 Battle Ln          |

(but without headers) E.g.:

```csv

Shop,Glencoe,Kentucky,41046,1650 Tapering Pointe Rd
Shop,Racine,Ohio(OH),45771,49275 Bald Knob Rd
House,Grove City,Pennsylvania(PA),16127,525 N Liberty Rd
House,Calumet City,Illinois(IL),60409,311 Marquette Ave
Factory,Bremen,Alabama(AL),35033,117 County Rd #9
Some other category,Monroe,North Carolina(NC),28110,1616 Battle Ln

```

Order may vary

## Development setup

```sh

# Clone the repo

git clone https://github.com/jimmeryn/map-markers.git

# Go to the repo

cd map-markers

# Install deps

npm install

# Run app

npm start
```
