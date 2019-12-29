export class KataOne {
  static validatePin(pin: string): boolean {
    return /^\d{4}$|^\d{6}$/.test(pin);
  }
}
// String.prototype.match
export class KataTwo {
  static validatePin(pin: string): boolean {
    return !!pin.match(/^\d{4}$|^\d{6}$/);
  }
}
// 以上个人答案对 正则还不够炉火纯青

// 最佳答案
export class KataThree {
  static pinFormat: RegExp = new RegExp(/^\d{4}(\d{2})?$/);

  static validatePin(pin: string): boolean {
    return KataThree.pinFormat.test(pin);
  }
}
