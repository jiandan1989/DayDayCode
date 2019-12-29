function addBinaryOne(a, b) {
  const c = a + b;
  const d = c.toString(2);

  if (!d.includes('.')) return d;
  const result = [];
  const arr = d.split('.');
  result.push(arr[0], '.');
  result.push(
    arr[1]
      .split('')
      .map((item) => item.toString(2))
      .join('')
  );
  return result.join('');
}

function addBinaryTwo(a, b) {
  const c = a + b;
  const d = c.toString(2);

  if (!d.includes('.')) return d;
  return d
    .split('.')
    .reduce((prev, next, index) => {
      return index === 0
        ? prev.concat(next, '.')
        : prev.concat(
            next
              .split('')
              .map((item) => item.toString(2))
              .join('')
          );
    }, [])
    .join('');
}
