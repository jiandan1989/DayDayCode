function stringSort(words: string) {
  const arr = words.split(' ');
  return arr.sort((a: string, b: string) => a.match(/\d/g)[0] - b.match(/\d/g)[0]).join(' ');
}
