var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SiteWBA_1 = new ol.format.GeoJSON();
var features_SiteWBA_1 = format_SiteWBA_1.readFeatures(json_SiteWBA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiteWBA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiteWBA_1.addFeatures(features_SiteWBA_1);
var lyr_SiteWBA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SiteWBA_1, 
                style: style_SiteWBA_1,
                popuplayertitle: "Site WBA",
                interactive: true,
    title: 'Site WBA<br />\
    <img src="styles/legend/SiteWBA_1_0.png" /> Crusher-Efo<br />\
    <img src="styles/legend/SiteWBA_1_1.png" /> Pit WBA<br />\
    <img src="styles/legend/SiteWBA_1_2.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_SiteWBA_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SiteWBA_1];
lyr_SiteWBA_1.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Deskripsi': 'Deskripsi', 'Dok.': 'Dok.', });
lyr_SiteWBA_1.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Deskripsi': 'TextEdit', 'Dok.': 'ExternalResource', });
lyr_SiteWBA_1.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Deskripsi': 'inline label - always visible', 'Dok.': 'no label', });
lyr_SiteWBA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});