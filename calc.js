const fields = [
    {txt: 1, col:1, row: 4},
    {txt: 2, col:2, row: 4},
    {txt: 3, col:3, row: 4},
    {txt: 4, col:1, row: 3},
    {txt: 5, col:2, row: 3},
    {txt: 6, col:3, row: 3},
    {txt: 7, col:1, row: 2},
    {txt: 8, col:2, row: 2},
    {txt: 9, col:3, row: 2},
    {txt: 0, col:'1/3', row: 5},
    {txt: 'C', col:4, row: 2},
    {txt: '+', col:4, row: 3},
    {txt: '-', col:4, row: 4},
    {txt: '=', col:4, row: 5},
    {txt: '.', col:3, row: 5},
    {txt: 'Display', col:'1/5', row: 1},
    ];

    

    class Calc {
        constructor(){
            this.clearFlag = false;
            this.memory = 0;
            this.op = 0;
            this.container = document.createElement('div');
            this.container.id = 'container';
            this.disply = null;


            fields.forEach(el => {
                const button=document.createElement('div');
                button.textContent=el.txt;
                button.style.gridColumn=el.col;
                button.style.gridRow=el.row;
                if (el.txt==='Display')
                {
                    //button.id='display';
                    button.textContent='0';
                    this.display = button;
                }
                else{
                    button.addEventListener('click', ev => this.handleClick(ev));
                } 
                this.container.appendChild(button);
        
            });
        }

set dis(val){
this.display.textContent = val;
}
get disp(){
    return this.display.textContent;
}


        handleClick(ev) { 
            const disp = document.getElementById('display');
            const key  = ev.target.textContent;
            switch(key)
            {
                case 'C':
                    this.disp = 0;
                    this.clearFlag = true;
                    this.memory = 0;
                    this.op = 0;
                    break;
    
                    case '+':
                    case '-':
                    if (this.op === 0){
                        this.memory = parseFloat(this.disp);
                    }
                    else {
                        this.memory += op * parseFloat(this.disp);
                    }
                    this.op = key === '+' ? 1 : -1;
                    this.clearFlag=true;
                    break;
    
                    case '=':
                    if (this.op === 0){
                        this.memory = parseFloat(this.isp);
                    }
                    else {
                        this.memory += op * parseFloat(disp);
                    }
                    this.disp = this.memory;
                    this.op = 0;
    
                    break;
    
    
                default:
                    if (key === '0' && this.disp.textContent === '0') return;
                    if (key === '.' && this.disp.textContent.includes('.')) return;
                    if ((key === '.' && this.disp.textContent === '0') || this.clearFlag) {
                        this.disp.textContent = key;
                        this.clearFlag=false;
                        
                    }
                    else {
                        this.disp.textContent += key;
                    }
            }
        }

        init() {
            document.body.appendChild(this.container);
        }
        
    }
    const calc = new Calc();






window.addEventListener('DOMContentLoaded', () => calc.init());
