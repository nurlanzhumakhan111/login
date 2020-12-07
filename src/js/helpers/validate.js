const regExpDic = {
    // email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    password: /^[0-9a-zA-z]{4,}$/,
}

export function validate(el){
    const regExpName = el.dataset.required;
    if(!regExpDic[regExpName]) return true;
    return regExpDic[regExpName].test(el.value);
}