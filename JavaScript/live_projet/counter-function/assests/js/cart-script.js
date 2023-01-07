function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + 'number');
    let productNumber = productInput.Value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(isIncreasing == false && productNumber > 0){
        productNumber = parseInt(productNumber) -1;
    }
    productInput.Value = productNumber;
    //update product total
    const productTotal = document.getElementById(product + 'total');

    productTotal.innerText = productNumber * price;
    //calculate total
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + 'number');
    const productNumber = parseInt(productInput.Value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1278;
    const caseTotal = getInputValue('case') * 60;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

function removeProduct(item){
    document.getElementById(item + '-display').style.display = 'none';
}
//increase decrease
document.getElementById("phone-plus").addEventListener('click', function(){
    updateProductNumber('phone', 1278, true);

});
document.getElementById("phone-minus").addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);

});
//handle case increase decrease events

document.getElementById("case-plus").addEventListener('click', function(){
    updateProductNumber('case', 60, true);

});
document.getElementById("case-minus").addEventListener('click', function(){
    updateProductNumber('case', 60, false);

});
//remove item
document.getElementById("phone-remove").addEventListener('click', function(){
    removeProduct('phone');

});
document.getElementById("case-remove").addEventListener('click', function(){
    removeProduct('case');

});
//checkout
document.getElementById("check-btn").addEventListener('click', function(){
    alert('Successful');
}) 