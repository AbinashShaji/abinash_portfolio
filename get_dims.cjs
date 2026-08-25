const fs = require('fs');

function getWebpDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  
  // WebP files start with 'RIFF'
  if (buffer.toString('ascii', 0, 4) !== 'RIFF') {
    console.log('Not a valid WebP file');
    return;
  }

  // The 'WEBP' signature is at offset 8
  if (buffer.toString('ascii', 8, 12) !== 'WEBP') {
    console.log('Not a valid WebP file');
    return;
  }

  const format = buffer.toString('ascii', 12, 16);
  let width, height;

  if (format === 'VP8 ') {
    // Lossy WebP
    // Dimensions are at offset 26
    width = buffer.readUInt16LE(26) & 0x3fff;
    height = buffer.readUInt16LE(28) & 0x3fff;
  } else if (format === 'VP8L') {
    // Lossless WebP
    // Dimensions are at offset 21
    const b0 = buffer[21];
    const b1 = buffer[22];
    const b2 = buffer[23];
    const b3 = buffer[24];
    
    width = 1 + (((b1 & 0x3f) << 8) | b0);
    height = 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
  } else if (format === 'VP8X') {
    // Extended WebP
    // Dimensions are at offset 24
    width = 1 + buffer.readUIntLE(24, 3);
    height = 1 + buffer.readUIntLE(27, 3);
  } else {
    console.log('Unknown WebP format: ' + format);
    return;
  }

  console.log(`Dimensions: ${width}x${height}`);
}

getWebpDimensions('public/images/hero/portfolio new.webp');
