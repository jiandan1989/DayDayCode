function longestOne(s1: string, s2: string): string {
  //  return [...new Set(s1 + s2)].sort((a: string, b: string) => a.localeCompare(b)).join('');
  return [...new Set(s1 + s2)].sort().join('');
}

function longestTwo(s1: string, s2: string) {
  return Array.from(...new Set(s1 + s2).sort().join(''));
}
