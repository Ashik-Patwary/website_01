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

document.getElementById('add_money_popup_button').addEventListener('click', () =>{
    openPopUp('popup_add_money');
});

document.getElementById('cash_out_popup_button').addEventListener('click', () =>{
    openPopUp('popup_cash_out');
});

document.getElementById('history_button').addEventListener('click', () =>{
    openPopUp('popup_history');
});

document.getElementById('donate_button').addEventListener('click', () =>{
    openPopUp('popup_donate');
});

// *********************ADD MONEY***************

document.getElementById('money_add_button').addEventListener('click', () =>{
    const addUserAmount = getInputValue('add_money_user_balance');
    const value = parseFloat(addUserAmount);
    const addUserPin = getInputValue('add_money_user_pin');

   
    if(addUserPin === '1234'){
        const oldBalance = getInnerTextValue('total_balance');
        const updateBalance = oldBalance + value;

        document.getElementById('total_balance').innerText = updateBalance;
    }
    else{
        alert('enter amount');
    }
    
});

// *********************ADD MONEY***************

// ********************cash out*****************
document.getElementById('cash_out_button').addEventListener('click', () =>{
    const cashOutUserAmount = getInputValue('user_cash_out');
    const value = parseFloat(cashOutUserAmount);
    const userCashOutPin = getInputValue('user_cash_out_pin');

    
    if(userCashOutPin === '1234'){
        const oldBalance = getInnerTextValue('total_balance');
        const updateBalance = oldBalance - value;
        
   
        document.getElementById('total_balance').innerText = updateBalance;
    }
    else{
        alert('enter amount');
    }
});
// ********************cash out*****************















































































// document.getElementById('btn_close').addEventListener('click', () =>{
//     closePopUp('popup_add_money');
//     closePopUp('popup_cash_out');
// });

['add_money_btn_close', 'cash_out_btn_close', 'hiostory_btn_close', 'donate_button_close'].forEach(id =>{
    const btn = document.getElementById(id);
    if(btn){
        btn.addEventListener('click', () =>{
            closePopUp('popup_add_money');
            closePopUp('popup_cash_out');
            closePopUp('popup_history');
            closePopUp('popup_donate');
        });
    }
});



['close_btn', 'popup_close_btn', 'close_btn_popup'].forEach(id =>{
    const btn = document.getElementById(id);
    if(btn){
        btn.addEventListener('click', () =>{
            closePopUp('popup');
            closePopUp('second_popup');

        });
    }
});
