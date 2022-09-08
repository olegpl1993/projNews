class People {
    public name: string;
    public age: number;
    private pass: string;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    setPass(pass: string) {
        this.pass = pass;
    }
    sayPass() {
        console.log(this.pass);
    }
    sayName() {
        console.log(this.name);
    }
    sayAge() {
        console.log(this.age);
    }
}
export default People;