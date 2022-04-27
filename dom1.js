// dom2/dom1.js

let data=[{studNo:101, studName:'조수연', engScore:90, korScore:80},
{studNo:102, studName:'황진주', engScore:88, korScore:91},
{studNo:103, studName:'권가희', engScore:92, korScore:89},
{studNo:104, studName:'유해정', engScore:92, korScore:83},];

let list = document.getElementById('list');

data.forEach(function(elem, idx, ary){
  list.appendChild(makeTr(elem))
});


//student 한건 -> <tr><td>학번</td><td>이름</td><td>영어</td><td>국어</td></tr>
function makeTr(student) {
  let tr = document.createElement('tr');
  tr.addEventListener('click', function(){
    console.log(this);
  })
  for(let field in student){ // student['studNo']
    let td = document.createElement('td');
    td.innerHTML = student[field];
    tr.appendChild(td);
  }
  // 버튼 생성 : 삭제

  let btn = document.createElement('button')
  btn.innerHTML='삭제'
  btn.addEventListener('click',function(e){
    console.log(this)
    // e.target.parentElement.parendElement.remove();
  });
  
  let td = document.createElement('td')
  td.appendChild(btn)
  tr.appendChild(td)
  return tr
}
