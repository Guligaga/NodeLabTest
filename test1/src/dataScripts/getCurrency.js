function handleCurrency(currArray) {
    return currArray.map(currItem => {
        const {
            Cur_Abbreviation,
            Cur_Name,
            Cur_OfficialRate,
            Cur_Scale,
        } = currItem;
        const rubToCurrency = (Cur_Scale / Cur_OfficialRate).toFixed(4);
        const currencyToRub = (Cur_OfficialRate / Cur_Scale).toFixed(4);
        return {
            abbreviation: Cur_Abbreviation,
            name: Cur_Name,
            rubToCurrency,
            currencyToRub,
        }
    })
}

export default async function getCurrency() {
    const resp = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
    const data = handleCurrency(await resp.json());
    return await data;
}