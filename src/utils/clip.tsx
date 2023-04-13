const clip =
   (min = -Infinity, max = Infinity) =>
   (val: number) =>
      Math.max(min, Math.min(val, max));

const clip01 = clip(0, 1);

export { clip, clip01 };
