const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImagePath = path.join(__dirname, 'public', 'logo_icon.png');
const outputDir = path.join(__dirname, 'public', 'logos');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const sizes = [16, 32, 64, 128, 192, 256, 512];

async function generateLogos() {
  try {
    console.log('Generating logo packages...');
    
    // Generate different sizes in public/logos/
    for (const size of sizes) {
      await sharp(inputImagePath)
        .resize(size, size)
        .toFile(path.join(outputDir, `logo-${size}x${size}.png`));
      console.log(`Generated logo-${size}x${size}.png`);
    }

    // Generate Apple Touch Icon (180x180)
    await sharp(inputImagePath)
      .resize(180, 180)
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));
    console.log('Generated apple-touch-icon.png');
    
    // Copy for Next.js app directory favicons
    const appDir = path.join(__dirname, 'src', 'app');
    
    // Standard icon (can just be a nice medium size, Next.js will use this as favicon)
    await sharp(inputImagePath)
      .resize(64, 64)
      .toFile(path.join(appDir, 'icon.png'));
    console.log('Generated src/app/icon.png for Next.js favicon');

    // Apple icon for Next.js
    await sharp(inputImagePath)
      .resize(180, 180)
      .toFile(path.join(appDir, 'apple-icon.png'));
    console.log('Generated src/app/apple-icon.png for Next.js');

    console.log('Finished generating all logo packages!');
  } catch (err) {
    console.error('Error generating logos:', err);
  }
}

generateLogos();
