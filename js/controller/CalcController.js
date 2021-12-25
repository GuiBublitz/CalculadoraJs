class CalcController{
    constructor(){
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
    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        buttons.forEach( (item, index) =>{
            this.addEventListenerAll(item, "click drag", ()=>{
                console.log(item.className.baseVal.replace('btn-',''));
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