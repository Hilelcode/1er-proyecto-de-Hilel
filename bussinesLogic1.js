var friendList = [];



function addFriendToSystem(pid, pname, pcountry, pbirthday, pemail){

  var newFriend = {
      id : pid,
      name : pname,
      country : pcountry,
      birthday : pbirthday,
      email : pemail
  };
  console.log(newFriend);
  friendList.push(newFriend);
  localStorageFriendlist(friendList);
}

function getfriendList(){
    var storedList = localStorage.getItem('localFriendList');
    if(storedList == null){
       friendList =[];
    }else{
        friendList = JSON.parse(storedList);
    }
    return friendList;
}

function localStorageFriendlist(plist){
    localStorage.setItem('localFriendList',JSON.stringify(plist));
} 