export function map(
    val: number,
    x1: number,
    x2: number,
    y1: number,
    y2: number
) {
    //val = 6, x1 = 5, x2 = 10
    // (val - x1)/x2
    const normalised = (val - x1) / x2;
    return y1 + normalised * (y2 - y1);
}
