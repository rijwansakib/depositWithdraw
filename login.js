document.getElementById('login').addEventListener('click',function(){
    //user email
    const eField= document.getElementById('email-field');
    const userEmail=eField.value;
    console.log(userEmail);

    //user password
    const pField=document.getElementById('password-field');
    const userPassword=pField.value;
    console.log(userPassword);

        if(userEmail=='rijwansakib1@gmail.com'  && userPassword=='1234'){
            console.log('valid user');
            window.location.href='banking.html';
        }
        else{
            console.log('invalid users');
        }

})