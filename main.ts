let i: number;
let a = [2, 0]
for (i = 0; i < 5; i++) {
    led.plotBrightness(a[0], a[1], 75)
    a[1] += 1
}
let y = [0, 2]
let x = [0, 3]
for (i = 0; i < 2; i++) {
    led.plot(y[0], y[1])
    led.plot(x[0], x[1])
    x[0] += 1
    y[0] += 1
    led.plot(y[0], y[1])
    led.plot(x[0], x[1])
    x[0] += 2
    y[0] += 2
}
