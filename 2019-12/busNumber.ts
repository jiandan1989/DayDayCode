function busNumberOne(busStops: number[]) {
  return busStops.reduce(
    (prev, next) => {
      const a = prev[0] + next[0];
      const b = prev[1] + next[1];
      return [a - b, 0];
    },
    [0, 0]
  )[0];
}

function busNumberTwo(busStops) {
  return busStops
    .map((item) => item[0] - item[1])
    .reduce((prev, next) => {
      prev + next;
    }, 0);
}

// zyy
function busNumberThree(busStops: [number, number][]): any {
  let onBus = 0;
  let downBus = 0;
  let nums = busStops.map((item: any, index: number) => {
    onBus += item[0];
    downBus += item[1];
  });

  return onBus - downBus;
}
