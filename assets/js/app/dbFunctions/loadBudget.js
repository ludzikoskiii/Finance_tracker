export async function loadBudget(){
    const responseG = await fetch("../../php/app/app_blocks.php");
    const data = await responseG.json();
    return data ;
}