const sketch = require('sketch');
const UI = require('sketch/ui');

const _ = require('lodash');

export default function(context) {
  const document = sketch.fromNative(context.document)
  const layers = document.selectedPage.layers;

  let artboards = _.filter(layers, layer => layer.type === 'Artboard');
  artboards = _.sortBy(artboards, artboard => artboard.name );
  const artboardsName = _.map(artboards, artboard => artboard.name);
  
  const selection = UI.getSelectionFromUser(
    "Artboards in the current page",
    artboardsName
  );

  const ok = selection[2];
  const index = selection[1];
  if (ok) {
    document.centerOnLayer(artboards[index]);
  }
}
