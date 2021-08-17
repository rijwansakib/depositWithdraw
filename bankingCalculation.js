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

    //add withdraw balance
    let total=document.getElementById('withdraw-balance').innerText;
    total=parseFloat(total);
    let totalWithdraw=0;
    totalWithdraw=parseFloat(withDrawValue+total);
    document.getElementById('withdraw-balance').innerText=totalWithdraw;

    //calculate total balnce
    
     let currentTotalbalance=document.getElementById('total-balance').innerText;
     currentTotalbalance=parseFloat(currentTotalbalance);

     //update total balance

     let updateBalance=parseFloat(currentTotalbalance-withDrawValue) ;
     document.getElementById('total-balance').innerText=updateBalance;
     




});

