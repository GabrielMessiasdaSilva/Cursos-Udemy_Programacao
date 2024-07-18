// Manipulação de Datas

// Cria uma nova instância da classe Date
var data = new Date();

// Exibe o dia atual do mês (formato: 1-31)
document.write("Dia: " + data.getDate() + '</br>');

// Exibe o mês atual (formato: 0-11, somar 1 para obter o mês correto)
document.write("Mês: " + (data.getMonth() + 1) + '</br>');

// Exibe o ano atual (formato: 4 dígitos)
document.write("Ano: " + data.getFullYear() + '</br>');

// Conectando tudo para exibir a data completa no formato DD/MM/AAAA
document.write("Data completa: " + data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear());

// Métodos para obter informações específicas da data:
// getFullYear() - Retorna o ano com 4 dígitos
// getMonth() - Retorna o mês (0-11, somar 1 para obter o mês correto)
// getDate() - Retorna o dia do mês (1-31)
// getDay() - Retorna o dia da semana (0-6, onde 0 é Domingo)
// getHours() - Retorna a hora do dia (0-23)
// getMinutes() - Retorna os minutos (0-59)
// getSeconds() - Retorna os segundos (0-59)
// getMilliseconds() - Retorna os milissegundos (0-999)
// getTime() - Retorna o tempo total em milissegundos desde 1970-01-01

// Para obter informações no horário universal (UTC):
// getUTCFullYear() - Retorna o ano UTC com 4 dígitos
// getUTCMonth() - Retorna o mês UTC (0-11, somar 1 para obter o mês correto)
// getUTCDate() - Retorna o dia do mês UTC (1-31)
// getUTCDay() - Retorna o dia da semana UTC (0-6, onde 0 é Domingo)
// getUTCHours() - Retorna a hora do dia UTC (0-23)
// getUTCMinutes() - Retorna os minutos UTC (0-59)
// getUTCSeconds() - Retorna os segundos UTC (0-59)
// getUTCMilliseconds() - Retorna os milissegundos UTC (0-999)