const obj = document.querySelectorAll('.obj')
const obj2 = document.querySelector('.obj2')

const inp = document.querySelector('.inp')

//* normal functions
function normal(e){
    if(e.target.value.toLowerCase().includes('color')){
        objStyleBuilder('backgroundColor', e.target.value.replace('color', ''), true)
    }else if(e.target.value.toLowerCase().includes('radius')){
        objStyleBuilder('borderRadius', e.target.value.replace('radius', ''), true)
    }else if(e.target.value.toLowerCase().includes('border')){
        objStyleBuilder('border', e.target.value.replace('border', ''), true)
    }
}

//* special functions
function special(e){
    cloneUnClone(e)
}

//* clone and unclone object
function cloneUnClone(e){
    if(e.target.value.toLowerCase().includes('clone')){
        objStyleBuilder('opacity', '100', false)
        objStyleBuilder('left', '0', false)
        objStyleBuilder('position', 'none', false)
        objStyleBuilder('transform', 'translateX(0)', false)
    }

    if(e.target.value.toLowerCase().includes('unclone')){
        obj2.style.opacity = '0'
        objStyleBuilder('left', '50%', false)
        objStyleBuilder('position', 'relative', false)
        objStyleBuilder('transform', 'translateX(-50%)', false)
    }
}


// * objects.style.... = value
// ! isVisible - working only on visible objects
function objStyleBuilder(styleProperty, value, isVisible){
    obj.forEach(el => {
        if(isVisible){
            if(el.style.opacity == '100' || !isVisible){
                el.style[styleProperty] = value
            }
        }else{
            el.style[styleProperty] = value
        }
    });
}


inp.addEventListener('input', (e) => {
    if(e.target.value != '' && e.target.value != ' '){
        normal(e)
        special(e)
    }
})