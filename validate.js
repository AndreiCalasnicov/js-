function validate() {
    let standardPrice = document.getElementById('standardInput').value; // Получаем значение из input
    let discountPrice = document.getElementById('discountInput').value;

    standardPrice = parseInt(standardPrice)
    discountPrice = parseInt(discountPrice)

    if (isNaN(standardPrice)) {
        alert('requird')
    }

    if (standardPrice <= 0) {
        alert('standart price showld be gt 0')
        
    } else {
        if (isNaN(discountPrice)) {
            alert('discount price requird')
        } else {
            if (discountPrice <= 0) {
                alert('discount price showld be gt 0')
            }else{
                if (discountPrice >= standardPrice){
                    alert('eror')

                }
            }
        }
    }

}
