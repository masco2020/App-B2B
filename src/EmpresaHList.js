import React, { Component } from "react";
import { FlatList } from 'react-native';
import styles from './Style.js';
import { View } from 'native-base';
import EmpresaHBox from "./EmpresaHBox";

export default class EmpresaHList extends Component {

  render() {
      const prueba = {
          prueba1:'prueba exitoza',
          prueba2: 'prueba exitoza 2',
        /* 
        1 Agronegocios #86BA24 A
        2 Exportación de Servicios #E00613 S
        3 Industria de la vestimenta y decoración #A0137B I
        4 Manufacturas diversas #FFCC21 M
        5 Productos Pesqueros #0071B8 P
        */
        }
    return (
        <View style={[styles.containerEmpresasList]}>
            <FlatList
            data={[
                {
                    nombre: 'Perúexportaciones S.A.C', 
                    ruc: '20109372649', 
                    tipoCliente: 'Exportador',
                    razonSocial:'Perú Exportaciones S.A.C',
                    productos:'',
                    direccion:'Av Ejercito 1180, Magdalena Lima',
                    ubicacion:'Lima', 
                    telefonoEmpresarial: '+51 558 5445 554',
                    correoEmpresarial: 'info@peruexportaciones.pe',
                    listaSectores:[
                        {
                            idSector: 1, nombre: 'Agronegocios', color: '#86BA24', letra:'A',
                            listaProducto:[
                                {
                                    idProducto: 1, nombre: 'Productos Alimenticios / Alimentos y Bebidas - Orgánicos',
                                },
                                {
                                    idProducto: 2, nombre: 'Alimentos congelados',
                                },
                                {
                                    idProducto: 3, nombre: 'Alimentos funcionales',
                                },
                            ]
                        }, 
                        {
                            idSector: 4, nombre: 'Manufacturas diversas', color: '#FFCC21', letra:'M',
                            listaProducto:[
                                {
                                    idProducto: 1, nombre: 'Autopartes',
                                },
                                {
                                    idProducto: 2, nombre: 'Colorantes Naturales',
                                },
                                {
                                    idProducto: 3, nombre: 'Cosméticos & Ingredientes Naturales',
                                },
                            ]
                        },
                    ]
                },
                {
                    nombre: 'Perúexportex S.A.C', 
                    ruc: '20103927382', 
                    tipoCliente: 'Exportador',
                    razonSocial: 'Perú Exportex S.A.C',
                    productos:'',
                    direccion:'Av Ejercito 1180, Magdalena Lima',
                    ubicacion:'Lima',
                    telefonoEmpresarial: '+51 854 364 684',
                    correoEmpresarial: 'info@peruexportex.pe',
                    listaSectores:[
                        {
                            idSector: 2, nombre: 'Exportación de Servicios', color: '#E00613', letra:'S',
                            listaProducto:[
                                {
                                    idProducto: 3, nombre: 'BPO - Centros de Contacto y Cobranza',
                                },
                                {
                                    idProducto: 4, nombre: 'Construcción',
                                },
                                {
                                    idProducto: 5, nombre: 'Consultoría en Ingeniería',
                                },
                            ]
                        }, 
                        {
                            idSector: 3, nombre: 'Industria de la vestimenta y decoración', color: '#A0137B', letra:'I',
                            listaProducto:[
                                {
                                    idProducto: 1, nombre: 'Autopartes',
                                },
                                {
                                    idProducto: 2, nombre: 'Colorantes Naturales',
                                },
                                {
                                    idProducto: 3, nombre: 'Cosméticos & Ingredientes Naturales',
                                },
                            ]
                        },
                        {
                            idSector: 4, nombre: 'Manufacturas diversas', color: '#FFCC21', letra:'M',
                            listaProducto:[
                                {
                                    idProducto: 1, nombre: 'Autopartes',
                                },
                                {
                                    idProducto: 2, nombre: 'Colorantes Naturales',
                                },
                                {
                                    idProducto: 3, nombre: 'Cosméticos & Ingredientes Naturales',
                                },
                            ]
                        },
                    ]
                },
                {
                    nombre: 'PerúexportaAgro S.A.C', 
                    ruc: '20109372649', 
                    tipoCliente: 'Exportador',
                    razonSocial: 'Perú ExportaAgro S.A.C',
                    productos:'',
                    direccion:'Av Ejercito 1180, Magdalena Lima',
                    ubicacion:'Lima',
                    telefonoEmpresarial: '+51 475 697 656',
                    correoEmpresarial: 'info@peruexportaAgro.pe',
                    listaSectores:[
                        {
                            idSector: 1, nombre: 'Agronegocios', color: '#86BA24', letra:'A',
                            listaProducto:[
                                {
                                    idProducto: 1, nombre: 'Productos Alimenticios / Alimentos y Bebidas - Orgánicos',
                                },
                                {
                                    idProducto: 2, nombre: 'Alimentos congelados',
                                },
                                {
                                    idProducto: 3, nombre: 'Alimentos funcionales',
                                },
                            ]
                        },
                        {
                            idSector: 5, nombre: 'Productos Pesqueros', color: '#0071B8', letra:'P',
                            listaProducto:[
                                {
                                    idProducto: 1, nombre: 'Autopartes',
                                },
                                {
                                    idProducto: 2, nombre: 'Colorantes Naturales',
                                },
                                {
                                    idProducto: 3, nombre: 'Cosméticos & Ingredientes Naturales',
                                },
                            ]
                        },
                    ]
                },
                {
                    nombre: 'PerúexportaPeces S.A.C', 
                    ruc: '20103927382', 
                    tipoCliente: 'Exportador',
                    razonSocial: 'Perú ExportaPeces S.A.C',
                    productos:'',
                    direccion:'Av Ejercito 1180, Magdalena Lima',
                    ubicacion:'Lima',
                    telefonoEmpresarial: '+51 759 989 897',
                    correoEmpresarial: 'info@peruexportaPeces.pe',
                    listaSectores:[
                        {
                            idSector: 3, nombre: 'Industria de la vestimenta y decoración', color: '#A0137B', letra:'I',
                            listaProducto:[
                                {
                                    idProducto: 1, nombre: 'Autopartes',
                                },
                                {
                                    idProducto: 2, nombre: 'Colorantes Naturales',
                                },
                                {
                                    idProducto: 3, nombre: 'Cosméticos & Ingredientes Naturales',
                                },
                            ]
                        },
                    ]
                },
                // {tipsTittle: prueba.prueba2, tipsContent: prueba.prueba1,},
            ]}
            renderItem={({item, index}) => <EmpresaHBox item={item}/>}
            keyExtractor={(item, index) => item + index}
            />
        </View>
        
    );
  }
}

module.exports = EmpresaHList;