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
    allClear(){
        this._operation = [];
    }
    clearEntry(){
        this._operation.pop();
    }
    getLastOperation(){
        return this._operation[this._operation.length - 1];
    }
    setLastOperation(value){
        this._operation[this._operation.length - 1] = value;
    }
    isOperator(value){
        return (['+', '-', '*', '/', '%'].indexOf(value) > -1);
    }
    addOperation(value){
        if(isNaN(this.getLastOperation())){
            if (this.isOperator(value)){
                this.setLastOperation(value);
                console.log('caquinha');
            }else if(isNaN(value)){

            }else{
                this._operation.push(value);
            }
        } else {
            this.setLastOperation(parseInt(this.getLastOperation().toString() + value.toString()));
        }
        console.log(this._operation);
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
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            case 'multiplicacao':
                this.addOperation('*');
                break;
            case 'divisao':
                this.addOperation('/');
                break;    
            case 'porcento':
                this.addOperation('%');
                break; 
            case 'igual':
                    
                break; 
            case 'ponto':
                this.addOperation('.');
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