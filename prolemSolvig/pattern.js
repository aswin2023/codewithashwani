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
        console.log(stars)
    }
}
squareStarPatter(5)
/* output ::
*****
*****
*****
*****
*****
*/

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
/* output::
*****
*   *
*   *
*   *
*****
*/
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
                aswin += '*';
            }
        }
        console.log(aswin);
    }
}
triangleRightPattern(5);
/* output::
    *
   **
  ***
 ****
*****
*/
function triangleRightDownwardPattern(number) {
    for (let i = number; i >=1; i--) {
        let aswin = '';
        for (let j = 1; j <= number; j++) {
            if (j <= number - i) {
                aswin += ' ';
            } else {
                /*
                i=1,2,2,3,3,3,4,4,4,4,5,5,5,5,5
                j=5,4,5,3,4,5,2,3,4,5,1,2,3,4,5
                */
                aswin += '*';
            }
        }
        console.log(aswin);
    }
}
triangleRightDownwardPattern(5);
/* output::
*****
 ****
  ***
   **
    *
*/
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
/* output::
*
**
***
****
*****
*/
function triangleLeftDownwardPattern(number) {
    for (let i = number; i >= 1; i--) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            /*
            i=5,5,5,5,5,4,4,4,4,3,3,3,2,2,1
            j=1,2,3,4,5,1,2,3,4,1,2,3,1,2,1
            */
            stars += "*"
        }
        console.log(stars)
    }
}
triangleLeftDownwardPattern(5)
/* output::
*****
****
***
**
*
*/
function triangleHollowRightPattern(number) {
    for (i = 1; i <= number; i++) {
        let aswin = '';
        for (j = 1; j <= number; j++) {
            if (j === 1 || j === i || i === number) {
                /*
                i=1,2,2,3,3,4,4,5,5,5,5,5
                j=1,1,2,1,3,1,4,1,2,3,4,5
                */
                aswin += '*'

            } else {
                aswin += ' '
            }
        }
        console.log(aswin)
    }
}
triangleHollowRightPattern(5);
/* output::
*    
**   
* *
*  *
*****
*/
function pyramidPattern(number) {
    for (let i = 1; i <= number; i++) {
        let aswin = '';
        for (let j = 1; j <= number * 2 - 1; j++) {
            if (j >= number - i + 1 && j <= number + i - 1) {
                /*
                j=5,4,5,6,3,4,5,6,7,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,9
                i=1,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5
                */
                aswin += '*';
            } else {
                aswin += ' ';
            }
        }
        console.log(aswin);
    }
}
pyramidPattern(5);
/* output::
    *    
   ***   
  *****
 *******
*********
*/
function pyramidReversePattern(number) {
    for (let i = number; i >=1; i--) {
        let aswin = '';
        for (let j = 1; j <= number * 2 - 1; j++) {
            if (j >= number - i + 1 && j <= number + i - 1) {
                /*
                j=1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,3,4,5,6,7,4,5,6,5
                i=5,5,5,5,5,5,5,5,5,4,4,4,4,4,4,4,3,3,3,3,3,2,2,2,1
                */
                aswin += '*';
            } else {
                aswin += ' ';
            }
        }
        console.log(aswin);
    }
}
pyramidReversePattern(5);
/* output::
*********
 ******* 
  *****
   ***
    *
*/
function pyramidHourglassPattern(number) {
    for (let i = number; i >= 1; i--) {
        let aswin = '';
        for (let j = 1; j <= number * 2 - 1; j++) {
            if (j >= number - i + 1 && j <= number + i - 1) {
                /*
                j=1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,3,4,5,6,7,4,5,6,5
                i=5,5,5,5,5,5,5,5,5,4,4,4,4,4,4,4,3,3,3,3,3,2,2,2,1
                */
                aswin += '*';
            } else {
                aswin += ' ';
            }
        }
        console.log(aswin);
    }

    for (let i = 2; i <= number; i++) {
        let aswin = '';
        for (let j = 1; j <= number * 2 - 1; j++) {
            if (j >= number - i + 1 && j <= number + i - 1) {
                /*
                j=5,4,5,6,3,4,5,6,7,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,9
                i=1,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5
                */
                aswin += '*';
            } else {
                aswin += ' ';
            }
        }
        console.log(aswin);
    }
}
pyramidHourglassPattern(5);
/* output::
*********
 ******* 
  *****
   ***
    *
   ***
  *****
 *******
*********
*/
function pyramidDiamondPattern(number){
    for (let i = 1; i <= number; i++) {
        let aswin = '';
        for (let j = 1; j <= number * 2 - 1; j++) {
            if (j >= number - i + 1 && j <= number + i - 1) {
                /*
                j=5,4,5,6,3,4,5,6,7,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,9
                i=1,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5
                */
                aswin += '*';
            } else {
                aswin += ' ';
            }
        }
        console.log(aswin);
    }

    for (let i = number; i >=1; i--) {
        let aswin = '';
        for (let j = 1; j <= number * 2 - 1; j++) {
            if (j >= number - i + 1 && j <= number + i - 1) {
                /*
                j=1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,3,4,5,6,7,4,5,6,5
                i=5,5,5,5,5,5,5,5,5,4,4,4,4,4,4,4,3,3,3,3,3,2,2,2,1
                */
                aswin += '*';
            } else {
                aswin += ' ';
            }
        }
        console.log(aswin);
    }
}
pyramidDiamondPattern(5)
/* output::
    *    
   ***   
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
*/
function pyramidHollowPattern(number) {
    for (let i = 1; i <= number; i++) {
        let aswin = '';
        for (let j = 1; j <= 2 * number - 1; j++) {
            if (j >= number - i + 1 && j <= number + i - 1) {
                if (j === number - i + 1 || j === number + i - 1 || i === number) {
                    /*
                    j=5,4,6,3,7,2,8,1,2,3,4,5,6,7,8,9
                    i=1,2,2,3,3,4,4,5,5,5,5,5,5,5,5,5
                     */
                    aswin += '*';
                } else {
                    aswin += ' ';
                }
            } else {
                aswin += ' ';
            }
        }
        console.log(aswin);
    }
}
pyramidHollowPattern(5);
/* output::
    *    
   * *   
  *   *
 *     *
*********
*/
function pyramidHollowDiamondPattern(number) {
    for (let i = 1; i <= number; i++) {
        let aswin = '';
        for (let j = 1; j <= 2 * number - 1; j++) {
            if (j >= number - i + 1 && j <= number + i - 1) {
                if (j === number - i + 1 || j === number + i - 1) {
                    /*
                    i=1,2,2,3,3,4,4,5,5,5,5,5,5,5,5,5
                    j=5,4,6,3,7,2,8,1,2,3,4,5,6,7,8,9
                     */
                    aswin += '*';
                } else {
                    aswin += ' ';
                }
            } else {
                aswin += ' ';
            }
        }
        console.log(aswin);
    }

    for (let i = number; i >= 1; i--) {
        let aswin = '';
        for (let j = 1; j <= 2 * number - 1; j++) {
            if (j >= number - i + 1 && j <= number + i - 1) {
                if (j === number - i + 1 || j === number + i - 1) {
                    /*
                    i=1,2,2,3,3,4,4,5,5,5,5,5,5,5,5,5
                    j=5,4,6,3,7,2,8,1,2,3,4,5,6,7,8,9
                     */
                    aswin += '*';
                } else {
                    aswin += ' ';
                }
            } else {
                aswin += ' ';
            }
        }
        console.log(aswin);
    }
}
pyramidHollowDiamondPattern(5);
/* output::
    *    
   * *   
  *   *
 *     *
*       *
*       *
 *     *
  *   *
   * *
    *
*/
function pascalRightPattern(number) {
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

    for (let i = number - 1; i >= 1; i--) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            /*
            i=5,5,5,5,5,4,4,4,4,3,3,3,2,2,1
            j=1,2,3,4,5,1,2,3,4,1,2,3,1,2,1
            */
            stars += "*"
        }
        console.log(stars)
    }
}
pascalRightPattern(5)
/* output::
*
**
***
****
*****
****
***
**
*
*/
function pascalLeftPattern(number) {
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
                aswin += '*';
            }
        }
        console.log(aswin);
    }

    for (let i = number - 1; i >= 1; i--) {
        let aswin = '';
        for (let j = 1; j <= number; j++) {
            if (j <= number - i) {
                aswin += ' ';
            } else {
                /*
                i=
                j=
                */
                aswin += '*';
            }
        }
        console.log(aswin);
    }
}
pascalLeftPattern(5);
/* output::
    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *
*/

// ==========================character =========================

