const encrypt_btn = document.querySelector("#encrypt");
const decrypt_btn = document.querySelector("#decrypt");

const input = document.querySelector("textarea");
const result = document.querySelector("#result");
const image = document.querySelector("#image");
const textdefault1 = document.querySelector(".encrypt__result__text");
const textdefault2 = document.querySelector(".encrypt__result__description");
const copy_btn = document.querySelector("#copy_btn");
const encrypt__result = document.querySelector(".encrypt__result")

var codes = [ ["a","ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"] ];

function verefy_encrypted_text(){
    if(input.value != ""){
        encrypt();
    } else {
        show_seach_void();
    }
}

function verefy_decrypted_text(){
    if(input.value != ""){
        decrypt();
    } else {
        show_seach_void();
    }
}

function encrypt(){
    let text = input.value;
    let processed_text = "";
    let finded = false ;

    for(let i = 0; i < text.length; i++){
        for(let j = 0; j < codes.length; j++){
            if(text[i] == codes[j][0]){
                finded = true;
                processed_text += codes[j][1];
                break;
            }
        }
        if(finded == false){
            processed_text += text[i];       
        }
        finded = false;
    }
    show_result(processed_text);
}

function decrypt(){
    let text = input.value;

    for(let i = 0; i < codes.length; i++){
            text = text.replaceAll(codes[i][1], codes[i][0]);
        }

    show_result(text);
}

function copy_portapapeles(){
    navigator.clipboard.writeText(result.innerHTML)
        .then(() => {
        console.log("Copied")
    })
        .catch(err => {
        console.log('Error', err);
    })
}

function show_result(processed_text){
    result.innerHTML = processed_text;
    result.style.display = "block";
    image.style.display = "none";
    textdefault1.style.display = "none";
    textdefault2.style.display = "none";
    copy_btn.style.display = "block";
    
}

function show_seach_void(){
    result.style.display = "none";
    image.style.display = "block";
    textdefault1.style.display = "block";
    textdefault2.style.display = "block";
    copy_btn.style.display = "none";
}

input.focus();
encrypt_btn.onclick = verefy_encrypted_text;
decrypt_btn.onclick = verefy_decrypted_text;
copy_btn.onclick = copy_portapapeles;