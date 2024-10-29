async function GenerateQr(data)
{
    var result = await fetch("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+data);
    console.log(URL.createObjectURL(await result.blob()))
}
GenerateQr();