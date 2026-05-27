export async function loadUserData(){
    const responseG = await fetch("../../php/app/app_main.php");
    const data = await responseG.json();
    return data ;
}