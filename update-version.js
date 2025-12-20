const fs = require('fs');
const path = require('path');

function updateVersionInFile(filePath, oldVersion, newVersion) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const updatedContent = content
            .replace(new RegExp('版本号-' + oldVersion, 'g'), '版本号-' + newVersion)
            .replace(new RegExp('Version-' + oldVersion, 'g'), 'Version-' + newVersion);
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated ${filePath}`);
    } catch (error) {
        console.error(`Error updating ${filePath}: ${error.message}`);
    }
}

function updateVersionInDirectory(directory, oldVersion, newVersion) {
    const files = fs.readdirSync(directory);
    
    files.forEach(file => {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
            updateVersionInDirectory(filePath, oldVersion, newVersion);
        } else if (file.endsWith('.html')) {
            updateVersionInFile(filePath, oldVersion, newVersion);
        }
    });
}

// 更新版本号
const oldVersion = 'γ.25.1129.1';
const newVersion = 'γ1.25.1220.1';
const publicDir = path.join(__dirname, 'public');

updateVersionInDirectory(publicDir, oldVersion, newVersion);
console.log('All HTML files updated successfully!');