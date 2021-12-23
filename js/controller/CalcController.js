class CalcController{

    constructor(){
        this._displayCalc = '0';
        this._currentDate;
        this.initialize();

    }

    initialize(){

        let displayCalEl = document.querySelector('#display');
        let dateEl = document.querySelector('#data');
        let timeEl = document.querySelector('#hora');

        displayCalEl.innerHTML = "123";
        dateEl.innerHTML = '23/12/2021';
        timeEl.innerHTML = '12:04'; 

    }

    get displayCalc(){
        return this._displayCalc;
    }
    set displayCalc(value){
        this._displayCalc = value;
    }
    get currentDate(){
        return this._currentDate;
    }
    set currentDate(data){
        this._currentDate = data;
    }

}