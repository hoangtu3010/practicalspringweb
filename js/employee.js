document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();

    // Xử lí kết quả trả về
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let tableTag = document.querySelector("#data_table");
            let data = JSON.parse(xhr.responseText);
            for (let i = 0; i < data.length; i++) {
                let element = data[i];
                tableTag.innerHTML += `<tr>
                        <th scope="row">${element.id}</th>
                        <td>${element.name}</td>
                        <td>${element.wage}</td>
                    </tr>`;
            }
        }
    };

    // Xác định gửi đi đâu, theo cách nào
    xhr.open("GET", "http://localhost:8080/api/v1/employees", false);

    // Gửi đi
    xhr.send();
});