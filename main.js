async function getCryptoData(cryptos) {
    for (let i = 0; i< cryptos.length; i++) {
        const crypto = cryptos[i];
        fetch(`https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=USD`).then(res => res.json()).then(data => {
        
            document.getElementsByClassName(`${crypto}`)[0].innerHTML = data.USD
        })
    }
    setTimeout(getBitcoinData, 5000)
}

getCryptoData(["btc","eth","shib","ltc","xmr","dot","bnb"])