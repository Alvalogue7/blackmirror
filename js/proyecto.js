/***************************************************************************/
/*                          author: Álvaro López                           */
/*                          version: 2.0                                   */
/*                          comments: class proyect 2023-34                */
/***************************************************************************/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}