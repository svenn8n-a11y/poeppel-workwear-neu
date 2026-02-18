
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        console.log("Launching browser...");
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();

        const filePath = 'file://' + path.join(process.cwd(), 'whitepaper_downloads_addon.html');
        console.log(`Loading: ${filePath}`);

        await page.goto(filePath, { waitUntil: 'networkidle0' });

        const pdfPath = path.join(process.cwd(), 'downloads', 'Poeppel_Prozesskosten_Addon.pdf');
        console.log(`Generating PDF to: ${pdfPath}`);

        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: { top: '0', right: '0', bottom: '0', left: '0' }
        });

        console.log("PDF Created successfully.");
        await browser.close();
    } catch (e) {
        console.error("Error generating PDF:", e);
        process.exit(1);
    }
})();
