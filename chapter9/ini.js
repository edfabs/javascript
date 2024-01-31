function analizarINI(string) {
    // Comenzar con un objeto para mantener los campos de nivel superior
    let resultado = {};
    let seccion = resultado;
    string.split(/\r?\n/).forEach(linea => {
      let coincidencia;
      if (coincidencia = linea.match(/^(\w+)=(.*)$/)) {
        seccion[coincidencia[1]] = coincidencia[2];
      } else if (coincidencia = linea.match(/^\[(.*)\]$/)) {
        seccion = resultado[coincidencia[1]] = {};
      } else if (!/^\s*(;.*)?$/.test(linea)) {
        throw new Error("Linea '" + linea + "' no es valida.");
      }
    });
    return resultado;
  }
  
  console.log(analizarINI(`
  nombre=Vasilis
  [direccion]
  ciudad=Tessaloniki`));