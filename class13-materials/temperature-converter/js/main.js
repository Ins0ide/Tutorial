//Write your pseduo code first! 
document.querySelector('#btn').addEventListener('click', () => {
    let input = document.querySelector("#input").value

    const convert = input * 9/5 + 32

    document.querySelector('#result').innerText = convert
});

