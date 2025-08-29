const buttons = document.querySelectorAll('.btn_section button');
const closeBtns = document.querySelectorAll('#close_btn');

const addMoneyPopup = document.getElementById('add_money_popup');
const cashOutPopup = document.getElementById('cash_out_popup');
const historyPopup = document.getElementById('history_popup');

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        // সবার থেকে active class remove করা হয়েছে
        buttons.forEach(btn => btn.classList.remove('active'));


         // যেই বাটনে ক্লিক হইছে শুধু সেটাতে active অ্যাড করা হইছে
        button.classList.add('active');


        // আগে সব popup hide করো
        hideAllPopups();

        // কোন বাটনে ক্লিক করা হয়েছে সেটা দেখে popup show করো
        if(button.innerText === 'Add Cash'){
            addMoneyPopup.classList.remove('hidden');
        }
        else if(button.innerText === 'Cash Out'){
            cashOutPopup.classList.remove('hidden');
        }
        else if(button.innerText === 'History'){
            historyPopup.classList.remove('hidden');
        }
    });
});



document.getElementById('add_money_btn').addEventListener('click', () =>{
    const userAddMoney = getInputValue('user_amount_add_money');
    const userAmount = parseFloat(userAddMoney);
    const userAddMoneyPin = getInputValue('user_amount_add_money_pin');


    const updateBalance = previousBalance + userAmount;
    console.log(userAmount, userAddMoneyPin, updateBalance);
});
















closeBtns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        hideAllPopups();
        buttons.forEach(b => b.classList.remove('active'));
    });
});