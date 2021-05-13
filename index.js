// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("готово!"), 1000)
//   });

//   let result = await promise; // будет ждать, пока промис не выполнится (*)

//   alert(result); // "готово!"
// }

// f();

async function showAvatar() {

    // запрашиваем JSON с данными пользователя
    //let response = await fetch('user.json');
    //let user = await response.json();
    let user = {
        "name": "iliakan",
        "isAdmin": true
    };
  
    // запрашиваем информацию об этом пользователе из github
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // отображаем аватар пользователя
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // ждём 3 секунды и затем скрываем аватар
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
    img.remove();
  
    return githubUser;
  }
  
  //showAvatar();