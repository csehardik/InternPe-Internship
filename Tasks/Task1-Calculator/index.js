<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <script src="script.js"></script>
    

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 shadow-1g p-3 mb-5 bg-white rounded text-center">

                <h1>JS Calci</h1>

                <table class="table">
                    <tr>
                        <td colspan="3"><input type="text" id="textarea"></td>
                        <td><input type="button" value="CLEAR" onclick="clr()"></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="1" onclick="display('1')"></td>
                        <td><input type="button" value="2" onclick="display('2')"></td>
                        <td><input type="button" value="3" onclick="display('3')"></td>
                        <td><input type="button" value="/" onclick="display('/')"></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="4" onclick="display('4')"></td>
                        <td><input type="button" value="5" onclick="display('5')"></td>
                        <td><input type="button" value="6" onclick="display('6')"></td>
                        <td><input type="button" value="+" onclick="display('+')"></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="7" onclick="display('1')"></td>
                        <td><input type="button" value="8" onclick="display('2')"></td>
                        <td><input type="button" value="9" onclick="display('3')"></td>
                        <td><input type="button" value="-" onclick="display('-')"></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="." onclick="display('.')"></td>
                        <td><input type="button" value="0" onclick="display('0')"></td>
                        <td><input type="button" value="=" onclick="calculate()"></td>
                        <td><input type="button" value="*" onclick="display('*')"></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</body>
</html>
