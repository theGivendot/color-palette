function text_change() {
    document.getElementById('text_changing').innerHTML = '...will change!'; // the code for the top title changing when clicked 
};
function this_changes_that() {
    document.getElementById('this_change_that_two').innerHTML = '...makes this text appear!'; // the code to put text in a seperate element when an element is clicked 
};
function button_one() {
    document.getElementById('button_text_one').innerHTML = '...makes this text box appear!' // text with text box appearing
    add = document.getElementById('button_text_one'); // making a variable for the html element 
    add.innerHTML += '<br><input type="text" id="button_enter_text"><br><input type="submit" id="button_one_text_submit" onclick="submit_button_text()">';
    // this is how to make a new html element or add onto an existing one in javascript
};
function submit_button_text() {
    userType = document.getElementById('button_enter_text').value; // nodeValue, the text suggested by the editor, does not work
    document.getElementById('user_typed_text').innerHTML = userType; // setting the html element to show what the user typed for input 
};
function button_text_one_change_title() {
    document.getElementById('text_changing').innerHTML = 'and that changed this text again!' // changing the top title text again
};
function pal_info_1() {
    document.getElementById('pal_info_area').innerHTML = '#20123A';
    document.getElementById('pal_info_area').style.color = '#20123A';
};
function pal_info_2() {
    document.getElementById('pal_info_area').innerHTML = '#CB1F9C';
    document.getElementById('pal_info_area').style.color = '#CB1F9C';
};
function pal_info_3() {
    document.getElementById('pal_info_area').innerHTML = '#03363D';
    document.getElementById('pal_info_area').style.color = '#03363D';
};
function pal_info_4() {
    document.getElementById('pal_info_area').innerHTML = '#174D4D';
    document.getElementById('pal_info_area').style.color = '#174D4D';
};
function pal_info_5() {
    document.getElementById('pal_info_area').innerHTML = '#E27D60';
    document.getElementById('pal_info_area').style.color = '#E27D60';
};
function pal_info_6() {
    document.getElementById('pal_info_area').innerHTML = '#C38D9E';
    document.getElementById('pal_info_area').style.color = '#C38D9E';
};
function pal_info_7() {
    document.getElementById('pal_info_area').innerHTML = '#41B3A3';
    document.getElementById('pal_info_area').style.color = '#41B3A3';
};
function pal_info_8() {
    document.getElementById('pal_info_area').innerHTML = '#553D67';
    document.getElementById('pal_info_area').style.color = '#553D67';
};
function pal_info_9() {
    document.getElementById('pal_info_area').innerHTML = '#05386B';
    document.getElementById('pal_info_area').style.color = '#05386B';
};
function pal_info_10() {
    document.getElementById('pal_info_area').innerHTML = '#EDF5D1';
    document.getElementById('pal_info_area').style.color = '#EDF5D1';
};
function pal_info_11() {
    document.getElementById('pal_info_area').innerHTML = '#55BCC9';
    document.getElementById('pal_info_area').style.color = '#55BCC9';
};
function pal_info_12() {
    document.getElementById('pal_info_area').innerHTML = '#3500D3';
    document.getElementById('pal_info_area').style.color = '#3500D3';
};
function pal_info_13() {
    document.getElementById('pal_info_area').innerHTML = '#6F2232';
    document.getElementById('pal_info_area').style.color = '#6F2232';
};
function pal_info_14() {
    document.getElementById('pal_info_area').innerHTML = '#950740';
    document.getElementById('pal_info_area').style.color = '#950740';
};
function pal_info_15() {
    document.getElementById('pal_info_area').innerHTML = '#0B0C10';
    document.getElementById('pal_info_area').style.color = '#0B0C10';
};
function pal_info_16() {
    document.getElementById('pal_info_area').innerHTML = '#272727';
    document.getElementById('pal_info_area').style.color = '#272727';
};
function pal_info_17() {
    document.getElementById('pal_info_area').innerHTML = '#FFE400';
    document.getElementById('pal_info_area').style.color = '#FFE400';
};
function pal_info_18() {
    document.getElementById('pal_info_area').innerHTML = '#747474';
    document.getElementById('pal_info_area').style.color = '#747474';
};
function pal_info_19() {
    document.getElementById('pal_info_area').innerHTML = '#25274D';
    document.getElementById('pal_info_area').style.color = '#25274D';
};
function pal_info_20() {
    document.getElementById('pal_info_area').innerHTML = '#29648A';
    document.getElementById('pal_info_area').style.color = '#29648A';
};
function pal_info_21() {
    document.getElementById('pal_info_area').innerHTML = '#2E9CCA';
    document.getElementById('pal_info_area').style.color = '#2E9CCA';
};
function pal_info_31() {
    document.getElementById('pal_info_area').innerHTML = '#141414';
    document.getElementById('pal_info_area').style.color = '#141414';
};
