function rectToPolor(x, y) {
    let pi = Math.PI;
    let r = 0;
    let angle = 0;
    r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    if (x === 0 && y === 0) {
        angle = 0;
    } else if (x === 0 && y < 0) {
        angle = 0 - pi / 2;
    } else if (x === 0 && y > 0) {
        angle = pi / 2;
    } else if (x > 0) {
        angle = Math.atan(y / x);
    } else if (x < 0 && y >= 0) {
        angle = Math.atan(y / x) + pi;
    } else if (x < 0 && y < 0) {
        angle = Math.atan(y / x) - pi;
    }
    return {
        r: r,
        angle: angle
    };
}

function polorToRect(r, angle) {
    
}