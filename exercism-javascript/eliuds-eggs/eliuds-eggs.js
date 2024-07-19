export const eggCount = (n, c = 0) => (n === 0 ? c : !(n % 2) ? eggCount(n / 2, c) : eggCount(n - 1, c + 1));
