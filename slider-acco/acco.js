

document.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('.acco__row')) {
        const block = target.nextElementSibling;
        const text = block.firstChild.nextSibling;
        const height = text.offsetHeight;
        const icon = target.querySelector('.acco__icon')
        // block.style.heigh = "0px"
        console.log(block.style.height)
        if (block.style.height == 0 || block.style.height == '0px') {
            block.style.height = height + 'px';
            icon.style.transform = `rotate(${0}deg)`
            console.log('First Condition')
        } else {
            console.log('Second Condition')
            block.style.height = 0 + 'px';
            icon.style.transform = `rotate(${180}deg)`
        }
        console.log(height)
    } 
})