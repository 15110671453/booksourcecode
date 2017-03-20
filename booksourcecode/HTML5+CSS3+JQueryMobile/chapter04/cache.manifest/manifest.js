/**
 * Created by KING on 2015/12/16.
 */
function changePng() {
    var i = Math.ceil(Math.random() * 3);
    document.getElementById("id-png").src = "png" + i.toString() + ".png";
}