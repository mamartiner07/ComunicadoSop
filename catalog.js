  const OTHER_CATALOG = [
    {actividad:'BLOQUEOS CONSTANTES', titulo:'SD | AD | BLOQUEOS CONSTANTES', desc:`Descripción: Usuario reporta bloqueos constantes en su equipo
Cuenta afectada:
Responsable de la cuenta: 
Quien reporta:
Cantidad de veces bloqueada: 
¿Se encuentra en casa o en oficina sigma?: 
¿Cuántos dispositivos tiene asignados?: 
Horario:`, cat:'Account and Access', sub:'Network access', bs:'INF-ACTIVE DIRECTORY', extraFields:[
      {key:'Cuenta afectada', label:'Cuenta afectada'},{key:'Responsable de la cuenta', label:'Responsable de la cuenta'},{key:'Quien reporta', label:'Quien reporta'},{key:'Cantidad de veces bloqueada', label:'Cantidad de veces bloqueada'},{key:'¿Se encuentra en casa o en oficina sigma?', label:'¿Se encuentra en casa o en oficina sigma?'},{key:'¿Cuántos dispositivos tiene asignados?', label:'¿Cuántos dispositivos tiene asignados?'},{key:'Horario', label:'Horario'}
    ]},
    {actividad:'EXTENSIÓN DE VIGENCIA AD', titulo:'AD | EXTENSIÓN DE VIGENCIA', desc:`Descripción: Usuario solicita extensión de vigencia de su cuenta de red
Cuenta afectada:
Responsable de la cuenta: 
Cantidad de Meses a extender:
Numero:
Horario:`, cat:'Account and Access', sub:'Network access', bs:'INF-SD ACTIVE DIRECTORY - EXTENSIÓN DE V', extraFields:[
      {key:'Cuenta afectada', label:'Cuenta afectada'},{key:'Responsable de la cuenta', label:'Responsable de la cuenta'},{key:'Cantidad de Meses a extender', label:'Cantidad de Meses a extender'},{key:'Numero', label:'Numero'},{key:'Horario', label:'Horario'}
    ]},
    {actividad:'EXTENSION DE VIGENCIA SAP', titulo:'SAP | EXTENSIÓN DE VIGENCIA', desc:`Descripción: Usuario solicita extensión de vigencia en su cuenta de Sap
Error: Cuenta expirada
Usuario:
Mandante:`, cat:'Account and Access', sub:'SAP access', bs:'INF-SD SAP - EXTENSIÓN DE VIGENCIA USUARIO SAP', extraFields:[
      {key:'Usuario', label:'Usuario'},{key:'Mandante', label:'Mandante'}
    ]},
    {actividad:'FALLA DE IMPRESIÓN EN SAP', titulo:'SAP | FALLA DE IMPRESIONES', desc:`Descripción:
Nombre de la impresora en SAP( ZZ | YY):
IP de la impresora (10.140 | 140.140.):
Sistema (PRD,CRM,NOP): 
Marca:
Folio:
Serie:
Descartes: 
Numero:
Departamento:
*Horario en el que se encuentra:`, cat:'Servers | Storage and Backups', sub:'Fuente de alimentación', bs:'INF-SD SM9', extraFields:[
  {key:'Descripción', label:'Descripción'},{key:'Nombre de la impresora en SAP( ZZ | YY)', label:'Nombre de la impresora en SAP( ZZ | YY)'},{key:'IP de la impresora (10.140 | 140.140.):', label:'IP de la impresora (10.140 | 140.140.):'},{key:'Sistema (PRD,CRM,NOP)', label:'Sistema (PRD,CRM,NOP)'},{key:'Marca', label:'Marca'},{key:'Folio', label:'Folio'},{key:'Serie', label:'Serie'},{key:'Descartes', label:'Descartes'},{key:'Numero', label:'Numero'},{key:'Departamento', label:'Departamento'},{key:'*Horario en el que se encuentra:', label:'*Horario en el que se encuentra:'}
    ]},
    {actividad:'FALLA DE IMPRESIÓN OFFICE', titulo:'OFFICE | FALLA DE IMPRESIÓN', desc:`Descripción:
IP de la impresora (10.140 | 140.140.):
Marca:
Folio:
Serie:
Descartes: 
Numero:
Departamento:
*Horario en el que se encuentra:`, cat:'Productivity', sub:'Falla / Interrupción', bs:'INF-CD PRINTER', extraFields:[
  {key:'Descripción', label:'Descripción'},{key:'IP de la impresora (10.140 | 140.140.)', label:'IP de la impresora (10.140 | 140.140.)'},{key:'Marca', label:'Marca'},{key:'Folio', label:'Folio'},{key:'Serie', label:'Serie'},{key:'Descartes', label:'Descartes'},{key:'Numero', label:'Numero'},{key:'Departamento', label:'Departamento'},{key:'*Horario en el que se encuentra:', label:'*Horario en el que se encuentra:'}
    ]},
    {actividad:'FALLA DE IMPRESIÓN GENERAL', titulo:'FALLA DE IMPRESIONES GENERAL', desc:`Descripción:
Nombre de la impresora:
IP de la impresora (10.140 | 140.140.):
Sistema (PRD,CRM,NOP):
Marca:
Folio:
Serie:
¿La falla es en sap y en office?:
Descartes: 
Numero:
Departamento:
*Horario en el que se encuentra:`, cat:'Productivity', sub:'Falla / Interrupción', bs:'INF-CD PRINTER', extraFields:[
  {key:'Descripción', label:'Descripción'},{key:'Nombre de la impresora', label:'Nombre de la impresora'},{key:'IP de la impresora (10.140 | 140.140.)', label:'IP de la impresora (10.140 | 140.140.)'},{key:'Sistema (PRD,CRM,NOP)', label:'Sistema (PRD,CRM,NOP)'},{key:'Marca', label:'Marca'},{key:'Folio', label:'Folio'},{key:'Serie', label:'Serie'},{key:'¿La falla es en sap y en office?', label:'¿La falla es en sap y en office?'},{key:'Descartes', label:'Descartes'},{key:'Numero', label:'Numero'},{key:'Departamento', label:'Departamento'},{key:'*Horario en el que se encuentra:', label:'*Horario en el que se encuentra:'}
    ]},
    {actividad:'CONFIGURACION DE IMPRESORA', titulo:'INSTALAR IMPRESORA OFFICE', desc:`Descripción:
Marca:
Modelo:
Descartes: 
Numero:
Departamento:
*Horario en el que se encuentra:`, cat:'Productivity', sub:'Installation / Configuration', bs:'INF-SD GLOBAL PRINTING', extraFields:[
  {key:'Descripción', label:'Descripción'},{key:'Marca', label:'Marca'},{key:'Modelo', label:'Modelo'},{key:'Descartes', label:'Descartes'},{key:'Numero', label:'Numero'},{key:'Departamento', label:'Departamento'},{key:'*Horario en el que se encuentra:', label:'*Horario en el que se encuentra:'}
    ]},
    {actividad:'FALLA DE RED', titulo:'FALLA DE RED', desc:`Descripción:
 Nombre de la red:
 La falla es por Wifi o cable:
 Numero de personas afectadas:
 Departamento:
 Numero telefónico:
 Numero 2do contacto:
 Horario laboral:`, cat:'NetworkConnectivity', sub:'Falla / Interrupción', bs:'INFTELCO- NETWORK NODE', extraFields:[
      {key:'Descripción', label:'Descripción'},
      {key:'Nombre de la red', label:'Nombre de la red'},
      {key:'La falla es por Wifi o cable', label:'La falla es por Wifi o cable'},
      {key:'Numero de personas afectadas', label:'Numero de personas afectadas'},
      {key:'Departamento', label:'Departamento'},
      {key:'Numero telefónico', label:'Numero telefónico'},
      {key:'Numero 2do contacto', label:'Numero 2do contacto'},
      {key:'Horario laboral', label:'Horario laboral'}
    ]},
    {actividad:'FALLA MOVIL', titulo:'MOVILIDAD | FALLA HW/SW', desc:`Descripción:
Falla:
Marca:
Modelo:
Imei:
Número telefónico personal:
Número telefónico corporativo:
Horario:`, cat:'Productivity', sub:'Falla / Interrupción', bs:'INFMOBILITY-CELLPHONE', extraFields:[
  {key:'Descripción', label:'Descripción'},{key:'Falla', label:'Falla'},{key:'Marca', label:'Marca'},{key:'Modelo', label:'Modelo'},{key:'Imei', label:'Imei'},{key:'Número telefónico personal', label:'Número telefónico personal'},{key:'Número telefónico corporativo', label:'Número telefónico corporativo'},{key:'Horario', label:'Horario'}
    ]},
    {actividad:'MOBILIDAD AIRWATCH', titulo:'MOVILIDAD AIRWATCH | CONFIGURACION', desc:`Descripción:
Falla o Requerimiento:
Marca:
Modelo:
Imei:
Número telefónico personal:
Número telefónico corporativo:
Horario:
WI utilizada:`, cat:'Productivity', sub:'Falla / Interrupción', bs:'INFMOBILITY-AIRWATCH', extraFields:[
  {key:'Descripción', label:'Descripción'},{key:'Falla o Requerimiento', label:'Falla o Requerimiento'},
  {key:'Marca', label:'Marca'},{key:'Modelo', label:'Modelo'},{key:'Imei', label:'Imei'},
  {key:'Número telefónico personal', label:'Número telefónico personal'},
  {key:'Número telefónico corporativo', label:'Número telefónico corporativo'},
  {key:'Horario', label:'Horario'},{key:'WI utilizada', label:'WI utilizada'}
    ]},
    {actividad:'ASESORIA', titulo:'PORTAL DE SERVICIOS | ASESORIA', desc:`Descripción:
Aplicación Afectada:
Descartes:
Horario laboral:
RITM:`, cat:'Service Request', sub:'Installation / Configuration', bs:'General Information for IT Services', extraFields:[
  {key:'Descripción', label:'Descripción'},{key:'Aplicación Afectada', label:'Aplicación Afectada'},{key:'Descartes', label:'Descartes'},
  {key:'Horario laboral', label:'Horario laboral'},{key:'RITM', label:'RITM'}
    ]},
    {actividad:'CASH PRO nueva cuenta', titulo:'BAR-S | CASHPRO | ACCOUNT CREATION', desc:`Description: User requests the creation of CASHPRO account.
Error: 
Contact hours:
User/name:
Role:
Route:
Address:
Phone:
Email: dsdapps@bar-s.com
Reference User:
Justification:
User to unsubscribe (if applicable):
Do you need to have REMOTE DEPOSIT Active?`,
  cat: 'Account and Access',
  sub: 'Non SAP application access',
  bs: 'INF - SD USA CASH PRO',
  extraFields: [
    { key: 'Error', label: 'Error' },
    { key: 'Contact hours', label: 'Contact hours' },
    { key: 'User/name', label: 'User/name' },
    { key: 'Role', label: 'Role' },
    { key: 'Route', label: 'Route' },
    { key: 'Address', label: 'Address' },
    { key: 'Phone', label: 'Phone' },
    { key: 'Reference User', label: 'Reference User' },
    { key: 'Justification', label: 'Justification' },
    { key: 'User to unsubscribe (if applicable)', label: 'User to unsubscribe (if applicable)' },
    { key: 'Do you need to have REMOTE DEPOSIT Active?', label: 'Do you need to have REMOTE DEPOSIT Active?' }
  ]
},
{
  actividad: 'JP MORGAN creacion de cuenta',
  titulo: 'BAR-S | JP MORGAN | ACCOUNT CREATION',
  desc: `Description: User requests the creation of JP MORGAN account.
Error: 
Contact hours:
User/name:
Role:
Route:
Adress:
Phone:
Email: 
Reference User:
Justification:
User to unsubscribe (if applicable):
Do you need to have REMOTE DEPOSIT Active? (Yes / No)`,
  cat: 'Account and Access',
  sub: 'Non SAP application access',
  bs: 'INF - SD USA JP MORGAN',
  extraFields: [
    { key: 'Error', label: 'Error' },
    { key: 'Contact hours', label: 'Contact hours' },
    { key: 'User/name', label: 'User/name' },
    { key: 'Role', label: 'Role' },
    { key: 'Route', label: 'Route' },
    { key: 'Address', label: 'Address' },
    { key: 'Phone', label: 'Phone' },
    { key: 'Email', label: 'Email' },
    { key: 'Reference User', label: 'Reference User' },
    { key: 'Justification', label: 'Justification' },
    { key: 'User to unsubscribe (if applicable)', label: 'User to unsubscribe (if applicable)' },
    { key: 'Do you need to have REMOTE DEPOSIT Active? (Yes / No)', label: 'Do you need to have REMOTE DEPOSIT Active? (Yes / No)' }
  ]
},

    {actividad:'ENCUESTAS', titulo:'SUITE | ENCUESTAS', desc: `Descripción: Usuario solicita apoyo con sus encuestas.
Error: Comenta que dentro de la Suite visualiza un error en la sección de encuestas.
Aplicación afectada: Sigma Suite Encuestas
      N° de ruta: 
      IMEI 1: 
      IMEI 2: 
      ¿Qué problema tiene con la encuesta?: 
      ¿Qué encuestas requiere?: 
      Núm. de contacto: `,cat:'Business Systems and Applications', sub:'Failure', bs:'Sigma App (Survey)  Application',  extraFields: [
        { key: 'N° de ruta', label: 'N° de ruta' },
        { key: 'IMEI 1', label: 'IMEI 1' },
        { key: 'IMEI 2', label: 'IMEI 2' },
        { key: '¿Qué problema tiene con la encuesta?', label: '¿Qué problema tiene con la encuesta?' },
        { key: '¿Qué encuestas requiere?', label: '¿Qué encuestas requiere?' },
        { key: 'Núm. de contacto', label: 'Núm. de contacto' }
      ]
    },
    {
      actividad: 'PROMOCIONES',
      titulo: 'SUITE | PROMOCIONES',
      desc: `Descripción: Usuario solicita apoyo con sus promociones.
Error: Comenta que dentro de la Suite no tiene promociones.
Aplicación afectada: Sigma Suite Promociones.
    N° de ruta: 
    Tipo de ruta (Local/Foranea):
    IMEI 1: 
    IMEI 2: 
    Núm. de contacto: `,
      cat: 'Business Systems and Applications',
      sub: 'Failure',
      bs: 'SMARTPAC – Mobile Promotions',
      extraFields: [
        { key: 'N° de ruta', label: 'N° de ruta' },
        { key: 'Tipo de ruta (Local/Foranea)', label: 'Tipo de ruta (Local/Foranea)' },
        { key: 'IMEI 1', label: 'IMEI 1' },
        { key: 'IMEI 2', label: 'IMEI 2' },
        { key: 'Núm. de contacto', label: 'Núm. de contacto' }
      ]
    },
    
    {
      actividad: 'ASIGNACIÓN DE VEHÍCULO',
      titulo: 'SMARTPAC|NO PUEDE ASIGNAR VEHÍCULO',
      desc: `Descripción: Usuario solicita apoyo con asignación de vehículo.
Error: Comenta que no puede seleccionar el vehículo correcto en smartpac.
Aplicación afectada: Sigma Suite Rutas.
    Número de vehículo: 
    N° de ruta: 
    Ruta SAP: 
    IMEI 1: 
    IMEI 2: 
    Núm. de contacto: `,
      cat: 'Business Systems and Applications',
      sub: 'Failure',
      bs: 'SMARTPAC – Mobile Truck Check list',
      extraFields: [
        { key: 'Número de vehículo', label: 'Número de vehículo' },
        { key: 'N° de ruta', label: 'N° de ruta' },
        { key: 'Ruta SAP', label: 'Ruta SAP' },
        { key: 'IMEI 1', label: 'IMEI 1' },
        { key: 'IMEI 2', label: 'IMEI 2' },
        { key: 'Núm. de contacto', label: 'Núm. de contacto' }
      ]
    },
    
    {
      actividad: 'SMART GIC',
      titulo: 'SMART GIC| SD | "Error"',
      desc: `Descripción: Usuario solicita apoyo con aplicación de Smart Gic.
Error: 
Aplicación afectada: Smart Gic
    ¿Qué perfil tiene el usuario?: 
    Descartes realizados: 
    Número de nómina: 
    Núm. de contacto:
    Adjuntar imagen del error. `,
      cat: 'Business Systems and Applications',
      sub: 'Failure',
      bs: 'Smart Gic Repse - Visit',
      extraFields: [
        { key: 'Error', label: 'Error' },
        { key: '¿Qué perfil tiene el usuario?', label: '¿Qué perfil tiene el usuario?' },
        { key: 'Descartes realizados', label: 'Descartes realizados' },
        { key: 'Número de nómina', label: 'Número de nómina' },
        { key: 'Núm. de contacto', label: 'Núm. de contacto' }
      ]
    },
    
    {
      actividad: 'VIATICOS RUTAS FORANEAS',
      titulo: 'SUITE | VIATICOS RUTAS FORANEAS',
      desc: `Descripción: Usuario solicita apoyo con sus viáticos.
    Error: 
Aplicación afectada: Viaticos rutas foráneas
    N° de ruta: 
    Tipo de ruta: Local ( ) Foránea ( )
    IMEI 1: 
    IMEI 2: 
    ¿Cuenta con viáticos asignados?: 
    Núm. de contacto: `,
      cat: 'Business Systems and Applications',
      sub: 'Failure',
      bs: 'Smart PAC - travel expenses',
      extraFields: [
        { key: 'Error', label: 'Error' },
        { key: 'N° de ruta', label: 'N° de ruta' },
        { key: 'Tipo de ruta', label: 'Tipo de ruta' },
        { key: 'IMEI 1', label: 'IMEI 1' },
        { key: 'IMEI 2', label: 'IMEI 2' },
        { key: '¿Cuenta con viáticos asignados?', label: '¿Cuenta con viáticos asignados?' },
        { key: 'Núm. de contacto', label: 'Núm. de contacto' }
      ]
    },


{
  actividad: 'WORKFLOW',
  titulo: 'WORKFLOW | "ERROR"',
  desc: `Descripción: Usuario solicita apoyo con aplicación workflow.
Error:
Aplicación afectada: Workflow
¿Es WF suite? O ¿http://140.140.20.83/WorkflowPrincipal/Tablero?
¿Desde cuando presenta el error?
¿Se validó la URL HTTP?
¿Usuario se encuentra bloqueado?
¿Usuario probó en diferente navegador?
Núm. de contacto:
Adjuntar imagen del error `,
  cat: 'Business Systems and Applications',
  sub: 'Failure',
  bs: 'Workflows - Administrator Application',
  extraFields: [
    { key: 'Error', label: 'Error' },
    { key: '¿Es WF suite? O ¿http://140.140.20.83/WorkflowPrincipal/Tablero?', label: '¿Es WF suite? O ¿http://140.140.20.83/WorkflowPrincipal/Tablero?' },
    { key: '¿Desde cuando presenta el error?', label: '¿Desde cuando presenta el error?' },
    { key: '¿Se validó la URL HTTP?', label: '¿Se validó la URL HTTP?' },
    { key: '¿Usuario se encuentra bloqueado?', label: '¿Usuario se encuentra bloqueado?' },
    { key: '¿Usuario probó en diferente navegador?', label: '¿Usuario probó en diferente navegador?' },
    { key: 'Núm. de contacto', label: 'Núm. de contacto' }
  ]
},

{
  actividad: 'REPROCESAR FACTURAS',
  titulo: 'SAP | REPROCESO DE  FACTURAS',
  desc: `Descripción: Usuario solicita apoyo para reprocesar factura(s).
Aplicación afectada: SAP
¿Cuáles son las facturas a reprocesar?: 
¿Es factura OXXO?: Si ( ) No ( )
Se reprocesa: A ruta ( ) A cliente ( )
¿Se encuentra anulada factura original? Si ( ) No ( )`,
  cat: 'Business Systems and Applications',
  sub: 'Failure',
  bs: 'SD Invoices / Credit memo - Reprocess',
  extraFields: [
    { key: '¿Cuáles son las facturas a reprocesar?', label: '¿Cuáles son las facturas a reprocesar?' },
    { key: '¿Es factura OXXO?', label: '¿Es factura OXXO?' },
    { key: 'Se reprocesa', label: 'Se reprocesa' },
    { key: '¿Se encuentra anulada factura original?', label: '¿Se encuentra anulada factura original?' }
  ]
},
{
  actividad: 'RECALCULAR INVENTARIO',
  titulo: 'SAP | RECALCULAR INVENTARIO',
  desc: `Descripción: Usuario solicita recalcular inventario ya que visualiza un error en su aplicación.
Aplicación afectada: SAP/Smart Pac
El pedido se encuentra (Duplicado o faltante):
Folio del inventario:
Ruta: 
Núm. de contacto: `,
  cat: 'Business Systems and Applications',
  sub: 'Failure',
  bs: 'CRM - SOL Inventory differences',
  extraFields: [
    { key: 'El pedido se encuentra (Duplicado o faltante)', label: 'El pedido se encuentra (Duplicado o faltante)' },
    { key: 'Folio del inventario', label: 'Folio del inventario' },
    { key: 'Ruta', label: 'Ruta' },
    { key: 'Núm. de contacto', label: 'Núm. de contacto' }
  ]
},
{
  actividad: 'ERROR EN INVENTARIO EN SMARTPAC',
  titulo: 'SAP | INVENTARIOS | ERROR EN INVENTARIO',
  desc: `Descripción: Usuario solicita apoyo dentro de la aplicación SAP.
Error: 
Aplicación afectada: SAP/Smart Pac
¿Presenta diferencias?
¿Es el mismo inventario físico vs app?
Ruta: 
Núm. de contacto: `,
  cat: 'Business Systems and Applications',
  sub: 'Failure',
  bs: 'SMARTPAC – Mobile Inventory issues',
  extraFields: [
    { key: 'Error', label: 'Error' },
    { key: '¿Presenta diferencias?', label: '¿Presenta diferencias?' },
    { key: '¿Es el mismo inventario físico vs app?', label: '¿Es el mismo inventario físico vs app?' },
    { key: 'Ruta', label: 'Ruta' },
    { key: 'Núm. de contacto', label: 'Núm. de contacto' }
  ]
},

{
  actividad: 'TIMBRAR FACTURAS',
  titulo: 'SAP | TIMBRADO DE FACTURAS',
  desc: `Descripción: Usuario solicita apoyo para timbrar factura(s).
Aplicación afectada: SAP
¿Cuáles son las facturas a timbrar?:
Ruta: 
N° de cliente:
Núm. de contacto: `,
  cat: 'Business Systems and Applications',
  sub: 'Failure',
  bs: 'SD Invoices / Credit memo - Timbrado',
  extraFields: [
    { key: '¿Cuáles son las facturas a timbrar?', label: '¿Cuáles son las facturas a timbrar?' },
    { key: 'Ruta', label: 'Ruta' },
    { key: 'N° de cliente', label: 'N° de cliente' },
    { key: 'Núm. de contacto', label: 'Núm. de contacto' }
  ]
},

{
  actividad: 'METODO DE PAGO',
  titulo: 'SAP | METODO DE PAGO | CAMBIAR METODO DE PAGO',
  desc: `Descripción: Usuario solicita cambio de método de pago.
Error: Comenta que el método de pago se ingresó de manera incorrecta.
Aplicación afectada: SAP
N° de factura(s): 
Fecha de la factura: 
Número de remisión: 
Ruta: 
Método de pago a cambiar: 
¿Cuenta con Vo.Bo. del ROC?`,
  cat: 'Business Systems and Applications',
  sub: 'Failure',
  bs: 'SMARTPAC – Mobile Payment types',
  extraFields: [
    { key: 'N° de factura(s)', label: 'N° de factura(s)' },
    { key: 'Fecha de la factura', label: 'Fecha de la factura' },
    { key: 'Número de remisión', label: 'Número de remisión' },
    { key: 'Ruta', label: 'Ruta' },
    { key: 'Método de pago a cambiar', label: 'Método de pago a cambiar' },
    { key: '¿Cuenta con Vo.Bo. del ROC?', label: '¿Cuenta con Vo.Bo. del ROC?' }
  ]
},

{
  actividad: 'DIFERENCIA EN INVENTARIO',
  titulo: 'SAP | DIFERENCIA EN INVENTARIO',
  desc: `Descripción: Usuario solicita apoyo con diferencias en inventario, ya que no puede liquidar.
Error: No puede liquidar la ruta, ya que presenta diferencias en el inventario
Aplicación afectada: SAP
Ruta: 
¿Cuáles son las diferencias? ¿Son positivas o negativas?
SKUs: `,
  cat: 'Business Systems and Applications',
  sub: 'Failure',
  bs: 'CRM - SOL Inventory differences',
  extraFields: [
    { key: 'Ruta', label: 'Ruta' },
    { key: '¿Cuáles son las diferencias? ¿Son positivas o negativas?', label: '¿Cuáles son las diferencias? ¿Son positivas o negativas?' },
    { key: 'SKUs', label: 'SKUs' }
  ]
},

{
  actividad: 'RECARGA DE INVENTARIO',
  titulo: 'SMARTPAC|RECARGA DE INVENTARIO',
  desc: `Descripción: Usuario solicita apoyo para la recarga de inventario.
Error: Comenta que no visualiza su pedido en el dispositivo.
Aplicación afectada: Smart Pac
¿Ya liquidó recientemente?
Ruta: 
Folio del pedido: `,
  cat: 'Business Systems and Applications',
  sub: 'Failure',
  bs: 'SMARTPAC – Mobile Inventory reload',
  extraFields: [
    { key: '¿Ya liquidó recientemente?', label: '¿Ya liquidó recientemente?' },
    { key: 'Ruta', label: 'Ruta' },
    { key: 'Folio del pedido', label: 'Folio del pedido' }
  ]
},

    {actividad:'CANCELAR VENTA', titulo:'SAP | CANCELACIÓN DE VENTA', desc:`Descripción: Usuario solicita cancelación de venta.
Error: 
Aplicación afectada: SAP
Folio de venta: 
¿Cuenta con Vo.Bo. del ROC?:`, cat:'Business Systems and Applications', sub:'Failure', bs:'SMARTPAC – Mobile  Cancel order', extraFields:[
      {key:'Error', label:'Error'},{key:'Folio de venta', label:'Folio de venta'},{key:'¿Cuenta con Vo.Bo. del ROC?', label:'¿Cuenta con Vo.Bo. del ROC?'}
    ]},
    {actividad:'EXCLUSION DE MATERIAL', titulo:'SAP | QUITAR MATERIAL CON EXCLUSION', desc:`Descripción: Usuario requiere apoyo con material en exclusión.
Error: usuario reporta que tiene SKU con exclusión.
Aplicación afectada: SAP
SKU: 
Ruta: 
Tipo de exclusión: 
Centro:`, cat:'Business Systems and Applications', sub:'Failure', bs:'CRM - SOL Nullified item', extraFields:[
      {key:'SKU', label:'SKU'},{key:'Ruta', label:'Ruta'},{key:'Tipo de exclusión', label:'Tipo de exclusión'},{key:'Centro', label:'Centro'}
    ]},

    {actividad:'SHAREPOINT  ESPACIO DE ALMACENAMIENTO', titulo:'SHAREPOINT | ESPACIO DE ALMACENAMIENTO', desc:`Descripción: Usuario solicita aumentar espacio de almacenamiento en Sharepoint.
Error: Poco almacenamiento
Aplicación afectada: Sharepoint
      Nombre del sitio:`, cat:'Service Request', sub:'Installation / Configuration', bs:'INFCOLLABORATION-SHAREPOINT', extraFields:[
            {key:'Nombre del sitio', label:'Nombre del sitio'}
          ]},

    {actividad:'SIGMANET  ERROR PARA INICIAR SESION', titulo:'SIGMANET | ERROR PARA INICIAR SESION', desc:`Descripción: Usuario tiene problemas para ingresar a Sigmanet.
Error:
Aplicación afectada: Sigmanet
Descartes ¿Se valido que estruviera dado de alta? ¿Se valido la OU? ¿Se valido la cuenta de red?`, cat:'Service Request', sub:'Installation / Configuration', bs:'General Information for IT Services', extraFields:[
            {key:'Error', label:'Error'},{key:'Descartes ¿Se valido que estruviera dado de alta? ¿Se valido la OU? ¿Se valido la cuenta de red?', label:'Descartes ¿Se valido que estruviera dado de alta? ¿Se valido la OU? ¿Se valido la cuenta de red?'}
          ]},

    {actividad:'MODIFICACIÓN DE CUENTA AD', titulo:'UM | MODIFICACIÓN DE CUENTA', desc:`Descripción:
  Aplicación afectada: Active Directory
  Descartes ¿Se valido que existencia de la cuenta a nivel AD?:
  ¿Se solicito vobo a Manager/Seguridad? En caso de aplicar`, cat:'Service Request', sub:'Installation / Configuration', bs:'INFUM- AD ACCESS', extraFields:[
            {key:'Descripción', label:'Descripción'},{key:'Descartes ¿Se valido que existencia de la cuenta a nivel AD?', label:'Descartes ¿Se valido que existencia de la cuenta a nivel AD?'},{key:'¿Se solicito vobo a Manager/Seguridad?', label:'¿Se solicito vobo a Manager/Seguridad? En caso de aplicar'}
                      ]},
  ];
