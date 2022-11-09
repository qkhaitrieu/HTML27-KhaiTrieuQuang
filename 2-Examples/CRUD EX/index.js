function _renderListUser(listUser) {
  let contentBody = ``;
  listUser.map((user) => {
    contentBody += `<tr scope="row">
                <td>${user.name}</td>
                <td>${user.avatar}</td>
            </tr>`;
  });
  let res = `
    <table>
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody  >
        ${contentBody}
         </tbody>
    </table> `;


  let e = document.getElementById("render");
  console.log(e);
  e.innerHTML = res;
}



function getListUsers() {
  fetch(
      "https://636b92367f47ef51e1343645.mockapi.io/api/Users", {
        method: "GET",
      }
    )
    .then((response) => response.json())
    .then((data) => {
      _renderListUser(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function deleteUser() {
  deleteUserAPI();
}

function deleteUserAPI() {
  console.log("deleteUserAPI");
  fetch("https://636b92367f47ef51e1343645.mockapi.io/api/Users/5", {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById('delete').outerHTML = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}





function postUser() {
  const data = {
    name: "qktkkkkkkkkkkkkkkk",
    avatar: "https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg",
  };
  fetch("https://636b92367f47ef51e1343645.mockapi.io/api/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      document.getElementById('post').innerHTML = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function putUser() {
  const data = {
    name: "qktttttttt",
    avatar: "https://icdn.dantri.com.vn/thumb_w/640/2020/12/16/ngam-dan-hot-girl-xinh-dep-noi-bat-nhat-nam-2020-docx-1608126694049.jpeg",
  };
  fetch("https://636b92367f47ef51e1343645.mockapi.io/api/Users/4", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById('put').innerHTML = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}