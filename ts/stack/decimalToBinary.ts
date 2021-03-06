import Stack from './lib/Stack'

const decimalToBinary = function (decNumber :number) :string{
    const stack = new Stack()
    let number = decNumber;
    let rem ; // 余数
    let binaryString = '';
    while(number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while(!stack.isEmpty()) {
        binaryString += stack.pop().toString(); // 依次最后出栈
    }
    return binaryString;
}

console.log(decimalToBinary(5))
// find 实现