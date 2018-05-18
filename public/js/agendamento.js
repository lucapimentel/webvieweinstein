// > jpg, png, xlx, xlxs, pdf, doc, docx

// > 3.9 MB Cada um.

// >

// URL: http://ensinoqas.einstein.br/_layouts/15/Entercom.Einstein.Institucional/PortalServicos.aspx/SaveData

// Formato do objeto a ser enviado:

// {

//                 "obj": {

//                                "List": "ColetaDomiciliar",

//                                "Site": "https://ensinoqas.einstein.br",

//                                "Fields": {

//                                                "Assunto": "Agendamento de Exames"

//                                                "Title": "Teste E-Life",

//                                                "CpfPassaporte": "123456",

//                                                "Telefone": "11997998999",

//                                                "Email": "thales.novaes@einstein.br",

//                                                "TipoLaboratorial": true,

//                                                "TipoCardiologico": true,

//                                                "Mensagem": "Teste",

//                                                "Pedidos": ""

//                                }

//                 }

// }

// var fileName = uId + "-" + file.name;
//        var reader = new FileReader();
//        reader.readAsDataURL(file);
//        reader.onload = function(e) {
//            var content = e.target.result;
//            content = content.substring(content.indexOf('64') + 3);
//            var fileData = JSON.stringify({
//                     FileName: fileName,
//                     LibraryKey : _uplLibrary,
//                     FileByteStream: content

//            });

//            var wcfServiceUrl = "https://www.ensinoqas.einstein.br/_layouts/15/SvcIntegrador/ArchiveHandler.svc/UploadFile";

//            $.ajax({
//                cache: false,
//                url: wcfServiceUrl,
//                data: fileData,
//                type: "POST",
//                processData: false,
//                contentType: "application/json",
//                dataType: "json",
//                success: function (data) {
//                            FileNames.push(fileName);
//                },
//                error: function (data) {
//                    console.log(data);
//                    filesError++;
//                }
//            });
//        };

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function guid() {
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
}
var guid = guid();
var fileName =
  guid.toString().toUpperCase() + "-" + file.name.split(" ").join("");
