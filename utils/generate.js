//generate substring
export function generate(pecah, n) {
  var result = ''
  for (let i = 0; i < n; i++) {
    result += pecah[i] + ' '
  }
  return result
}
