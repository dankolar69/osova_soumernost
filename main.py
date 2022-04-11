a = [2, 0]
for i in range(5):
    led.plot_brightness(a[0], a[1], 75)
    a[1] += 1

y = [0, 2]
x = [0, 3]
for i in range(2):
    led.plot(y[0], y[1])
    led.plot(x[0], x[1])
    x[0] += 1
    y[0] += 1
    led.plot(y[0], y[1])
    led.plot(x[0], x[1])
    x[0] += 2
    y[0] += 2



