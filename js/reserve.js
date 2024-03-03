// 좌석표
let list =[];
document.addEventListener('DOMContentLoaded', function () {
    const seatsContainer = document.querySelector('.seats-container');
    const alphabet = ['', 'A', 'B', 'C', 'D', 'X', 'E', 'F', 'G', 'H', 'I', 'X','J', 'K', 'L', 'M', 'N', 'O'];

    const occuppiedList = [ 
        [2, 3], [2, 5],[2,10],[2,11],
        [3,6],[3,7],[3,9],[3,10],[3,12],[3,13],
        [7,5], [7,7],[7,8],[7,9],
        [8,5],[8,6],[8,7],[8,8],[8,9],[8,10],
        [9,8],[9,9],[9,11],[9,12],[9,13],[9,17],
        [10,7],[10,8],[10,9],[10,12],
        [11,8],[11,9],[11,10],[11,13],[11,15],[11,16],
        [12,2],[12,3], [12,7],[12,8],[12,13],[12,14],[12,15],
        [15,9],[15,10],[15,12]
    ]; // 차지된 좌석 목록
    const hiddenList =[
        [5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],[5,15],[5,16],[5,17],[5,18],[5,19],[5,20],
        [11,1],[11,2],[11,3],[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],[11,12],[11,13],[11,14],[11,15],[11,16],[11,17],[11,18],[11,19],[11,20],
        [1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[15,6],[16,6],[17,6],
        [1,16],[2,16],[3,16],[4,16],[5,16],[6,16],[7,16],[8,16],[9,16],[10,16],[11,16],[12,16],[13,16],[14,16],[15,16],[16,16],[17,16],
        [1,17], [1,18],[1,19],[1,20],
        [1,2],[1,3],[1,4],[1,5],[17,1]
    ]
    // 좌석 생성
    createSeats();

    function createSeats() {
        for (let row = 1; row <= 17; row++) {
            for (let col = 1; col <= 20; col++) {
                const seat = document.createElement('div');
                seat.classList.add('seat');
                let x_value;
                    if(col >=6){
                        if(col >=16){
                            x_value = col-2;
                        } else{
                            x_value = col-1; 
                        }
                    } else{
                        x_value = col;
                    }
                seat.dataset.row = row;
                seat.dataset.col = x_value;

                if (occuppiedList.some(([r, c]) => r === row && c === col)) {
                    seat.classList.add('occupied');
                }
                if (hiddenList.some(([r,c])=> r ==row && c == col)){
                    seat.classList.add('hidden')
                }
                if (col === 1) {
                    // 첫 번째 열일 때 알파벳 추가
                    const y_value = alphabet[row];
                    seat.innerHTML = y_value;
                    seat.dataset.yValue = y_value;
                    seat.dataset.xValue = x_value;
                    seat.classList.add('disable')
                    if(seat.innerHTML =='X'){
                        seat.classList.add('hidden')
                    }                   
                } else if (row === 17 && col >= 2 && col <= 20) {
                    // 15번째 행일 때 2번째 열부터 20번째 열까지 숫자 추가
                    let x_value;
                    if(col >=6){
                        if(col >=16){
                            x_value = col-3;
                        } else{
                            x_value = col-2; 
                        }
                    } else{
                        x_value = col-1;
                    }
                    
                    seat.innerHTML = x_value;
                    seat.dataset.yValue = alphabet[row];
                    seat.dataset.xValue = x_value;
                    seat.classList.add('disable')
                }
                
                seatsContainer.appendChild(seat);
            }
        }
    }

    // 좌석 클릭 이벤트
    seatsContainer.addEventListener('click', function (event) {
        const targetSeat = event.target.closest('.seat');
        if (!targetSeat) return; // 좌석 요소가 아닌 경우, 이벤트 처리 중단
        if(targetSeat.classList.contains('disable')) return

        const row = targetSeat.dataset.row;
        const col = targetSeat.dataset.col;
        const resultDisplay = document.querySelector('.result');

        const y_value = alphabet[row];
        const x_value = col - 1;
        const value = `${y_value}${x_value}`;

        // 이미 선택된 좌석인 경우 클릭 이벤트를 무시합니다.
        if (targetSeat.classList.contains('occupied')) return;
        // 복도(hidden)의 경우에 클릭 이벤트를 무시한다.
        if (targetSeat.classList.contains('hidden')) return;
        
        if (list.includes(value)) {
            list = list.filter(item => item !== value);
        } else {
            list.push(value);
        }

        resultDisplay.textContent = `선택한 좌석: ${list}`;
        event.target.classList.toggle('selected');
    });
});

function sendData(){
    const data = JSON.stringify(list)
    localStorage.setItem('data', data)
    alert(`좌석이 다음과 같이 예약되었습니다.\n ${list}`)
    window.location.href ='index.html';
}
