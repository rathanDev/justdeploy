export class DateRange {
  from: Date | undefined;
  to: Date | undefined;

  constructor(f: Date | undefined, t: Date | undefined) {
    this.from = f;
    this.to = t;
  }

  static empty() {
    return new DateRange(undefined, undefined);
  }
}
