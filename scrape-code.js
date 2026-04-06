import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');
const outputFile = path.join(__dirname, 'codigo_fuente.txt');

// Extensiones permitidas para asegurar que exportamos solo código y no binarios (imágenes, fuentes, etc.)
const allowedExtensions = ['.js', '.jsx', '.css', '.html'];

let outputContent = '';

function traverseDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Si es un directorio, seguimos excavando recursivamente
            traverseDirectory(fullPath);
        } else {
            // Si es un archivo, obtenemos su extensión
            const ext = path.extname(fullPath);
            
            if (allowedExtensions.includes(ext) || ext === '') {
                const relativePath = path.relative(__dirname, fullPath);
                const fileName = path.basename(fullPath);
                const fileContent = fs.readFileSync(fullPath, 'utf8');

                // Formateo del "scraping" para el txt
                outputContent += `=================================================\n`;
                outputContent += `RUTA: ${relativePath.replace(/\\/g, '/')}\n`;
                outputContent += `NIVEL/ARCHIVO: ${fileName}\n`;
                outputContent += `=================================================\n`;
                outputContent += `${fileContent}\n\n\n`;
            }
        }
    }
}

try {
    console.log("Iniciando escaneo del directorio 'src/'...");
    traverseDirectory(srcDir);
    
    // Escribimos todo el contenido acumulado en un solo txt
    fs.writeFileSync(outputFile, outputContent, 'utf8');
    console.log(`¡Éxito! El código ha sido recolectado en el archivo: ${outputFile}`);
} catch (err) {
    console.error("Hubo un error escaneando los archivos:", err);
}
