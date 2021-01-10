function UTF8_Encoding(str) {
  var bytes = [];
  for (ch of str) {
    let code = ch.codePointAt(0);
    if (code >= 65536 && code <= 1114111) {
      bytes.push((code >> 18) | 0xf0);
      bytes.push(((code >> 12) & 0x3f) | 0x80);
      bytes.push(((code >> 6) & 0x3f) | 0x80);
      bytes.push((code & 0x3f) | 0x80);
    } else if (code >= 2048 && code <= 65535) {
      bytes.push((code >> 12) | 0xe0);
      bytes.push(((code >> 6) & 0x3f) | 0x80);
      bytes.push((code & 0x3f) | 0x80);
    } else if (code >= 128 && code <= 2047) {
      bytes.push((code >> 6) | 0xc0);
      bytes.push((code & 0x3f) | 0x80);
    } else {
      bytes.push(code);
    }
  }
  return bytes;
}
