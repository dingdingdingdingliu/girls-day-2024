export default function imageLoader({ src }) {
  const baseUrl = src.split("?")[0];
  const quality = 75; // 使用在 next.config.js 中定义的质量
  return `${baseUrl}?q=${quality}&format=webp`;
}
