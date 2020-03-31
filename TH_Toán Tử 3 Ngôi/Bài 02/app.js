let login=prompt("Mời Nhập Chức Vụ","Employee"+" , "+"Director");
let message=(login=="Employee")? "Hello"+login:
            (login=="Director")? "hello"+login:
                (login=="")? "No Login":
                    "";
alert(message);
