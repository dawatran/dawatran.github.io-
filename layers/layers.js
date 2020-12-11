var wms_layers = [];


        var lyr_BDortho_0 = new ol.layer.Tile({
            'title': 'BD ortho',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg'
            })
        });
var format_communesconcernes_1 = new ol.format.GeoJSON();
var features_communesconcernes_1 = format_communesconcernes_1.readFeatures(json_communesconcernes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communesconcernes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communesconcernes_1.addFeatures(features_communesconcernes_1);
var lyr_communesconcernes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_communesconcernes_1, 
                style: style_communesconcernes_1,
                interactive: true,
                title: '<img src="styles/legend/communesconcernes_1.png" /> communes concernées'
            });
var format_Double_2 = new ol.format.GeoJSON();
var features_Double_2 = format_Double_2.readFeatures(json_Double_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Double_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Double_2.addFeatures(features_Double_2);
var lyr_Double_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Double_2, 
                style: style_Double_2,
                interactive: true,
    title: 'Double<br />\
    <img src="styles/legend/Double_2_0.png" /> Mixte<br />'
        });
var format_Test_3 = new ol.format.GeoJSON();
var features_Test_3 = format_Test_3.readFeatures(json_Test_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Test_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Test_3.addFeatures(features_Test_3);
var lyr_Test_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Test_3, 
                style: style_Test_3,
                interactive: true,
    title: 'Test<br />\
    <img src="styles/legend/Test_3_0.png" /> Cécilia<br />\
    <img src="styles/legend/Test_3_1.png" /> Francine<br />\
    <img src="styles/legend/Test_3_2.png" /> Guillaume<br />'
        });

lyr_BDortho_0.setVisible(true);lyr_communesconcernes_1.setVisible(true);lyr_Double_2.setVisible(true);lyr_Test_3.setVisible(true);
var layersList = [lyr_BDortho_0,lyr_communesconcernes_1,lyr_Double_2,lyr_Test_3];
lyr_communesconcernes_1.set('fieldAliases', {'fid': 'fid', 'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', });
lyr_Double_2.set('fieldAliases', {'fid': 'fid', 'Commune': 'Commune', 'Numéro': 'Numéro', 'Propriétaire': 'Propriétaire', 'Section': 'Section', 'Surface (HA)': 'Surface (HA)', });
lyr_Test_3.set('fieldAliases', {'fid': 'fid', 'Commune': 'Commune', 'Section': 'Section', 'Numéro': 'Numéro', 'Propriétaire': 'Propriétaire', 'Surface (HA)': 'Surface (HA)', });
lyr_communesconcernes_1.set('fieldImages', {'fid': 'TextEdit', 'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', });
lyr_Double_2.set('fieldImages', {'fid': 'TextEdit', 'Commune': 'TextEdit', 'Numéro': 'TextEdit', 'Propriétaire': 'TextEdit', 'Section': 'TextEdit', 'Surface (HA)': 'TextEdit', });
lyr_Test_3.set('fieldImages', {'fid': 'Hidden', 'Commune': 'Range', 'Section': 'TextEdit', 'Numéro': 'Range', 'Propriétaire': 'TextEdit', 'Surface (HA)': 'TextEdit', });
lyr_communesconcernes_1.set('fieldLabels', {'fid': 'no label', 'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', });
lyr_Double_2.set('fieldLabels', {'fid': 'no label', 'Commune': 'inline label', 'Numéro': 'inline label', 'Propriétaire': 'inline label', 'Section': 'inline label', 'Surface (HA)': 'inline label', });
lyr_Test_3.set('fieldLabels', {'Commune': 'inline label', 'Section': 'inline label', 'Numéro': 'inline label', 'Propriétaire': 'inline label', 'Surface (HA)': 'inline label', });
lyr_Test_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});