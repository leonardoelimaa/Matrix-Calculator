/* This is a code that performs matrix multiplication. 
*For a one-dimensional matrix, use a simple array, and for a two-dimensional matrix, use an array containing arrays inside. */

function multiplyMatrices (matrixA, matrixB) {
    
    let twoDimensionalMatrixA = false // Pre-define the default structure of an array for matrix A.
    let twoDimensionalMatrixB = false // Pre-define the default structure of an array for matrix A. 
    
    
    for (let element of matrixA) {
        if (Array.isArray(element)) {
            twoDimensionalMatrixA = true;
            break;
        }
    } // Identify the dimension of matrix A.
    
    
    for (let element of matrixB) {
        if (Array.isArray(element)) {
            twoDimensionalMatrixB = true;
            break;
        }
    } // Identify the dimension of matrix A.
    
    
    if (!twoDimensionalMatrixA) { 
        for (element of matrixA) {
            if ((typeof element) !== 'number') {
                console.log('Error: the first matrix contains defective elements or contains empty spaces!');
                return;
            }            
        }  
    } else {
        for (submatrix of matrixA) {
            if (!Array.isArray(submatrix)) {
                console.log('Error: the first matrix is not a matrix!');
                return;
            } else {
                for (element of submatrix) {
                    if ((typeof element) !== 'number') {
                        console.log('Error: the first matrix contains defective elements or contains empty spaces!');
                        return;
                    }
                }
            }
        }
    } // Identify defects in matrix A considering its dimension. 


    if (!twoDimensionalMatrixB) {
        for (element of matrixB) {
            if ((typeof element) !== 'number') {
                console.log('Error: the second matrix contains defective elements or contains empty spaces!');
                return;
            }
        }
    } else {
        for (submatrix of matrixB) {
            if (!Array.isArray(submatrix)) {
                console.log('Error: the second matrix is not a matrix!');
                return;
            } else {
                for (element of submatrix) {
                    if ((typeof element) !== 'number') {
                        console.log('Error: the second matrix contains defective elements or contains empty spaces!');
                        return;
                    }
                }
            }
        }
    } // Identify defects in matrix B considering its dimension.

    
    if (twoDimensionalMatrixA) {
        for (submatrix of matrixA) {
            if (submatrix.length !== matrixA[0].length) {
                console.log("Error: the first matrix has rows with different sizes!");
                return;
            }
        }
    } // Identify irregular rows for matrix A (if it is two-dimensional).
    
    
    if (twoDimensionalMatrixB) {
        for (submatrix of matrixB) {
            if (submatrix.length !== matrixB[0].length) {
                console.log("Error: the second matrix has rows with different sizes!");
                return;
            }
        }
    } // Identify irregular rows for matrix B (if it is two-dimensional).
    

    let rowsA // Number of rows in matrix A.
    let rowsB // Number of rows in matrix B.
    let columnsA // Number of columns in matrix A.
    let columnsB // Number of columns in matrix B.
    

    if (!twoDimensionalMatrixA) {
        rowsA = 1
        columnsA = matrixA.length
    } else {
        rowsA = matrixA.length
        columnsA = matrixA[0].length
    } // Define the number of rows and columns based on the dimension of matrix A.
    
    
    if (!twoDimensionalMatrixB) {
        rowsB = 1
        columnsB = matrixB.length
    } else {
        rowsB = matrixB.length
        columnsB = matrixB[0].length
    } // Define the number of rows and columns based on the dimension of matrix B.
    
    
    if (columnsA !== rowsB) {
        console.log('Error: The product matrix does not exist, as the number of columns of the first matrix differs from the number of rows of the second matrix!');
        return;
    } // Definition of the existence condition for the product matrix. 
    
    
    let matrixC = [] // Predefined structure for one-dimensional product matrix.


    if ((twoDimensionalMatrixA && !twoDimensionalMatrixB) || (twoDimensionalMatrixA && twoDimensionalMatrixB)) {
        for (let number = 0; number < matrixA.length; number++) {
            matrixC[number] = []
        }
    } // Modifies the previous structure to a Product matrix, adapting it to be two-dimensional.
    
    
    // Performing the calculation:
    if ((!twoDimensionalMatrixA) && (!twoDimensionalMatrixB)) { // For two one-dimensional matrices, the product will be one-dimensional.
        for (let column = 0; column < columnsB; column++) {
           matrixC[column] = matrixA[0] * matrixB[j]
        }
        console.log(matrixC);
    } else if ((twoDimensionalMatrixA) && (!twoDimensionalMatrixB)) { // For the first matrix being two-dimensional and the second one-dimensional, the product will be two-dimensional.
        for (let row = 0; row < rowsA; row++) {
            for (let column = 0; column < columnsB; column++) {
                matrixC[row][column] = matrixA[row][0] * matrixB[column]
            }
        }
        for (submatrix of matrixC) {
            console.log(submatrix)
        }
    } else if ((!twoDimensionalMatrixA) && (twoDimensionalMatrixB)) { // For the first matrix being one-dimensional and the second two-dimensional, the product will be one-dimensional.
        for (let column = 0; column < columnsB; column++) {
            matrixC[column] = 0 // Avoid NaN results.
            for (let sumIndex = 0; sumIndex < columnsA; sumIndex++) {
                matrixC[column] += matrixA[sumIndex] * matrixB[sumIndex][column]
            }
        }
        console.log(matrixC)
    } else if (twoDimensionalMatrixA && twoDimensionalMatrixB) { //  For two two-dimensional matrices, the product will be two-dimensional.
        for (let row = 0; row < rowsA; row++) {
            for (let column = 0; column < columnsB; column++) {
                matrixC[row][column] = 0 // Avoid NaN results.
                for (let sumIndex = 0; sumIndex < columnsA; sumIndex++) {
                    matrixC[row][column] += matrixA[row][sumIndex] * matrixB[sumIndex][column]
                }
            }
        }
        for (submatrix of matrixC) {
            console.log(submatrix)
        }
    }
}

    
let arrayA = [ 
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
] // Set your first matrix (This is just an example of matrix A).

let arrayB = [
    [10],
    [20],
    [30],
    [40]
] // Set your second matrix (This is just an example of matrix B).

multiplyMatrices (arrayA, arrayB) 

