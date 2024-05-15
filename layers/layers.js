var wms_layers = [];

var format_DepartamentodeAntioquia_0 = new ol.format.GeoJSON();
var features_DepartamentodeAntioquia_0 = format_DepartamentodeAntioquia_0.readFeatures(json_DepartamentodeAntioquia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentodeAntioquia_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentodeAntioquia_0.addFeatures(features_DepartamentodeAntioquia_0);
var lyr_DepartamentodeAntioquia_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentodeAntioquia_0, 
                style: style_DepartamentodeAntioquia_0,
                interactive: true,
                title: '<img src="styles/legend/DepartamentodeAntioquia_0.png" /> Departamento de Antioquia'
            });
var format_MunicipiosAfectados_1 = new ol.format.GeoJSON();
var features_MunicipiosAfectados_1 = format_MunicipiosAfectados_1.readFeatures(json_MunicipiosAfectados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosAfectados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosAfectados_1.addFeatures(features_MunicipiosAfectados_1);
var lyr_MunicipiosAfectados_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosAfectados_1, 
                style: style_MunicipiosAfectados_1,
                interactive: true,
                title: '<img src="styles/legend/MunicipiosAfectados_1.png" /> Municipios Afectados'
            });
var format_MunicipiodeLaUnion_2 = new ol.format.GeoJSON();
var features_MunicipiodeLaUnion_2 = format_MunicipiodeLaUnion_2.readFeatures(json_MunicipiodeLaUnion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiodeLaUnion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiodeLaUnion_2.addFeatures(features_MunicipiodeLaUnion_2);
var lyr_MunicipiodeLaUnion_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiodeLaUnion_2, 
                style: style_MunicipiodeLaUnion_2,
                interactive: true,
                title: '<img src="styles/legend/MunicipiodeLaUnion_2.png" /> Municipio de La Union'
            });
var format_AreadeInfluencia_3 = new ol.format.GeoJSON();
var features_AreadeInfluencia_3 = format_AreadeInfluencia_3.readFeatures(json_AreadeInfluencia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreadeInfluencia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreadeInfluencia_3.addFeatures(features_AreadeInfluencia_3);
var lyr_AreadeInfluencia_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreadeInfluencia_3, 
                style: style_AreadeInfluencia_3,
                interactive: true,
                title: '<img src="styles/legend/AreadeInfluencia_3.png" /> Area de Influencia'
            });
var format_AreaSolicitadaExplotar_4 = new ol.format.GeoJSON();
var features_AreaSolicitadaExplotar_4 = format_AreaSolicitadaExplotar_4.readFeatures(json_AreaSolicitadaExplotar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaSolicitadaExplotar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaSolicitadaExplotar_4.addFeatures(features_AreaSolicitadaExplotar_4);
var lyr_AreaSolicitadaExplotar_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaSolicitadaExplotar_4, 
                style: style_AreaSolicitadaExplotar_4,
                interactive: true,
                title: '<img src="styles/legend/AreaSolicitadaExplotar_4.png" /> Area Solicitada Explotar'
            });
var format_AreaProyecto_5 = new ol.format.GeoJSON();
var features_AreaProyecto_5 = format_AreaProyecto_5.readFeatures(json_AreaProyecto_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaProyecto_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaProyecto_5.addFeatures(features_AreaProyecto_5);
var lyr_AreaProyecto_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaProyecto_5, 
                style: style_AreaProyecto_5,
                interactive: true,
                title: '<img src="styles/legend/AreaProyecto_5.png" /> Area Proyecto'
            });
var format_Centrospoblados_6 = new ol.format.GeoJSON();
var features_Centrospoblados_6 = format_Centrospoblados_6.readFeatures(json_Centrospoblados_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrospoblados_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrospoblados_6.addFeatures(features_Centrospoblados_6);
var lyr_Centrospoblados_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centrospoblados_6, 
                style: style_Centrospoblados_6,
                interactive: true,
                title: '<img src="styles/legend/Centrospoblados_6.png" /> Centros poblados'
            });
var format_DrenajseSencilloLaUnion_7 = new ol.format.GeoJSON();
var features_DrenajseSencilloLaUnion_7 = format_DrenajseSencilloLaUnion_7.readFeatures(json_DrenajseSencilloLaUnion_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrenajseSencilloLaUnion_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenajseSencilloLaUnion_7.addFeatures(features_DrenajseSencilloLaUnion_7);
var lyr_DrenajseSencilloLaUnion_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrenajseSencilloLaUnion_7, 
                style: style_DrenajseSencilloLaUnion_7,
                interactive: true,
                title: '<img src="styles/legend/DrenajseSencilloLaUnion_7.png" /> Drenajse Sencillo La Union'
            });
var format_ViasmunicipiosLaCejaLaUnion_8 = new ol.format.GeoJSON();
var features_ViasmunicipiosLaCejaLaUnion_8 = format_ViasmunicipiosLaCejaLaUnion_8.readFeatures(json_ViasmunicipiosLaCejaLaUnion_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViasmunicipiosLaCejaLaUnion_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViasmunicipiosLaCejaLaUnion_8.addFeatures(features_ViasmunicipiosLaCejaLaUnion_8);
var lyr_ViasmunicipiosLaCejaLaUnion_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViasmunicipiosLaCejaLaUnion_8, 
                style: style_ViasmunicipiosLaCejaLaUnion_8,
                interactive: true,
                title: '<img src="styles/legend/ViasmunicipiosLaCejaLaUnion_8.png" /> Vias municipios La Ceja - La Union'
            });
var format_DrenajeSencilloLaCeja_9 = new ol.format.GeoJSON();
var features_DrenajeSencilloLaCeja_9 = format_DrenajeSencilloLaCeja_9.readFeatures(json_DrenajeSencilloLaCeja_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrenajeSencilloLaCeja_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrenajeSencilloLaCeja_9.addFeatures(features_DrenajeSencilloLaCeja_9);
var lyr_DrenajeSencilloLaCeja_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrenajeSencilloLaCeja_9, 
                style: style_DrenajeSencilloLaCeja_9,
                interactive: true,
                title: '<img src="styles/legend/DrenajeSencilloLaCeja_9.png" /> Drenaje Sencillo La Ceja'
            });
var format_ConcesionesMunicipiosLaCejaLaUnion_10 = new ol.format.GeoJSON();
var features_ConcesionesMunicipiosLaCejaLaUnion_10 = format_ConcesionesMunicipiosLaCejaLaUnion_10.readFeatures(json_ConcesionesMunicipiosLaCejaLaUnion_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConcesionesMunicipiosLaCejaLaUnion_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConcesionesMunicipiosLaCejaLaUnion_10.addFeatures(features_ConcesionesMunicipiosLaCejaLaUnion_10);
var lyr_ConcesionesMunicipiosLaCejaLaUnion_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ConcesionesMunicipiosLaCejaLaUnion_10, 
                style: style_ConcesionesMunicipiosLaCejaLaUnion_10,
                interactive: true,
                title: '<img src="styles/legend/ConcesionesMunicipiosLaCejaLaUnion_10.png" /> Concesiones Municipios La Ceja - La Union'
            });
var format_PermisosVertimientosMunicipiosLaCejaLaUnion_11 = new ol.format.GeoJSON();
var features_PermisosVertimientosMunicipiosLaCejaLaUnion_11 = format_PermisosVertimientosMunicipiosLaCejaLaUnion_11.readFeatures(json_PermisosVertimientosMunicipiosLaCejaLaUnion_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermisosVertimientosMunicipiosLaCejaLaUnion_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosVertimientosMunicipiosLaCejaLaUnion_11.addFeatures(features_PermisosVertimientosMunicipiosLaCejaLaUnion_11);
var lyr_PermisosVertimientosMunicipiosLaCejaLaUnion_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PermisosVertimientosMunicipiosLaCejaLaUnion_11, 
                style: style_PermisosVertimientosMunicipiosLaCejaLaUnion_11,
                interactive: true,
                title: '<img src="styles/legend/PermisosVertimientosMunicipiosLaCejaLaUnion_11.png" /> Permisos Vertimientos Municipios La Ceja - La Union'
            });
var format_CaptacionesMunicipiosLaCejaLaUnion_12 = new ol.format.GeoJSON();
var features_CaptacionesMunicipiosLaCejaLaUnion_12 = format_CaptacionesMunicipiosLaCejaLaUnion_12.readFeatures(json_CaptacionesMunicipiosLaCejaLaUnion_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaptacionesMunicipiosLaCejaLaUnion_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaptacionesMunicipiosLaCejaLaUnion_12.addFeatures(features_CaptacionesMunicipiosLaCejaLaUnion_12);
var lyr_CaptacionesMunicipiosLaCejaLaUnion_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CaptacionesMunicipiosLaCejaLaUnion_12, 
                style: style_CaptacionesMunicipiosLaCejaLaUnion_12,
                interactive: true,
                title: '<img src="styles/legend/CaptacionesMunicipiosLaCejaLaUnion_12.png" /> Captaciones Municipios La Ceja - La Union'
            });
var format_CaptacionesCercanasalProyecto_13 = new ol.format.GeoJSON();
var features_CaptacionesCercanasalProyecto_13 = format_CaptacionesCercanasalProyecto_13.readFeatures(json_CaptacionesCercanasalProyecto_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaptacionesCercanasalProyecto_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaptacionesCercanasalProyecto_13.addFeatures(features_CaptacionesCercanasalProyecto_13);
var lyr_CaptacionesCercanasalProyecto_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CaptacionesCercanasalProyecto_13, 
                style: style_CaptacionesCercanasalProyecto_13,
                interactive: true,
                title: '<img src="styles/legend/CaptacionesCercanasalProyecto_13.png" /> Captaciones Cercanas al Proyecto'
            });

lyr_DepartamentodeAntioquia_0.setVisible(true);lyr_MunicipiosAfectados_1.setVisible(true);lyr_MunicipiodeLaUnion_2.setVisible(true);lyr_AreadeInfluencia_3.setVisible(true);lyr_AreaSolicitadaExplotar_4.setVisible(true);lyr_AreaProyecto_5.setVisible(true);lyr_Centrospoblados_6.setVisible(true);lyr_DrenajseSencilloLaUnion_7.setVisible(true);lyr_ViasmunicipiosLaCejaLaUnion_8.setVisible(true);lyr_DrenajeSencilloLaCeja_9.setVisible(true);lyr_ConcesionesMunicipiosLaCejaLaUnion_10.setVisible(true);lyr_PermisosVertimientosMunicipiosLaCejaLaUnion_11.setVisible(true);lyr_CaptacionesMunicipiosLaCejaLaUnion_12.setVisible(true);lyr_CaptacionesCercanasalProyecto_13.setVisible(true);
var layersList = [lyr_DepartamentodeAntioquia_0,lyr_MunicipiosAfectados_1,lyr_MunicipiodeLaUnion_2,lyr_AreadeInfluencia_3,lyr_AreaSolicitadaExplotar_4,lyr_AreaProyecto_5,lyr_Centrospoblados_6,lyr_DrenajseSencilloLaUnion_7,lyr_ViasmunicipiosLaCejaLaUnion_8,lyr_DrenajeSencilloLaCeja_9,lyr_ConcesionesMunicipiosLaCejaLaUnion_10,lyr_PermisosVertimientosMunicipiosLaCejaLaUnion_11,lyr_CaptacionesMunicipiosLaCejaLaUnion_12,lyr_CaptacionesCercanasalProyecto_13];
lyr_DepartamentodeAntioquia_0.set('fieldAliases', {'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CRSLC': 'MPIO_CRSLC', 'MPIO_NAREA': 'MPIO_NAREA', 'MPIO_NANO': 'MPIO_NANO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MunicipiosAfectados_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DPTO_DPTO_': 'DPTO_DPTO_', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CRSLC': 'MPIO_CRSLC', 'MPIO_NANO_': 'MPIO_NANO_', 'MPIO_NAREA': 'MPIO_NAREA', 'MPIO_CSMBL': 'MPIO_CSMBL', 'MPIO_CCNCT': 'MPIO_CCNCT', 'MPIO_NANO': 'MPIO_NANO', 'SHAPE_Leng': 'SHAPE_Leng', 'Atoridad_A': 'Atoridad_A', 'Territoria': 'Territoria', 'Subregión': 'Subregión', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Area_Ha': 'Area_Ha', });
lyr_MunicipiodeLaUnion_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DPTO_DPTO_': 'DPTO_DPTO_', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CRSLC': 'MPIO_CRSLC', 'MPIO_NANO_': 'MPIO_NANO_', 'MPIO_NAREA': 'MPIO_NAREA', 'MPIO_CSMBL': 'MPIO_CSMBL', 'MPIO_CCNCT': 'MPIO_CCNCT', 'MPIO_NANO': 'MPIO_NANO', 'SHAPE_Leng': 'SHAPE_Leng', 'Atoridad_A': 'Atoridad_A', 'Territoria': 'Territoria', 'Subregión': 'Subregión', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Area_Ha': 'Area_Ha', });
lyr_AreadeInfluencia_3.set('fieldAliases', {'EXPEDIENTE': 'EXPEDIENTE', 'OPERADOR': 'OPERADOR', 'PROYECTO': 'PROYECTO', 'AREA_INFL': 'AREA_INFL', 'COMPONENTE': 'COMPONENTE', 'GRUPO_COMP': 'GRUPO_COMP', 'OBSERV': 'OBSERV', 'AREA_HA': 'AREA_HA', 'ID_AREAINF': 'ID_AREAINF', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AreaSolicitadaExplotar_4.set('fieldAliases', {'EXPEDIENTE': 'EXPEDIENTE', 'NOMBRE': 'NOMBRE', 'NOMENCLAT': 'NOMENCLAT', 'TIP_AREA_S': 'TIP_AREA_S', 'NOMEN_SUST': 'NOMEN_SUST', 'ADMIN_SUST': 'ADMIN_SUST', 'AREA_HA': 'AREA_HA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AreaProyecto_5.set('fieldAliases', {'EXPEDIENTE': 'EXPEDIENTE', 'SECTOR': 'SECTOR', 'OPERADOR': 'OPERADOR', 'PROYECTO': 'PROYECTO', 'NUM_ACT_AD': 'NUM_ACT_AD', 'FEC_ACT_AD': 'FEC_ACT_AD', 'ART_ACT_AD': 'ART_ACT_AD', 'CONTRATO': 'CONTRATO', 'DESCRIP': 'DESCRIP', 'NOMENCLAT': 'NOMENCLAT', 'OBSERV': 'OBSERV', 'AREA_HA': 'AREA_HA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Centrospoblados_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'SETR_CLSE_': 'SETR_CLSE_', 'SECR_SETR_': 'SECR_SETR_', 'SECR_SETR1': 'SECR_SETR1', 'SECR_SET_1': 'SECR_SET_1', 'SECR_SECR_': 'SECR_SECR_', 'CPOB_CCDGO': 'CPOB_CCDGO', 'CPOB_CNMBR': 'CPOB_CNMBR', 'CPOB_CCNCT': 'CPOB_CCNCT', 'CPOB_NAREA': 'CPOB_NAREA', 'CPOB_NANO': 'CPOB_NANO', 'CPOB_CSMBL': 'CPOB_CSMBL', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Area_Ha': 'Area_Ha', });
lyr_DrenajseSencilloLaUnion_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NOMBRE_GEO': 'NOMBRE_GEO', 'ESTADO_DRE': 'ESTADO_DRE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'DISPERSION': 'DISPERSION', 'RuleID': 'RuleID', 'ID_MULTI': 'ID_MULTI', 'BK_MULTI': 'BK_MULTI', 'ESCALA': 'ESCALA', 'SHAPE_Leng': 'SHAPE_Leng', 'NMG_DICGEO': 'NMG_DICGEO', });
lyr_ViasmunicipiosLaCejaLaUnion_8.set('fieldAliases', {'fid': 'fid', 'FID_roads': 'FID_roads', 'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'tunnel': 'tunnel', 'maxspeed': 'maxspeed', 'FID_MGN_AD': 'FID_MGN_AD', 'OBJECTID': 'OBJECTID', 'DPTO_CCDGO': 'DPTO_CCDGO', 'DPTO_CNMBR': 'DPTO_CNMBR', });
lyr_DrenajeSencilloLaCeja_9.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'NOMBRE_GEO': 'NOMBRE_GEO', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'NOM': 'NOM', });
lyr_ConcesionesMunicipiosLaCejaLaUnion_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'idusuario': 'idusuario', 'idpredio': 'idpredio', 'autoridad': 'autoridad', 'tiposuelo': 'tiposuelo', 'divipolamu': 'divipolamu', 'nommunicip': 'nommunicip', 'divipoladp': 'divipoladp', 'nomdeparta': 'nomdeparta', 'sistemaref': 'sistemaref', 'lat_grados': 'lat_grados', 'lat_minuto': 'lat_minuto', 'lat_segund': 'lat_segund', 'N': 'N', 'altitud': 'altitud', 'long_grado': 'long_grado', 'long_minut': 'long_minut', 'long_segun': 'long_segun', 'W': 'W', 'observacio': 'observacio', 'fechacreac': 'fechacreac', 'fechamodif': 'fechamodif', 'logincreac': 'logincreac', 'loginmodif': 'loginmodif', 'fechaproce': 'fechaproce', 'idusuari_1': 'idusuari_1', 'idpredio_1': 'idpredio_1', 'idconcesio': 'idconcesio', 'autorida_1': 'autorida_1', 'divipola_1': 'divipola_1', 'nomdepar_1': 'nomdepar_1', 'divipola_2': 'divipola_2', 'nommunic_1': 'nommunic_1', 'num_expedi': 'num_expedi', 'num_res_ca': 'num_res_ca', 'fecha_not_': 'fecha_not_', 'fecha_exp_': 'fecha_exp_', 'num_res_pl': 'num_res_pl', 'fecha_not1': 'fecha_not1', 'fecha_exp1': 'fecha_exp1', 'num_res_ob': 'num_res_ob', 'fecha_no_1': 'fecha_no_1', 'fecha_ex_1': 'fecha_ex_1', 'fecha_inic': 'fecha_inic', 'fecha_fin': 'fecha_fin', 'caudal_con': 'caudal_con', 'caudal_x_u': 'caudal_x_u', 'caudal_ani': 'caudal_ani', 'caudal_a_1': 'caudal_a_1', 'caudal_a_2': 'caudal_a_2', 'tipo_noved': 'tipo_noved', 'num_expe_1': 'num_expe_1', 'fecha_ex_2': 'fecha_ex_2', 'observac_1': 'observac_1', 'no_valida': 'no_valida', 'fechacre_1': 'fechacre_1', 'fechamod_1': 'fechamod_1', 'logincre_1': 'logincre_1', 'loginmod_1': 'loginmod_1', 'fechapro_1': 'fechapro_1', });
lyr_PermisosVertimientosMunicipiosLaCejaLaUnion_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'idusuario': 'idusuario', 'idpredio': 'idpredio', 'autoridad': 'autoridad', 'nombre_cen': 'nombre_cen', 'cedula_cat': 'cedula_cat', 'matricula_': 'matricula_', 'area': 'area', 'tiposuelo': 'tiposuelo', 'divipolamu': 'divipolamu', 'nommunicip': 'nommunicip', 'divipoladp': 'divipoladp', 'nomdeparta': 'nomdeparta', 'sistemaref': 'sistemaref', 'lat_grados': 'lat_grados', 'lat_minuto': 'lat_minuto', 'lat_segund': 'lat_segund', 'N': 'N', 'altitud': 'altitud', 'long_grado': 'long_grado', 'long_minut': 'long_minut', 'long_segun': 'long_segun', 'W': 'W', 'observacio': 'observacio', 'fechacreac': 'fechacreac', 'fechamodif': 'fechamodif', 'logincreac': 'logincreac', 'loginmodif': 'loginmodif', 'fechaproce': 'fechaproce', 'idusuari_1': 'idusuari_1', 'idpredio_1': 'idpredio_1', 'idpermisov': 'idpermisov', 'autorida_1': 'autorida_1', 'divipola_1': 'divipola_1', 'nomdepar_1': 'nomdepar_1', 'divipola_2': 'divipola_2', 'nommunic_1': 'nommunic_1', 'num_expedi': 'num_expedi', 'num_res_pe': 'num_res_pe', 'fecha_exp_': 'fecha_exp_', 'vigencias_': 'vigencias_', 'vigencia_h': 'vigencia_h', 'num_res_in': 'num_res_in', 'fecha_exp1': 'fecha_exp1', 'caudal': 'caudal', 'evaluacion': 'evaluacion', 'num_res_so': 'num_res_so', 'fecha_ex_1': 'fecha_ex_1', 'num_res_ap': 'num_res_ap', 'fecha_ex_2': 'fecha_ex_2', 'vigencia_d': 'vigencia_d', 'vigencia_1': 'vigencia_1', 'num_res__1': 'num_res__1', 'fecha_ex_3': 'fecha_ex_3', 'num_res__2': 'num_res__2', 'fecha_ex_4': 'fecha_ex_4', 'modificada': 'modificada', 'resolucion': 'resolucion', 'fecha_reso': 'fecha_reso', 'fecha_inic': 'fecha_inic', 'fecha_fina': 'fecha_fina', 'resoluci_1': 'resoluci_1', 'fecha_res_': 'fecha_res_', 'resoluci_2': 'resoluci_2', 'fecha_res1': 'fecha_res1', 'fecha_noti': 'fecha_noti', 'onservacio': 'onservacio', 'tipo_noved': 'tipo_noved', 'num_expe_1': 'num_expe_1', 'fecha_ex_5': 'fecha_ex_5', 'observac_1': 'observac_1', 'no_valida': 'no_valida', 'fechacre_1': 'fechacre_1', 'fechamod_1': 'fechamod_1', 'logincre_1': 'logincre_1', 'loginmod_1': 'loginmod_1', 'fechapro_1': 'fechapro_1', });
lyr_CaptacionesMunicipiosLaCejaLaUnion_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'idusuario': 'idusuario', 'idpredio': 'idpredio', 'idconcesio': 'idconcesio', 'idcaptacio': 'idcaptacio', 'autoridad': 'autoridad', 'divipoladp': 'divipoladp', 'nomdeparta': 'nomdeparta', 'divipolamu': 'divipolamu', 'nommunicip': 'nommunicip', 'direccion': 'direccion', 'num_expedi': 'num_expedi', 'num_res_ca': 'num_res_ca', 'oferta_hid': 'oferta_hid', 'oferta_dis': 'oferta_dis', 'estado_cap': 'estado_cap', 'caudaldise': 'caudaldise', 'caudal_con': 'caudal_con', 'caudal_x_u': 'caudal_x_u', 'sistemaref': 'sistemaref', 'descripcio': 'descripcio', 'nombrefuen': 'nombrefuen', 'tipofuente': 'tipofuente', 'codigofuen': 'codigofuen', 'nombretram': 'nombretram', 'tipofuen_1': 'tipofuen_1', 'area': 'area', 'zona': 'zona', 'subzona': 'subzona', 'provincia_': 'provincia_', 'unidad_hid': 'unidad_hid', 'tipo_punto': 'tipo_punto', 'metodo_ext': 'metodo_ext', 'tipocaptac': 'tipocaptac', 'area_capta': 'area_capta', 'caudal_ver': 'caudal_ver', 'continuida': 'continuida', 'grados_lat': 'grados_lat', 'minutos_la': 'minutos_la', 'segundos_l': 'segundos_l', 'N': 'N', 'grados_lon': 'grados_lon', 'minutos_lo': 'minutos_lo', 'segundos_1': 'segundos_1', 'W': 'W', 'altitud': 'altitud', 'tiene_macr': 'tiene_macr', 'tiene_serv': 'tiene_serv', 'sin_conces': 'sin_conces', 'red_monito': 'red_monito', 'observacio': 'observacio', 'observac_1': 'observac_1', 'red_region': 'red_region', 'fechacreac': 'fechacreac', 'fechamodif': 'fechamodif', 'logincreac': 'logincreac', 'loginmodif': 'loginmodif', 'fechaproce': 'fechaproce', });
lyr_CaptacionesCercanasalProyecto_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'idusuario': 'idusuario', 'idpredio': 'idpredio', 'idconcesio': 'idconcesio', 'idcaptacio': 'idcaptacio', 'autoridad': 'autoridad', 'divipoladp': 'divipoladp', 'nomdeparta': 'nomdeparta', 'divipolamu': 'divipolamu', 'nommunicip': 'nommunicip', 'direccion': 'direccion', 'num_expedi': 'num_expedi', 'num_res_ca': 'num_res_ca', 'oferta_hid': 'oferta_hid', 'oferta_dis': 'oferta_dis', 'estado_cap': 'estado_cap', 'caudaldise': 'caudaldise', 'caudal_con': 'caudal_con', 'caudal_x_u': 'caudal_x_u', 'sistemaref': 'sistemaref', 'descripcio': 'descripcio', 'nombrefuen': 'nombrefuen', 'tipofuente': 'tipofuente', 'codigofuen': 'codigofuen', 'nombretram': 'nombretram', 'tipofuen_1': 'tipofuen_1', 'area': 'area', 'zona': 'zona', 'subzona': 'subzona', 'provincia_': 'provincia_', 'unidad_hid': 'unidad_hid', 'tipo_punto': 'tipo_punto', 'metodo_ext': 'metodo_ext', 'tipocaptac': 'tipocaptac', 'area_capta': 'area_capta', 'caudal_ver': 'caudal_ver', 'continuida': 'continuida', 'grados_lat': 'grados_lat', 'minutos_la': 'minutos_la', 'segundos_l': 'segundos_l', 'N': 'N', 'grados_lon': 'grados_lon', 'minutos_lo': 'minutos_lo', 'segundos_1': 'segundos_1', 'W': 'W', 'altitud': 'altitud', 'tiene_macr': 'tiene_macr', 'tiene_serv': 'tiene_serv', 'sin_conces': 'sin_conces', 'red_monito': 'red_monito', 'observacio': 'observacio', 'observac_1': 'observac_1', 'red_region': 'red_region', 'fechacreac': 'fechacreac', 'fechamodif': 'fechamodif', 'logincreac': 'logincreac', 'loginmodif': 'loginmodif', 'fechaproce': 'fechaproce', });
lyr_DepartamentodeAntioquia_0.set('fieldImages', {'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'MPIO_CRSLC': 'TextEdit', 'MPIO_NAREA': 'TextEdit', 'MPIO_NANO': 'Range', 'DPTO_CNMBR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MunicipiosAfectados_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'DPTO_DPTO_': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'MPIO_CRSLC': 'TextEdit', 'MPIO_NANO_': 'TextEdit', 'MPIO_NAREA': 'TextEdit', 'MPIO_CSMBL': 'TextEdit', 'MPIO_CCNCT': 'TextEdit', 'MPIO_NANO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Atoridad_A': 'TextEdit', 'Territoria': 'TextEdit', 'Subregión': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area_Ha': 'TextEdit', });
lyr_MunicipiodeLaUnion_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'DPTO_DPTO_': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'MPIO_CRSLC': 'TextEdit', 'MPIO_NANO_': 'TextEdit', 'MPIO_NAREA': 'TextEdit', 'MPIO_CSMBL': 'TextEdit', 'MPIO_CCNCT': 'TextEdit', 'MPIO_NANO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Atoridad_A': 'TextEdit', 'Territoria': 'TextEdit', 'Subregión': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area_Ha': 'TextEdit', });
lyr_AreadeInfluencia_3.set('fieldImages', {'EXPEDIENTE': 'TextEdit', 'OPERADOR': 'TextEdit', 'PROYECTO': 'TextEdit', 'AREA_INFL': 'TextEdit', 'COMPONENTE': 'TextEdit', 'GRUPO_COMP': 'TextEdit', 'OBSERV': 'TextEdit', 'AREA_HA': 'TextEdit', 'ID_AREAINF': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AreaSolicitadaExplotar_4.set('fieldImages', {'EXPEDIENTE': '', 'NOMBRE': '', 'NOMENCLAT': '', 'TIP_AREA_S': '', 'NOMEN_SUST': '', 'ADMIN_SUST': '', 'AREA_HA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AreaProyecto_5.set('fieldImages', {'EXPEDIENTE': 'TextEdit', 'SECTOR': 'TextEdit', 'OPERADOR': 'TextEdit', 'PROYECTO': 'TextEdit', 'NUM_ACT_AD': 'TextEdit', 'FEC_ACT_AD': 'DateTime', 'ART_ACT_AD': 'TextEdit', 'CONTRATO': 'TextEdit', 'DESCRIP': 'TextEdit', 'NOMENCLAT': 'TextEdit', 'OBSERV': 'TextEdit', 'AREA_HA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Centrospoblados_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'SETR_CLSE_': 'TextEdit', 'SECR_SETR_': 'TextEdit', 'SECR_SETR1': 'TextEdit', 'SECR_SET_1': 'TextEdit', 'SECR_SECR_': 'TextEdit', 'CPOB_CCDGO': 'TextEdit', 'CPOB_CNMBR': 'TextEdit', 'CPOB_CCNCT': 'TextEdit', 'CPOB_NAREA': 'TextEdit', 'CPOB_NANO': 'TextEdit', 'CPOB_CSMBL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area_Ha': 'TextEdit', });
lyr_DrenajseSencilloLaUnion_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'ESTADO_DRE': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'DISPERSION': 'TextEdit', 'RuleID': 'TextEdit', 'ID_MULTI': 'TextEdit', 'BK_MULTI': 'TextEdit', 'ESCALA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'NMG_DICGEO': 'TextEdit', });
lyr_ViasmunicipiosLaCejaLaUnion_8.set('fieldImages', {'fid': 'TextEdit', 'FID_roads': 'Range', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'tunnel': 'Range', 'maxspeed': 'Range', 'FID_MGN_AD': 'Range', 'OBJECTID': 'Range', 'DPTO_CCDGO': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', });
lyr_DrenajeSencilloLaCeja_9.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'NOM': 'TextEdit', });
lyr_ConcesionesMunicipiosLaCejaLaUnion_10.set('fieldImages', {'OBJECTID': '', 'idusuario': '', 'idpredio': '', 'autoridad': '', 'tiposuelo': '', 'divipolamu': '', 'nommunicip': '', 'divipoladp': '', 'nomdeparta': '', 'sistemaref': '', 'lat_grados': '', 'lat_minuto': '', 'lat_segund': '', 'N': '', 'altitud': '', 'long_grado': '', 'long_minut': '', 'long_segun': '', 'W': '', 'observacio': '', 'fechacreac': '', 'fechamodif': '', 'logincreac': '', 'loginmodif': '', 'fechaproce': '', 'idusuari_1': '', 'idpredio_1': '', 'idconcesio': '', 'autorida_1': '', 'divipola_1': '', 'nomdepar_1': '', 'divipola_2': '', 'nommunic_1': '', 'num_expedi': '', 'num_res_ca': '', 'fecha_not_': '', 'fecha_exp_': '', 'num_res_pl': '', 'fecha_not1': '', 'fecha_exp1': '', 'num_res_ob': '', 'fecha_no_1': '', 'fecha_ex_1': '', 'fecha_inic': '', 'fecha_fin': '', 'caudal_con': '', 'caudal_x_u': '', 'caudal_ani': '', 'caudal_a_1': '', 'caudal_a_2': '', 'tipo_noved': '', 'num_expe_1': '', 'fecha_ex_2': '', 'observac_1': '', 'no_valida': '', 'fechacre_1': '', 'fechamod_1': '', 'logincre_1': '', 'loginmod_1': '', 'fechapro_1': '', });
lyr_PermisosVertimientosMunicipiosLaCejaLaUnion_11.set('fieldImages', {'OBJECTID': '', 'idusuario': '', 'idpredio': '', 'autoridad': '', 'nombre_cen': '', 'cedula_cat': '', 'matricula_': '', 'area': '', 'tiposuelo': '', 'divipolamu': '', 'nommunicip': '', 'divipoladp': '', 'nomdeparta': '', 'sistemaref': '', 'lat_grados': '', 'lat_minuto': '', 'lat_segund': '', 'N': '', 'altitud': '', 'long_grado': '', 'long_minut': '', 'long_segun': '', 'W': '', 'observacio': '', 'fechacreac': '', 'fechamodif': '', 'logincreac': '', 'loginmodif': '', 'fechaproce': '', 'idusuari_1': '', 'idpredio_1': '', 'idpermisov': '', 'autorida_1': '', 'divipola_1': '', 'nomdepar_1': '', 'divipola_2': '', 'nommunic_1': '', 'num_expedi': '', 'num_res_pe': '', 'fecha_exp_': '', 'vigencias_': '', 'vigencia_h': '', 'num_res_in': '', 'fecha_exp1': '', 'caudal': '', 'evaluacion': '', 'num_res_so': '', 'fecha_ex_1': '', 'num_res_ap': '', 'fecha_ex_2': '', 'vigencia_d': '', 'vigencia_1': '', 'num_res__1': '', 'fecha_ex_3': '', 'num_res__2': '', 'fecha_ex_4': '', 'modificada': '', 'resolucion': '', 'fecha_reso': '', 'fecha_inic': '', 'fecha_fina': '', 'resoluci_1': '', 'fecha_res_': '', 'resoluci_2': '', 'fecha_res1': '', 'fecha_noti': '', 'onservacio': '', 'tipo_noved': '', 'num_expe_1': '', 'fecha_ex_5': '', 'observac_1': '', 'no_valida': '', 'fechacre_1': '', 'fechamod_1': '', 'logincre_1': '', 'loginmod_1': '', 'fechapro_1': '', });
lyr_CaptacionesMunicipiosLaCejaLaUnion_12.set('fieldImages', {'OBJECTID': '', 'idusuario': '', 'idpredio': '', 'idconcesio': '', 'idcaptacio': '', 'autoridad': '', 'divipoladp': '', 'nomdeparta': '', 'divipolamu': '', 'nommunicip': '', 'direccion': '', 'num_expedi': '', 'num_res_ca': '', 'oferta_hid': '', 'oferta_dis': '', 'estado_cap': '', 'caudaldise': '', 'caudal_con': '', 'caudal_x_u': '', 'sistemaref': '', 'descripcio': '', 'nombrefuen': '', 'tipofuente': '', 'codigofuen': '', 'nombretram': '', 'tipofuen_1': '', 'area': '', 'zona': '', 'subzona': '', 'provincia_': '', 'unidad_hid': '', 'tipo_punto': '', 'metodo_ext': '', 'tipocaptac': '', 'area_capta': '', 'caudal_ver': '', 'continuida': '', 'grados_lat': '', 'minutos_la': '', 'segundos_l': '', 'N': '', 'grados_lon': '', 'minutos_lo': '', 'segundos_1': '', 'W': '', 'altitud': '', 'tiene_macr': '', 'tiene_serv': '', 'sin_conces': '', 'red_monito': '', 'observacio': '', 'observac_1': '', 'red_region': '', 'fechacreac': '', 'fechamodif': '', 'logincreac': '', 'loginmodif': '', 'fechaproce': '', });
lyr_CaptacionesCercanasalProyecto_13.set('fieldImages', {'OBJECTID': '', 'idusuario': '', 'idpredio': '', 'idconcesio': '', 'idcaptacio': '', 'autoridad': '', 'divipoladp': '', 'nomdeparta': '', 'divipolamu': '', 'nommunicip': '', 'direccion': '', 'num_expedi': '', 'num_res_ca': '', 'oferta_hid': '', 'oferta_dis': '', 'estado_cap': '', 'caudaldise': '', 'caudal_con': '', 'caudal_x_u': '', 'sistemaref': '', 'descripcio': '', 'nombrefuen': '', 'tipofuente': '', 'codigofuen': '', 'nombretram': '', 'tipofuen_1': '', 'area': '', 'zona': '', 'subzona': '', 'provincia_': '', 'unidad_hid': '', 'tipo_punto': '', 'metodo_ext': '', 'tipocaptac': '', 'area_capta': '', 'caudal_ver': '', 'continuida': '', 'grados_lat': '', 'minutos_la': '', 'segundos_l': '', 'N': '', 'grados_lon': '', 'minutos_lo': '', 'segundos_1': '', 'W': '', 'altitud': '', 'tiene_macr': '', 'tiene_serv': '', 'sin_conces': '', 'red_monito': '', 'observacio': '', 'observac_1': '', 'red_region': '', 'fechacreac': '', 'fechamodif': '', 'logincreac': '', 'loginmodif': '', 'fechaproce': '', });
lyr_DepartamentodeAntioquia_0.set('fieldLabels', {'DPTO_CCDGO': 'no label', 'MPIO_CCDGO': 'no label', 'MPIO_CNMBR': 'inline label', 'MPIO_CRSLC': 'no label', 'MPIO_NAREA': 'no label', 'MPIO_NANO': 'no label', 'DPTO_CNMBR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MunicipiosAfectados_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'DPTO_DPTO_': 'no label', 'MPIO_CCDGO': 'no label', 'MPIO_CNMBR': 'header label', 'MPIO_CRSLC': 'no label', 'MPIO_NANO_': 'no label', 'MPIO_NAREA': 'no label', 'MPIO_CSMBL': 'no label', 'MPIO_CCNCT': 'no label', 'MPIO_NANO': 'no label', 'SHAPE_Leng': 'no label', 'Atoridad_A': 'no label', 'Territoria': 'no label', 'Subregión': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'Area_Ha': 'no label', });
lyr_MunicipiodeLaUnion_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'DPTO_DPTO_': 'no label', 'MPIO_CCDGO': 'no label', 'MPIO_CNMBR': 'header label', 'MPIO_CRSLC': 'no label', 'MPIO_NANO_': 'no label', 'MPIO_NAREA': 'no label', 'MPIO_CSMBL': 'no label', 'MPIO_CCNCT': 'no label', 'MPIO_NANO': 'no label', 'SHAPE_Leng': 'no label', 'Atoridad_A': 'no label', 'Territoria': 'no label', 'Subregión': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'Area_Ha': 'no label', });
lyr_AreadeInfluencia_3.set('fieldLabels', {'EXPEDIENTE': 'inline label', 'OPERADOR': 'inline label', 'PROYECTO': 'inline label', 'AREA_INFL': 'no label', 'COMPONENTE': 'inline label', 'GRUPO_COMP': 'no label', 'OBSERV': 'no label', 'AREA_HA': 'no label', 'ID_AREAINF': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AreaSolicitadaExplotar_4.set('fieldLabels', {'EXPEDIENTE': 'inline label', 'NOMBRE': 'inline label', 'NOMENCLAT': 'no label', 'TIP_AREA_S': 'no label', 'NOMEN_SUST': 'no label', 'ADMIN_SUST': 'no label', 'AREA_HA': 'inline label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AreaProyecto_5.set('fieldLabels', {'EXPEDIENTE': 'inline label', 'SECTOR': 'inline label', 'OPERADOR': 'inline label', 'PROYECTO': 'inline label', 'NUM_ACT_AD': 'no label', 'FEC_ACT_AD': 'no label', 'ART_ACT_AD': 'no label', 'CONTRATO': 'no label', 'DESCRIP': 'no label', 'NOMENCLAT': 'no label', 'OBSERV': 'no label', 'AREA_HA': 'inline label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Centrospoblados_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'SETR_CLSE_': 'no label', 'SECR_SETR_': 'no label', 'SECR_SETR1': 'no label', 'SECR_SET_1': 'no label', 'SECR_SECR_': 'no label', 'CPOB_CCDGO': 'no label', 'CPOB_CNMBR': 'inline label', 'CPOB_CCNCT': 'no label', 'CPOB_NAREA': 'no label', 'CPOB_NANO': 'no label', 'CPOB_CSMBL': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'Area_Ha': 'no label', });
lyr_DrenajseSencilloLaUnion_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NOMBRE_GEO': 'inline label', 'ESTADO_DRE': 'inline label', 'PROYECTO': 'inline label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'DISPERSION': 'no label', 'RuleID': 'no label', 'ID_MULTI': 'no label', 'BK_MULTI': 'no label', 'ESCALA': 'no label', 'SHAPE_Leng': 'no label', 'NMG_DICGEO': 'no label', });
lyr_ViasmunicipiosLaCejaLaUnion_8.set('fieldLabels', {'fid': 'no label', 'FID_roads': 'no label', 'osm_id': 'no label', 'name': 'inline label', 'ref': 'no label', 'type': 'inline label', 'oneway': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'maxspeed': 'no label', 'FID_MGN_AD': 'no label', 'OBJECTID': 'no label', 'DPTO_CCDGO': 'no label', 'DPTO_CNMBR': 'no label', });
lyr_DrenajeSencilloLaCeja_9.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'NOMBRE_GEO': 'inline label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'NOM': 'no label', });
lyr_ConcesionesMunicipiosLaCejaLaUnion_10.set('fieldLabels', {'OBJECTID': 'no label', 'idusuario': 'inline label', 'idpredio': 'inline label', 'autoridad': 'inline label', 'tiposuelo': 'inline label', 'divipolamu': 'no label', 'nommunicip': 'no label', 'divipoladp': 'no label', 'nomdeparta': 'no label', 'sistemaref': 'no label', 'lat_grados': 'no label', 'lat_minuto': 'no label', 'lat_segund': 'no label', 'N': 'no label', 'altitud': 'no label', 'long_grado': 'no label', 'long_minut': 'no label', 'long_segun': 'no label', 'W': 'no label', 'observacio': 'no label', 'fechacreac': 'no label', 'fechamodif': 'no label', 'logincreac': 'no label', 'loginmodif': 'no label', 'fechaproce': 'no label', 'idusuari_1': 'no label', 'idpredio_1': 'no label', 'idconcesio': 'no label', 'autorida_1': 'no label', 'divipola_1': 'no label', 'nomdepar_1': 'no label', 'divipola_2': 'no label', 'nommunic_1': 'no label', 'num_expedi': 'no label', 'num_res_ca': 'no label', 'fecha_not_': 'no label', 'fecha_exp_': 'no label', 'num_res_pl': 'no label', 'fecha_not1': 'no label', 'fecha_exp1': 'no label', 'num_res_ob': 'no label', 'fecha_no_1': 'no label', 'fecha_ex_1': 'no label', 'fecha_inic': 'no label', 'fecha_fin': 'no label', 'caudal_con': 'no label', 'caudal_x_u': 'no label', 'caudal_ani': 'no label', 'caudal_a_1': 'no label', 'caudal_a_2': 'no label', 'tipo_noved': 'no label', 'num_expe_1': 'no label', 'fecha_ex_2': 'no label', 'observac_1': 'no label', 'no_valida': 'no label', 'fechacre_1': 'no label', 'fechamod_1': 'no label', 'logincre_1': 'no label', 'loginmod_1': 'no label', 'fechapro_1': 'no label', });
lyr_PermisosVertimientosMunicipiosLaCejaLaUnion_11.set('fieldLabels', {'OBJECTID': 'no label', 'idusuario': 'inline label', 'idpredio': 'inline label', 'autoridad': 'inline label', 'nombre_cen': 'inline label', 'cedula_cat': 'no label', 'matricula_': 'no label', 'area': 'no label', 'tiposuelo': 'no label', 'divipolamu': 'no label', 'nommunicip': 'no label', 'divipoladp': 'no label', 'nomdeparta': 'no label', 'sistemaref': 'no label', 'lat_grados': 'no label', 'lat_minuto': 'no label', 'lat_segund': 'no label', 'N': 'no label', 'altitud': 'no label', 'long_grado': 'no label', 'long_minut': 'no label', 'long_segun': 'no label', 'W': 'no label', 'observacio': 'no label', 'fechacreac': 'no label', 'fechamodif': 'no label', 'logincreac': 'no label', 'loginmodif': 'no label', 'fechaproce': 'no label', 'idusuari_1': 'no label', 'idpredio_1': 'no label', 'idpermisov': 'no label', 'autorida_1': 'no label', 'divipola_1': 'no label', 'nomdepar_1': 'no label', 'divipola_2': 'no label', 'nommunic_1': 'no label', 'num_expedi': 'no label', 'num_res_pe': 'no label', 'fecha_exp_': 'no label', 'vigencias_': 'no label', 'vigencia_h': 'no label', 'num_res_in': 'no label', 'fecha_exp1': 'no label', 'caudal': 'no label', 'evaluacion': 'no label', 'num_res_so': 'no label', 'fecha_ex_1': 'no label', 'num_res_ap': 'no label', 'fecha_ex_2': 'no label', 'vigencia_d': 'no label', 'vigencia_1': 'no label', 'num_res__1': 'no label', 'fecha_ex_3': 'no label', 'num_res__2': 'no label', 'fecha_ex_4': 'no label', 'modificada': 'no label', 'resolucion': 'no label', 'fecha_reso': 'no label', 'fecha_inic': 'no label', 'fecha_fina': 'no label', 'resoluci_1': 'no label', 'fecha_res_': 'no label', 'resoluci_2': 'no label', 'fecha_res1': 'no label', 'fecha_noti': 'no label', 'onservacio': 'no label', 'tipo_noved': 'no label', 'num_expe_1': 'no label', 'fecha_ex_5': 'no label', 'observac_1': 'no label', 'no_valida': 'no label', 'fechacre_1': 'no label', 'fechamod_1': 'no label', 'logincre_1': 'no label', 'loginmod_1': 'no label', 'fechapro_1': 'no label', });
lyr_CaptacionesMunicipiosLaCejaLaUnion_12.set('fieldLabels', {'OBJECTID': 'no label', 'idusuario': 'inline label', 'idpredio': 'inline label', 'idconcesio': 'inline label', 'idcaptacio': 'no label', 'autoridad': 'inline label', 'divipoladp': 'no label', 'nomdeparta': 'no label', 'divipolamu': 'no label', 'nommunicip': 'no label', 'direccion': 'no label', 'num_expedi': 'no label', 'num_res_ca': 'no label', 'oferta_hid': 'no label', 'oferta_dis': 'no label', 'estado_cap': 'no label', 'caudaldise': 'no label', 'caudal_con': 'no label', 'caudal_x_u': 'no label', 'sistemaref': 'no label', 'descripcio': 'no label', 'nombrefuen': 'no label', 'tipofuente': 'no label', 'codigofuen': 'no label', 'nombretram': 'no label', 'tipofuen_1': 'no label', 'area': 'no label', 'zona': 'no label', 'subzona': 'no label', 'provincia_': 'no label', 'unidad_hid': 'no label', 'tipo_punto': 'no label', 'metodo_ext': 'no label', 'tipocaptac': 'no label', 'area_capta': 'no label', 'caudal_ver': 'no label', 'continuida': 'no label', 'grados_lat': 'no label', 'minutos_la': 'no label', 'segundos_l': 'no label', 'N': 'no label', 'grados_lon': 'no label', 'minutos_lo': 'no label', 'segundos_1': 'no label', 'W': 'no label', 'altitud': 'no label', 'tiene_macr': 'no label', 'tiene_serv': 'no label', 'sin_conces': 'no label', 'red_monito': 'no label', 'observacio': 'no label', 'observac_1': 'no label', 'red_region': 'no label', 'fechacreac': 'no label', 'fechamodif': 'no label', 'logincreac': 'no label', 'loginmodif': 'no label', 'fechaproce': 'no label', });
lyr_CaptacionesCercanasalProyecto_13.set('fieldLabels', {'OBJECTID': 'no label', 'idusuario': 'inline label', 'idpredio': 'inline label', 'idconcesio': 'inline label', 'idcaptacio': 'inline label', 'autoridad': 'no label', 'divipoladp': 'inline label', 'nomdeparta': 'inline label', 'divipolamu': 'inline label', 'nommunicip': 'inline label', 'direccion': 'inline label', 'num_expedi': 'inline label', 'num_res_ca': 'inline label', 'oferta_hid': 'inline label', 'oferta_dis': 'inline label', 'estado_cap': 'inline label', 'caudaldise': 'inline label', 'caudal_con': 'inline label', 'caudal_x_u': 'inline label', 'sistemaref': 'inline label', 'descripcio': 'inline label', 'nombrefuen': 'inline label', 'tipofuente': 'inline label', 'codigofuen': 'inline label', 'nombretram': 'inline label', 'tipofuen_1': 'inline label', 'area': 'inline label', 'zona': 'inline label', 'subzona': 'inline label', 'provincia_': 'inline label', 'unidad_hid': 'inline label', 'tipo_punto': 'inline label', 'metodo_ext': 'inline label', 'tipocaptac': 'inline label', 'area_capta': 'inline label', 'caudal_ver': 'inline label', 'continuida': 'inline label', 'grados_lat': 'inline label', 'minutos_la': 'inline label', 'segundos_l': 'inline label', 'N': 'inline label', 'grados_lon': 'inline label', 'minutos_lo': 'inline label', 'segundos_1': 'inline label', 'W': 'inline label', 'altitud': 'inline label', 'tiene_macr': 'inline label', 'tiene_serv': 'inline label', 'sin_conces': 'inline label', 'red_monito': 'inline label', 'observacio': 'inline label', 'observac_1': 'inline label', 'red_region': 'inline label', 'fechacreac': 'inline label', 'fechamodif': 'inline label', 'logincreac': 'inline label', 'loginmodif': 'inline label', 'fechaproce': 'inline label', });
lyr_CaptacionesCercanasalProyecto_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});