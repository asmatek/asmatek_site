// Generate a script to run Lighthouse for website performance.

const { exec } = require('child_process');

const url = 'https://ASMA-TEK.com';
const output = 'lighthouse-report.html';

exec(`npx lighthouse ${url} --output html --output-path ${output} --chrome-flags=--headless`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error running Lighthouse: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Lighthouse report generated: ${output}`);
});
