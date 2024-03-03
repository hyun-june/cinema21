window.onload = function () {
  // 로그인 name이 없을 시 href
    // let user_name ="";
    // if(user_name === null || user_name === "") {
    //   location.href="login.html";
    // }
    
    let movie1 = localStorage.getItem('movie1');
    let movie2 = localStorage.getItem('movie2');

  if(movie1 == null){
    console.log(movie2);
    
    movie1 = JSON.parse(movie2);
    const title = document.querySelector('.title');
    title.innerText = `${movie1.title}`;
    const original = document.querySelector('.original-title');
    original.innerText = `${movie1.original_title}`;
    const overview = document.querySelector('.overview');
    overview.innerText = `${movie1.overview}`;

    const pop = document.querySelector('.pop');
    let score = Math.floor(movie1.popularity / 100);
    if (score > 10) {
        score = 10;
    } else {
        score = (movie1.popularity / 100).toFixed(1).split('.')[0];;
    }
    
    pop.innerText = `⭐ : ${score}`;

    const release = document.querySelector('.release');
    release.innerText = `${movie1.release_date}`;

    const img = document.querySelector('.carousel-item.active img');
    img.src = movie1.image;


    const video = document.querySelector('.video-frame')
    video.src = `https://www.youtube.com/embed/${movie1.youtube}`;


    localStorage.removeItem('movie2');
  }else{
    console.log(movie1);
  
    movie1 = JSON.parse(movie1);
    const title = document.querySelector('.title');
    title.innerText = `${movie1.title}`;
    const original = document.querySelector('.original-title');
    original.innerText = `${movie1.original_title}`;
    const overview = document.querySelector('.overview');
    overview.innerText = `${movie1.overview}`;

    const pop = document.querySelector('.pop');
    let score = Math.floor(movie1.popularity / 100);
    
    if (score > 10) {
        score = 10;
    } else {
        score = (movie1.popularity / 100).toFixed(1).split('.')[0];;
    }
    
    pop.innerText = `⭐ : ${score}`;

    const release = document.querySelector('.release');
    release.innerText = `${movie1.release_date}`;

    // const img = document.querySelector('img');
    // img.src = movie1.image;
    const img = document.querySelector('.carousel-item.active img');
    img.src = movie1.image;


    const video = document.querySelector('.video-frame')
    video.src = `https://www.youtube.com/embed/${movie1.youtube}`;

    localStorage.removeItem('movie1');
  }
}


const sub = () => {
  let ta_input = document.getElementById('textarea-input').value;
  let reviewDiv = document.getElementById('review-list');
  reviewDiv.innerHTML += `<div id="review-list" class="review-list">
    <div <div class="review-content p-5 mb-3 rounded">${ta_input}</div>
      </div>`;
}


 let modal = document.getElementById("myModal");
 let btn = document.getElementById("myBtn");
 let span = document.getElementsByClassName("close")[0];
 
 btn.onclick = function() {
   modal.style.display = "block";
 }

 span.onclick = function() {
   modal.style.display = "none";
 }

 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }

 let username = "";
  document.addEventListener('DOMContentLoaded', function() {
  username = localStorage.getItem('userName');

  const loginContainer = document.querySelector('.log-in-icon');
  if (username !== null)  {
        document.getElementById('userWelcomeMessage').textContent =` ${username} 님` ;
        document.getElementById('login-signup').innerHTML =
`<li><a href = "MyPage.html">
      <img 
      src="https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png" 
      alt="MY Page">
      <span>My Page</span>
  </a>
</li>`
        userWelcomeMessage.style.cursor = 'default'; 
        
        
    } else {  
      document.getElementById('login-signup').innerHTML = `<li class="log-in-icon"><a href="Login.html">
      <span class="logingone">
      <img 
      src="https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png" 
      alt="로그인" class="login-img">
      <span> Log in </span>
      </span>
  </a>
</li>
<li><a href = "SignUp.html">
  <span class="signupgone"></span>
  <img 
  src="https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png" 
  alt="회원가입">
  <span>Sign up</span>
   </a>
</li>
<li><a href = "MyPage.html">
      <img 
      src="https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png" 
      alt="MY Page">
      <span>My Page</span>
  </a>
</li>`;

    }
  } 
);


const time_html = () =>{
  location.href="time.html";
}