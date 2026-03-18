const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        console.log('🚀 Démarrage de la génération du PDF...');
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        
        // Charger le fichier statique dédié au PDF
        const filePath = 'file://' + path.join(__dirname, 'cv-static.html');
        await page.goto(filePath, { waitUntil: 'networkidle2' });

        // Générer le PDF au format A4
        await page.pdf({
            path: 'CV_Reda_Ouaradane.pdf',
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0mm',
                right: '0mm',
                bottom: '0mm',
                left: '0mm'
            }
        });

        await browser.close();
        console.log('✅ PDF généré avec succès : CV_Reda_Ouaradane.pdf');
    } catch (error) {
        console.error('❌ Erreur lors de la génération :', error);
    }
})();