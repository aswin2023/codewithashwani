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