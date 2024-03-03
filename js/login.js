// 채연님
const id_Error = document.querySelector('.error-id')
const pw_Error = document.querySelector('.error-pw')
const input_Id = document.querySelector('.user-Id')
const input_Pw = document.querySelector('.user-Pw')
console.log (id_Error,pw_Error,input_Id,input_Pw)
// 에러는 input 클릭했을 때 뜨게
input_Id.addEventListener('click',function(){
    id_Error.style.display="block"
})
input_Pw.addEventListener('click',function(){
    pw_Error.style.display="block"
})
input_Id.addEventListener('input', function() {
    if (input_Id.value.trim() !== '') {
        id_Error.style.display = "none"
    } else {
        id_Error.style.display = "block"
    }
})
input_Pw.addEventListener('input', function() {
    if (input_Pw.value.trim() !== '') {
        pw_Error.style.display = "none"
    } else {
        pw_Error.style.display = "block"
    }
})
document.addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
        loginUser();
    }
})
function loginUser(){
    let username = document.getElementById("userName").value;
    let password = document.getElementById("userPassword").value;
    if (username === '' || password === '') {
        alert('아이디와 비밀번호를 입력하세요.');
    } else {
        alert( username + '님이 로그인 되었습니다.');
        localStorage.setItem('userName',username);
        //사용자 이름을 로컬 스토리지에 저장
        window.location.href= 'index.html'; //페이지 이동
    }
}
document.getElementById('loginButton').addEventListener('click', loginUser);
    document.getElementById('loginForm').addEventListener('submit',function(event){
        event.preventDefault(); //폼 기본 동작 방지?
            // //로그인후 다음 동작 수행
            // //여기에는 로그인 성공 후 동작 추가
            // console.log("로그인완료");
            // //페이지 이동
            // window.location.href= 'page.html';
    });
    function loginUser() {
        let username = document.getElementById("userName").value;
        let password = document.getElementById("userPassward").value;
        if (username === '' || password === '') {
            alert('아이디와 비밀번호를 입력하세요.');
        } else {
            alert(username + '님이 로그인 되었습니다.');
            localStorage.setItem('userName', username);
            // 사용자 이름을 로컬 스토리지에 저장
            window.location.href = 'index.html'; // main 페이지로 이동
        }
    }
    // window.addEventListener('beforeunload', function() {
    //     const username = localStorage.getItem('userName');
    //     if (username) {
    //         localStorage.removeItem('userName');
    //         window.location.href = 'index.html';
    //     }
    // });