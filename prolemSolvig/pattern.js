function squareStarPatter(number) {
    for (i = 1; i <= number; i++) {
        let stars = '';
        for (j = 1; j <= number; j++) {
            stars += '*';
            /*
            i=1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5
            j=1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5          
            */
        }
        console.log('*')
    }
}
squareStarPatter(5)

function hollowSquarePattern(number) {
    for (i = 1; i <= number; i++) {
        let aswin = '';
        for (j = 1; j <= number; j++) {
            if (j === 1 || i === 1 || i === number || j === number) {
                /*
                i=1,1,1,1,1,2,2,3,3,4,4,5,5,5,5,5
                j=1,2,3,4,5,1,5,1,5,1,5,1,2,3,4,5
                */
                aswin += '*'
            }
            else {
                aswin += ' '
            }
        }
        console.log(aswin)
    }
}
hollowSquarePattern(5)

function triangleRightPattern(number) {
    for (let i = 1; i <= number; i++) {
        let aswin = '';
        for (let j = 1; j <= number; j++) {
            if (j <= number - i) {
                aswin += ' ';
            } else {
                /*
                i=1,2,2,3,3,3,4,4,4,4,5,5,5,5,5
                j=5,4,5,3,4,5,2,3,4,5,1,2,3,4,5
                */
                aswin += j;
            }
        }
        console.log(aswin);
    }
}
triangleRightPattern(5);

function triangleLefttPattern(number) {
    for (let i = 1; i <= number; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            /*
            i=1,2,2,3,3,3,4,4,4,4,5,5,5,5,5
            j=1,1,2,1,2,3,1,2,3,4,1,2,3,4,5
            */
            stars += "*"
        }
        console.log(stars)
    }
}
triangleLefttPattern(5)