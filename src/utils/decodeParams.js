/**
 * Giải mã chuỗi query string của URL thành một object.
 * @param {string} paramString - Chuỗi query string cần giải mã.
 * @returns {object} Một object chứa các cặp key-value đã được giải mã.
 */
export function decodeParams(paramString) {
  const searchParams = new URLSearchParams(paramString);
  const decodedParams = {};
  // Giải mã giá trị bằng hàm decodeURIComponent() và lưu trữ giá trị đã được giải mã vào trong object decodedParams.
  for (const [key, value] of searchParams) {
    decodedParams[key] = decodeURIComponent(value);
  }

  return decodedParams;
}
