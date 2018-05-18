angular
  .module("app", [])

  .constant("config", {
    urlSaveData:
      "http://ensinoqas.einstein.br/_layouts/15/Entercom.Einstein.Institucional/PortalServicos.aspx/SaveData",
    urlUploadData:
      "https://www.ensinoqas.einstein.br/_layouts/15/SvcIntegrador/ArchiveHandler.svc/UploadFile"
  })

  .factory("FactoryEinstein", function($http, config) {
    return {
      saveData: function(formData) {
        var data = {
          List: "ColetaDomiciliar",
          Site: "https://ensinoqas.einstein.br",
          Fields: {
            Assunto: "Agendamento de Exames",
            Title: "Agendamento - Bot",
            CpfPassaporte: formData.cpf,
            Telefone: formData.telefone,
            Email: formData.email,
            TipoLaboratorial: formData.isLab,
            TipoCardiologico: formData.isCard,
            Mensagem: formData.msg,
            Pedidos: formData.file
          }
        };
        return $http.post(urlSaveData, data, {
          headers: { "Content-Type": "application/json" }
        });
      },
      uploadData: function(file) {
        
        var fileName = guid() + "-" + file.name;
        var reader = new FileReader();
        var content = file.content;
        var data = JSON.stringify({
          FileName: fileName,
          LibraryKey: _uplLibrary,
          FileByteStream: content
        });
        return $http.post(urlSaveData, data, {
          headers: { "Content-Type": "application/json" }
        });
      }
    };
  })
  .controller("agendamentoCardCtrl", [
    "$scope",
    "$http",
    "FactoryEinstein",
    "$window",
    function($scope, $http, FactoryRioMar, $window) {
      $scope.dataSet = [];
    }
  ])
  .config([
    "$qProvider",
    function($qProvider) {
      $qProvider.errorOnUnhandledRejections(false);
    }
  ])
  .directive("fileread", [
    "FactoryEinstein",
    function(FactoryEinstein) {
      return {
        scope: {
          fileread: "="
        },
        link: function(scope, element, attributes) {
          console.log(FactoryEinstein);
          element.bind("change", function(changeEvent) {
            var reader = new FileReader();
            reader.onload = function(loadEvent) {
              scope.$apply(function() {
                scope.fileread = loadEvent.target.result;
                console.log(
                  scope.fileread.substring(scope.fileread.indexOf("64") + 3)
                );
                console.log(element[0].value.replace(/[\\"]/g, '/').split("/")[2]);
              });
            };
            reader.readAsDataURL(changeEvent.target.files[0]);
          });
        }
      };
    }
  ]);

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

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
// var guid = guid();
// var fileName = guid.toString().toUpperCase() + "-" + file.name.split(" ").join("");
