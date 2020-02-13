var sha256 = false;
var md5 = false;
var ripemd = false;
var blake2 = false;

function updateSHA256() {
    sha256 = true;
    md5 = false;
    ripemd = false;
    blake2 = false;
    document.getElementById("hashButton").innerHTML="HASH USING SHA-256!";
}

function updateMD5() {
    sha256 = false;
    md5 = true;
    ripemd = false;
    blake2 = false;
    document.getElementById("hashButton").innerHTML="HASH USING MD5!";
}

function updateRIPEMD() {
    sha256 = false;
    md5 = false;
    ripemd = true;
    blake2 = false;
    document.getElementById("hashButton").innerHTML="HASH USING RIPEMD!";
}

function updateBLAKE2() {
    sha256 = false;
    md5 = false;
    ripemd = false;
    blake2 = true;
    document.getElementById("hashButton").innerHTML="HASH USING BLAKE2!";
}

function hashIt() {
    if(sha256 == false && md5 == false && ripemd == false && blake2 == false) {
        $('.blinking').fadeOut(200);
        $('.blinking').fadeIn(200);
        $('.blinking').fadeOut(200);
        $('.blinking').fadeIn(200);
        setInterval(blinker, 500);
    }
    else if(sha256) {
        var hashed = forge_sha256(document.getElementById("password").value);
        document.getElementById("plainPassword").innerHTML = document.getElementById("password").value;
        document.getElementById("hashedPassword").innerHTML = hashed;
        document.getElementById("yourHashedPassword").innerHTML = "HASHED PASSWORD USING SHA-256:";
    }
    else if(md5) {
       
    }
    else if(ripemd) {
       
    }
    else if(blake2) {
       
    }
}