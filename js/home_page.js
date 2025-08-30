const donateBtn = document.querySelectorAll('.donate_btn');

donateBtn.forEach(donateBtn =>{
    donateBtn.addEventListener('click', () =>{
        
        const container = donateBtn.closest('.card_info');
        const input = container.querySelector('.user_amount');
        const getAmount = container.querySelector('.donate_balance');
        const value = input.value;
        const getValue = parseFloat(value, getAmount);
        input.value = "";
        // console.log(getValue);
        
        if(isNaN(getValue)) {
            alert('enter amount')
            return;
        }
        const previousBalance = getInnerTextValue('total_balance');
        const totalBalance = previousBalance - getValue;
        
        document.getElementById('total_balance').innerText = totalBalance;
        
        if(getValue > totalBalance){
            alert('insufficient balance');
            return;
        }
        getAmount.innerText = getValue;
        // console.log(totalBalance, getValue);
        
        
        openPopUp('popup');
    });
});



document.getElementById('money_add').addEventListener('click', () =>{
     openPopUp('second_popup');
});





['close_btn', 'popup_close_btn', 'close_btn_popup',].forEach(id =>{
    const btn = document.getElementById(id);
    if(btn){
        btn.addEventListener('click', () =>{
            closePopUp('popup');
            closePopUp('second_popup');

        });
    }
});