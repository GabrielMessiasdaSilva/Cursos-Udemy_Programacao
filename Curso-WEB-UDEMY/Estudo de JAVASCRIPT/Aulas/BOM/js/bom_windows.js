var janela



function abrirPopup(){
   janela = window.open('https://etecspgov.sharepoint.com/:w:/r/sites/Section_5128.A.-.T.416.211.20240/_layouts/15/Doc.aspx?sourcedoc=%7B46C95A70-E07C-48D9-9B90-AC68692A4480%7D&file=Referencial_Te%C3%B3rico_Safe_Guardian.docx&action=default&mobileredirect=true&DefaultItemOpen=1&login_hint=gabriel.silva3212%40etec.sp.gov.br&ct=1715177375710&wdOrigin=OFFICECOM-WEB.START.REC&cid=d04f8d78-e701-471d-8ff2-635071fa62cb&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=d5942d29-1608-4f33-bce4-82f2cd7f6611','nova_janela','width=200;','height=200;')
}

function fecharPopup(){
    janela.close()
}