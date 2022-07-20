const info1 = document.querySelectorAll(
  "#NM_FAVORITE > div.group_nav > ul.list_nav.type_fix > .nav_item"  );


const myarr = [];
let tmp;
for(let i=0; i < info1.length; i++){
  tmp = info1[i].textContent;
  // alert(tmp)
  myarr.push(tmp)
}
// console.log(myarr)


const info2 = document.querySelectorAll(
  "#NM_FAVORITE > div.group_nav > ul.list_nav.NM_FAVORITE_LIST > .nav_item"  );

for(let i=0; i < info2.length; i++){
  tmp = info2[i].textContent;
  // alert(tmp)
  myarr.push(tmp)
}

console.log(myarr)
alert(myarr)

