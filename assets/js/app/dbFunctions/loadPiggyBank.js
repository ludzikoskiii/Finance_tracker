async function loadPiggyBank(){
    const responseG = await fetch('../../php/app/app_piggybank.php');
    const data = await responseG.json();
    return data ;
}