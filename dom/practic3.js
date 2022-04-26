
// // let table = document.createElemen('table')
// // let thead = document.createElement('thead')
// // let tr = document.createElement('tr')
// // let tdoby = document.createElement('tbody')
// // let td = document.createElement('td')

// // <div id = "show">
// // <div>
// // <span id="name">홍길동</span>  -  <span class="age"> 20살 </span>
// // </div>
// //   </div>
// // <script>
// //   name.setAttribute('id', 'name');
// // //   name.innerHTML = '홍길동'

// // // </script> --내가쓴것들

// // //사용하는 변수 선언

// // let tavle, theadm

// // -----------------------------------------------------------------------------------
// let data = [{name:'홍길동, age : 20'}]

// document.addEventListener('DOMContentLoaded', callbackFnc);

// function callbackFnc() {
//   let table = document.createElement('table');
//   table.setAttribute('border', 1);

//   //밑으 ㅣ함수가 불러와져서 써짐
//   let thead = makeHead();
//   table.appendChild(thead); // <table><thead>
  
//   function makebody(objAry) {

//     // [{name, age},{},{},{}]
//     //tbody생성
//   }

//   // tbody
//   let tbody = document.createElement('tbody');
//   table.appendChild(tbody); // <table><tbody>
  
// ----
//   objArt.forEach(function (obj) {
//     //{name:'', age: }
//     // 첫번째 라인
//   tr = document.createElement('tr');
//   tr.setAttribute('id', 101);
//   let td = document.createElement('td');
//   text = document.createTextNode(obj.name)
//   tbody.appendChild(tr);
//   td.appendChild(text);
//   tr.appendChild(td);

//   td = document.createElement('td');
//   text = document.createTextNode(obj.age + '살');
//   td.appendChild(text);
//   tr.appendChild(td);

//   });
  
//   // 두번째 라인
//   tr = document.createElement('tr');
//   tr.setAttribute('id', 102);
//   td = document.createElement('td');
//   text = document.createTextNode('김길동')
//   td.appendChild(text);
//   tr.appendChild(td);

//   td = document.createElement('td');
//   text = document.createTextNode('22살');
//   td.appendChild(text);
//   tr.appendChild(td);

//   tbody.appendChild(tr);


//   let data = [{
//     id : 101,
//     name : '고길동',
//     age : 52
//   }]

//   // 출력
//   document.getElementById('show').appendChild(table);
//   return tbody;
// }

// function makeHead(){

//  // thead
//  let thead = document.createElement('thead');

 
//  let tr = document.createElement('tr');
//  let th = document.createElement('th');
//  let text = document.createTextNode('이름');
//  thead.appendChild(tr);
//  tr.appendChild(th);
//  th.appendChild(text); 

//  th = document.createElement('th')
//  text = document.createTextNode('나이');
//  tr.appendChild(th);
//  th.appendChild(text);

//  return thead;

// }

// dom/practice3.js

// let data = [{
//   id: 101,
//   name: '홍길동',
//   age: 20
// }, {
//   id: 102,
//   name: '김길동',
//   age: 22
// }, {
//   id: 103,
//   name: '박길동',
//   age: 25
// }];

// document.addEventListener('DOMContentLoaded', callbackFnc);

// function callbackFnc() {
//   // 사용하는 변수선언.
//   let table, thead, tbody, tr, td, text;
//   // table 생성.
//   table = document.createElement('table'); // <table>
//   table.setAttribute('border', 1); // <table border=1>
//   // thead에 하위요소를 작성한 다음 table 하위요소로 추가.
//   thead = makeHead();
//   table.appendChild(thead);
//   tbody = makeBody(data);
//   table.appendChild(tbody);
//   // show 요소의 하위 table append.
//   document.getElementById('show').appendChild(table);
// }

// function makeBody(objAry) {

//   // [{name, age},{},{},{}]
//   // tbody 생성.
//   let tbody = document.createElement('tbody');

//   objAry.forEach(function (obj) {

//     // obj => {name:'', age: }
    
//     tbody.appendChild(tr); // <tbody><tr><td>홍길동</td><td>20살</td></tr></tbody>

//   });
//   return tbody;
// }

// function makeHead() {
//   // thead 생성.
//   let thead = document.createElement('thead');

//   let tr = document.createElement('tr');
//   let td = document.createElement('th');
//   let text = document.createTextNode('이름');
//   td.appendChild(text); // <td>이름</td>
//   tr.appendChild(td); // <tr><td>이름</td></tr>

//   td = document.createElement('th');
//   text = document.createTextNode('나이');
//   td.appendChild(text); // <td>나이</td>
//   tr.appendChild(td); // <tr><td>이름</td><td>나이</td></tr>

//   thead.appendChild(tr); // <thead><tr><td>이름</td><td>나이</td></tr></thead>

//   return thead;
// }
// /-----------------------------------------


// dom/practice3.js

let data = [{
  id: 101,
  name: '홍길동',
  age: 20
}, {
  id: 102,
  name: '김길동',
  age: 22
}, {
  id: 103,
  name: '고길동',
  age: 25
}];

document.addEventListener('DOMContentLoaded', callbackFnc);

function callbackFnc() {
  console.log(window);
  window.document.children[0].children[1].children[0].innerHTML = '요기요';
  let h3 = window.document.children[0].children[1].children[0];
  let newH3 = document.createElement('h3');
  newH3.innerHTML = "여기요"
  h3.parentElement.appendChild(document.createElement('h3'));

  // 사용하는 변수선언.
  let table, thead, tbody, tr, td, text;
  // table 생성.
  table = document.createElement('table'); // <table>
  table.setAttribute('border', 1); // <table border=1>
  // thead에 하위요소를 작성한 다음 table 하위요소로 추가.
  thead = makeHead();
  table.appendChild(thead);
  tbody = makeBody(data);
  table.appendChild(tbody);
  // show 요소의 하위 table append.
  document.getElementById('show').appendChild(table);

// 추가 버튼 이벤트
  let btn = document.querySelector('button');
  btn.addEventListener('click', function() {
    let obj = {}
    let userName = document.getElementById('userName').value;
    obj.name = userName;
    let userAge = document.getElementById('userAge').value;
    obj.age = userAge;
    obj.id = 110;

    document.querySelector('table>tbody').appendChild(makeTr(obj));
  })
//{김민수, 25}
let newObj = {id: 105, name: '김민수', age: 25}
document.querySelector('table>tbody').appendChild(makeTr(newObj));
}

function makeTr(obj) {

  let fields = ['name', 'age'];
  // 첫번째 라인.
  let tr = document.createElement('tr');
  tr.setAttribute('id', obj.id);

  // name, age 필드 개수만큼 td를 생성
  fields.forEach(function (field) {
    let td = document.createElement('td');
    let text = document.createTextNode(obj[field] + `${field=="age"?"살":""}`);
    td.appendChild(text); // <td>홍길동</td>
    tr.appendChild(td); // <tr><td>홍길동</td></tr>
  })
  let btn = document.createElement('button');//<button>삭제<button>
  btn.innerHTML='삭제';
  btn.addEventListerner('Click', function(evnt) { //클릭이 된다면 그 떄 이 함수를 실행하시오
    console.log(this);
    //evnt.target.parentElement.parentElement.remove();
  });
  let td = document.createElement('td');
  td.appendChild(btn);
  tr.appendChild(td);



  return tr;
  }

function deleteCallBack(){

}

function makeBody(objAry) {

  // [{name, age},{},{},{}]
  // tbody 생성.
  let tbody = document.createElement('tbody');

  objAry.forEach(function (obj) {
    // obj => {name:'', age: }
    tbody.appendChild(makeTr(obj)); // <tbody><tr><td>홍길동</td><td>20살</td></tr></tbody>

  });
  return tbody;
}

function makeHead() {
  // thead 생성.
  let thead = document.createElement('thead');

  let tr = document.createElement('tr');
  let td = document.createElement('th');
  let text = document.createTextNode('이름');
  td.appendChild(text); // <td>이름</td>
  tr.appendChild(td); // <tr><td>이름</td></tr>

  td = document.createElement('th');
  text = document.createTextNode('삭제');
  td.appendChild(text); // <td>나이</td>
  tr.appendChild(td); // <tr><td>이름</td><td>나이</td></tr>

  thead.appendChild(tr); // <thead><tr><td>이름</td><td>나이</td></tr></thead>

  return thead;
}