// Nuevo Amanecer · recibe los datos de la app y los escribe en Google Sheets.
// 1) Cambia la CLAVE por una palabra tuya (la misma que pondrás en la app).
const CLAVE = 'cambia-esta-clave';

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    if (body.token !== CLAVE) return salida({ ok: false, error: 'Clave incorrecta' });

    // Si la app manda el código de la hoja lo usa; si no, usa la hoja donde está este script.
    const ss = body.sheetId
      ? SpreadsheetApp.openById(body.sheetId)
      : SpreadsheetApp.getActiveSpreadsheet();

    Object.keys(body.tablas).forEach(function (nombre) {
      const filas = body.tablas[nombre];
      const hoja = ss.getSheetByName(nombre) || ss.insertSheet(nombre);
      hoja.clearContents();
      if (filas.length) {
        hoja.getRange(1, 1, filas.length, filas[0].length).setValues(filas);
        hoja.getRange(1, 1, 1, filas[0].length).setFontWeight('bold').setBackground('#d4af37');
        hoja.setFrozenRows(1);
        hoja.autoResizeColumns(1, filas[0].length);
      }
    });
    return salida({ ok: true });
  } catch (err) {
    return salida({ ok: false, error: String(err) });
  }
}

function doGet() { return salida({ ok: true, mensaje: 'Nuevo Amanecer activo' }); }

function salida(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
