let count = 0;
import test from "../test.js";
let data = await test.getSingleData('/EntryPoins/usuarios/all')


const grid1 = {
    view:"datatable",
    id:"grid",
    columns:[
      { id:"usuario", headermenu:false,	header:"Usuarios", fillspace:true },
      { id:"nombre", header:"Nombre", width:100 },
      { id:"apellido", header:"Apellido", width:100 },
      { id:"fechaultimoingreso", header:"UltimaConexion", width:120 },
      { header:{ content:"headerMenu" }, headermenu:false, width:35 }
    ],
    autoheight:true,
    scrollX: false,
    data: []
  };
  
  webix.ready(function(){
    webix.ui({
      view: "scrollview",
      scroll: "y",
      body: {
        rows:[
          grid1,
        ]
      }
    });
  });