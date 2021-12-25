class CalcController{
    constructor(){
        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this.initialize();
        this.initButtonsEvents();
    }
    initialize(){
        this.setDisplayDateTime();
        setInterval(()=>{
            this.setDisplayDateTime();
        },1000)
    }
    addEventListenerAll(item, events, fn){
        events.split(' ').forEach(e => {    
            item.addEventListener(e, fn, false);
        });
    }
    /** OPERAÇÕES DA MINHA CALCULADORA **/
    allClear(){
        this._operation = [];
    }
    clearEntry(){
        this._operation.pop();
    }
    addOperation(value){
        this._operation.push(value);
    }
    setError(){
        this.displayCalc = 'Error';
    }
    execBtn(value){
        switch(value){
            case 'ac':
                this.allClear();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                
                break;
            case 'subtracao':
                
                break;
            case 'multiplicacao':
                
                break;
            case 'divisao':
                    
                break;    
            case 'porcento':
                    
                break; 
            case 'igual':
                    
                break; 
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8': 
            case '9': 
                this.addOperation(parseInt(value));
                break;
            default:
                this.setError();
                break; 
        }
    }
    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        buttons.forEach( (item, index) =>{
            this.addEventListenerAll(item, "click drag", ()=>{
                let textBtn = item.className.baseVal.replace('btn-','');
                this.execBtn(textBtn);
            });
            this.addEventListenerAll(item, "mouseover mouseup mousedown",()=>{
                item.style.cursor = 'pointer';
            });
        });
    }
    setDisplayDateTime(){
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day : '2-digit',
            month : 'short',
            year : 'numeric'
        });
    }
    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        this._dateEl.innerHTML = value;
    }
    /*--*/ 
    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        this._timeEl.innerHTML = value;
    }
    /*--*/
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }
    /*--*/
    get currentDate(){
        return new Date();
    }
    set currentDate(date){
        
    }

}