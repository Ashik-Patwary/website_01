const donateBtn = document.querySelectorAll('.donate_btn');

donateBtn.forEach(donateBtn =>{
    donateBtn.addEventListener('click', () =>{
        openPopUp('popup');
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