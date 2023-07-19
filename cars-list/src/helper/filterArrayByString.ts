export function filterArrayByString<T, Key extends keyof T>(
  array: Array<T>,
  key: Key,
  text: string
): Array<T> {
  return array.filter((item) =>
    String(item[key]).toLowerCase().includes(text.toLowerCase())
  )
}
