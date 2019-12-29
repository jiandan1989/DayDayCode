function isIsogramOne(str: string) {
  return str.split('').every((item) => str.match(new RegExp(item, 'gi')).length === 1);
}

// 来自社区内, 需要对正则有一定的认识
function isIsogramTwo(str: string) {
  return !/(\w).*\1/i.test(str);
}
