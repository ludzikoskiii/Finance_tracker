export async function loadFamily(){
    const responseG = await fetch("../../php/app/app_familyInfo.php");
    const data = await responseG.json();
    return data ;
}