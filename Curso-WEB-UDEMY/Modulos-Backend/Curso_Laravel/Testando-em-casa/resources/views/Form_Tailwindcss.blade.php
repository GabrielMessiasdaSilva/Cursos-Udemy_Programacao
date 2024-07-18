<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  @vite('resources/css/app.css')
<title>Estudando Tailwind CSS</title>
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <style id="theme"></style>
</head>
<body class="bg-gray-200 h-screen flex items-center justify-center">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-1 gap-4">
        <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Nome de usuário
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nome de usuário">
        </div>
        <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Senha
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
        </div>
        <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Entrar
            </button>
        </div>
    </form>
</body>
</html>
   
</body>
</html>