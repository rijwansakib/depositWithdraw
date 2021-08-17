//deposite and total balance
document.getElementById('deposit-btn').addEventListener('click',function(){
    let depositAmmount=document.getElementById('deposit');
    let depositValue=depositAmmount.value;
    depositValue=parseFloat(depositValue);
    depositAmmount.value='';
    // deposit balence
     let deposit= document.getElementById('deposit-balance').innerText;
     deposit=parseFloat(deposit);
     let totalDepositeBalance=0;
     totalDepositeBalance=parseFloat(depositValue+deposit);
     document.getElementById('deposit-balance').innerText=totalDepositeBalance;
    // total balence
     let total= document.getElementById('total-balance').innerText;
     total=parseFloat(total);
     let totalBalance=0;
      totalBalance=parseFloat(depositValue+total);
    document.getElementById('total-balance').innerText = totalBalance;   

});

//withdraw and total balance
document.getElementById('withdraw-btn').addEventListener('click',function(){
    let withDraw=document.getElementById('withdraw');
    let withDrawValue= withDraw.value;
    withDrawValue=parseFloat(withDrawValue);
    withDraw.value='';




    //calculate total balnce & add withdraw balance
    
     let currentTotalbalance=document.getElementById('total-balance').innerText;
     currentTotalbalance=parseFloat(currentTotalbalance);

     if(withDrawValue>currentTotalbalance){
        console.log('invalid');
    }
    else{
        let total=document.getElementById('withdraw-balance').innerText;
        total=parseFloat(total);
        let totalWithdraw=0;
        totalWithdraw=parseFloat(withDrawValue+total);
        document.getElementById('withdraw-balance').innerText=totalWithdraw;

    }

     //update total balance
     if(withDrawValue>currentTotalbalance){
        console.log('invalid');
    }
    else{
        let updateBalance=parseFloat(currentTotalbalance-withDrawValue) ;
        document.getElementById('total-balance').innerText=updateBalance;

    }



 
     




});

