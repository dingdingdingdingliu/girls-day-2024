const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// 圖片根目錄
const imagesFolder = "./public/images";

function convertToWebP(dir) {
  // 遍歷子目錄
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.lstatSync(fullPath);

    if (stat.isDirectory()) {
      convertToWebP(fullPath);
    }

    // 如果是 .png 文件，進行轉換
    else if (file.endsWith(".png")) {
      const webpPath = fullPath.replace(".png", ".webp");

      // 使用 sharp 進行轉換
      sharp(fullPath)
        .webp({ quality: 85 })
        .toFile(webpPath) // 保存為 webp
        .then(() => {
          console.log(`成功轉換 ${file} 為 WebP 格式。`);
        })
        .catch((err) => {
          console.error(`轉換 ${file} 時出錯：`, err);
        });
    } else if (file.endsWith(".jpg")) {
      const webpPath = fullPath.replace(".jpg", ".webp");

      // 使用 sharp 進行轉換
      sharp(fullPath)
        .webp({ quality: 75 })
        .toFile(webpPath) // 保存為 webp
        .then(() => {
          console.log(`成功轉換 ${file} 為 WebP 格式。`);
        })
        .catch((err) => {
          console.error(`轉換 ${file} 時出錯：`, err);
        });
    }
  });
}

// 执行转换，传入根目录
convertToWebP(imagesFolder);
