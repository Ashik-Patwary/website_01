document.getElementById('login_btn').addEventListener('click', () =>{
    openPopUp('popup');
});


document.getElementById('login_form_close_btn').addEventListener('click', () =>{
    closePopUp('popup');
});

document.getElementById('log_in_btn').addEventListener('click', (event) =>{
    event.preventDefault();
    const userName = getInputValue('user_name');
    const userPassword = getInputValue('user_password');

   if(userName === 'Ashik_Patwary' && userPassword === '1234'){
        window.location.href = "home_page.html"
   }
   else{
    alert('wrong name or password')
   }
});