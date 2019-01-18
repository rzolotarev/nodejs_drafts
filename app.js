var soap = require('soap');
var url = 'http://www.cbr.ru/CreditInfoWebServ/CreditOrgInfo.asmx?wsdl';
var args = {name: 'value'};
soap.createClient(url, function(err, client) {
    // console.log(client);
    client.EnumBIC(args, function(err, result) {        
        console.log(result.EnumBICResult.diffgram.EnumBIC);
    });
});