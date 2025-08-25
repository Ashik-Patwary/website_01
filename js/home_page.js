const donateBtn = document.querySelectorAll('.donate_btn');

donateBtn.forEach(donateBtn =>{
    donateBtn.addEventListener('click', () =>{
        openPopUp('popup');

        const container = donateBtn.closest('.card_info');
        const input = container.querySelector('.user_amount');
        const getAmount = container.querySelector('.donate_balance');
        const value = input.value;
        const getValue = parseFloat(value, getAmount);
        input.value = "";
        // console.log(getValue);


        const previousBalance = getInnerTextValue('total_balance');
        const totalBalance = previousBalance - getValue;

        document.getElementById('total_balance').innerText = totalBalance;

        getAmount.innerText = getValue;
        // console.log(totalBalance, getValue);


    });
});









['popup_close_btn', 'close_btn_popup'].forEach(id =>{
    const btn = document.getElementById(id);
    if(btn){
        btn.addEventListener('click', () =>{
            closePopUp('popup');
        });
    }
});