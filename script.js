function MyDate(year, month = 0, day = 1, hour = 0, minute = 0, second = 0) {
    if (!year === 0) {
        return new Date(0)
    }
    if (!year) {
        return new Date()
    }
    this._year = year;
    this._month = month;
    this._day = day;
    this._hour = hour;
    this._minute = minute;
    this._second = second;

    this.getFullYear = function () {
        return this._year
    }
    this.getMonth = function () {
        return this._month
    }
    this.getDay = function () {
        return this._day
    }
    this.getHours = function () {
        return this._hour
    }
    this.getMinutes = function () {
        return this._minute

    }
    this.getSeconds = function () {
        return this._second
    }
    this.setMonth = function (value) {
        this._month = value
    }
    this.day = function (value) {
        this._day = value
    }
    this.setYear = function (value) {
        this._year = value
    }

    this.setHour = function (value) {
        this._hour = value
    }

    this.setSec = function (value) {
        const addMinute = parseInt(value / 60);
        this.second = value % 60;
        this.setMinute(this.getMinute() + addMinute)
    }

    this.setMinute = function (value) {
        const addHours = parseInt(value / 60);
        this.second = value % 60;
        this.setHour(this.getHour() + addHours)
    }


    Object.defineProperty(this, "year", {
        set: (value) => {
            this._year = value;
        },
        get: () => {
            return this._month
        }
    })
    Object.defineProperty(this, "month", {
        set: (value) => {
            this._year += parseInt(value / 12)
            this._month = value % 12;
        },
        get: () => {
            return this._month
        }

    })
    this.toString = function(){
        return `${this._year} ${this._day} ${this._month} ${hour}:${minute}:${second} `
    }
}
let ab = new MyDate(2023, 50, 15, 14, 30, 15)
// ab._year = 2021
// console.log(new MyDate(2021, 20, 3, 14, 30, 25).getFullYear());
console.log(new MyDate(2023, 50, 15, 14, 30, 15).toString());

