export async function loadBudget(){
    const responseG = await fetch("../../php/finances/dbFunctions/loadBudget.php");
    const data = await responseG.json();
    return data ;
}