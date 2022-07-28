class Employee {
    constructor (name, division, DutyHour){
        this.name = name;
        this.division = division;
        this.DutyHour = DutyHour;
    }
}

class PartTime extends Employee{
    CalcPay = () => {
        this.pay = this.DutyHour * 8000;
    }
}

class PullTime extends Employee{
    CalcPay = () => {
        this.pay = this.DutyHour * 10000;
    }
}

const PartTime1 = new PartTime('김상윤', '통계', 200);
const PullTime1 = new PullTime('박주호', '교육', 200);
PartTime1.CalcPay();
PullTime1.CalcPay();
console.log(PartTime1);
console.log(PullTime1);