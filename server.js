const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000; // EasyPanel usará el puerto que necesite, pero es bueno definir uno.

// Esta línea es la magia: le dice a Express que la carpeta '/app/public'
// debe ser accesible públicamente desde la raíz de la URL.
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Servidor de imágenes corriendo en el puerto ${PORT}`);
});
