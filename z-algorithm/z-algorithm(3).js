function search(text, pattern) {
    let concat = pattern + "$" + text;
    let l = concat.length;
    let Z = new Array(l);
    getZarr(concat, Z);

    for (let i = 0; i < l; ++i) {
        if (Z[i] === pattern.length) {
            console.log((i - pattern.length - 1));
        }
    }
}

function getZarr(str, Z) {
    let n = str.length;
    let L = 0, R = 0;
    for (let i = 1; i < n; ++i) {
        if (i > R) {
            L = R = i;
            while (R < n && str[R - L] == str[R])
                R++;
            Z[i] = R - L;
            R--;
        } else {
            let k = i - L;
            if (Z[k] < R - i + 1)
                Z[i] = Z[k];
            else {
                L = i;
                while (R < n && str[R - L] == str[R])
                    R++;
                Z[i] = R - L;
                R--;
            }
        }
    }
}

let text = "AACMAACXY";
let pattern = "AAC";

search(text, pattern);
