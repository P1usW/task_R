function calcValue(rl: number,
                   rw: number,
                   len: number,
                   wid: number,
                   count: number,
                   flag: string) {
    let _rl = rl * 10;
    let _rw = rl * 10;

    if (flag === 'width') {
        [_rl, _rw] = [_rw, _rl];
    }

    const value = Math.ceil(_rl / len) * Math.ceil(_rw / wid);
    return {
        quantity: value,
        quantityPack: value / count,
    };

}

export default calcValue;