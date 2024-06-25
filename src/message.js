export function message(msg) {
    const ele = document.createElement('p')
    ele.innerHTML = msg;
    document.body.append(ele)
}