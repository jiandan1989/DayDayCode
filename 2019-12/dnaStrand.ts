function dnaStrandOne(dna) {
  return dna
    .split('')
    .map((item) => (item === 'A' ? 'T' : item === 'T' ? 'A' : item === 'C' ? 'G' : item === 'G' ? 'C' : ''))
    .join('');
}

function dnaStrandTwo(dna) {
  const obj = {
    A: 'T',
    G: 'C',
    C: 'G',
    T: 'A',
  };
  return dna
    .split('')
    .map((item) => obj[item])
    .join('');
}

function dnaStrandThree(dna) {
  return dna
    .split('')
    .map((item) => {
      switch (item) {
        case 'T':
          return 'A';
        case 'A':
          return 'T';
        case 'G':
          return 'C';
        case 'C':
          return 'G';
          return '';
      }
    })
    .join('');
}
