# Geovisto HeatLayer Tool

Tool which provides the heatmap layer functionality for [Geovisto core library](https://github.com/geovisto/geovisto).

This repository is a snapshot of Geoviosto `tools/layers/heat` derived from the development repository: [geovisto/geovisto-map](https://github.com/geovisto/geovisto-map).

## Usage

![Geovisto HeatLayer Tool](https://user-images.githubusercontent.com/44326793/211210483-2bf57921-1678-4a24-96f6-bc016ad33c3b.png)

```js
import { GeovistoHeatLayerTool } from 'geovisto-layer-heat';
import 'geovisto-layer-heat/dist/index.css';


// create instance of map with given props
const map = Geovisto.createMap({
  // ...
  tools?: Geovisto.createMapToolsManager([
    // instances of Geovisto tools (extensions) which will be directly used in the map
    // ...
    GeovistoHeatLayerTool.createTool({
      id: "geovisto-tool-layer-heat"
    }),
  ])
});

// rendering of the map
map.draw(Geovisto.getMapConfigManagerFactory().default({
  // initial settings of the map can be overriden by the map config - JSON structure providing user settings
  // ...
  tools?: [
    // config of Geovisto tools (extensions) used in the map
    // ...
    {
      "type": "geovisto-tool-layer-heat",
      "id": "geovisto-tool-layer-heat",
      "enabled": true,
      "layerName": "Heat layer ",
      // mapping of data domains to data dimensions
      "data": {
        "latitude": "lat", // latitude in degrees
        "longitude": "long", // longitude in degrees
        "intensity": "cases", // intensity dimension
        "radius": 10, // radius of each "point" of the heatmap
        "gradient": "Default", // color blindness gradient ["Default", "Protanopia/Deuteranopia A", "Protanopia/Deuteranopia B", "Tritanopia", "Monochromatic"]
        "blur": 10, // amount of blur of each "point" of the heatmap
        "zoom": "Normal" // zoom level where the points reach maximum intensity ["Normal", "Min", "Max"]
      }
    },
    // ...
  ]
}));
```

## Instalation

`npm install --save geovisto-layer-heat`

Peer dependencies:

`npm install --save geovisto leaflet`

## Authors and Contributors

Author: [Petr Kašpar](https://github.com/xkaspa40), [Vladimír Korenčik](https://github.com/froztt)

Contributors: [Jiři Hynek](https://github.com/jirka)

## License

[MIT](https://github.com/geovisto/geovisto-layer-heat/blob/master/LICENSE)

### Keywords

[gis](https://www.npmjs.com/search?q=keywords:gis) [map](https://www.npmjs.com/search?q=keywords:map) [geovisto](https://www.npmjs.com/search?q=keywords:geovisto) [leaflet](https://www.npmjs.com/search?q=keywords:leaflet) [spatial-data](https://www.npmjs.com/search?q=keywords:spatial-data) [visualization](https://www.npmjs.com/search?q=keywords:visualization) [heat](https://www.npmjs.com/search?q=keywords:heat) [heatmap](https://www.npmjs.com/search?q=keywords:heatmap)
