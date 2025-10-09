


function mathChallenge(str) {
    const matches = str.match(/\(([^)]+)\)/g);
    const expressions = matches.map(s => s.slice(1, -1));
    let dau = [];
    let so = [];

    
}

console.log(mathChallenge("(2x^2+4)(6x^3+3)"));
