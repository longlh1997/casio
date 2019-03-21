class num
{
    constructor(a,b)
    {
        this.a = Number(a);
        this.b = Number(b);
    }

}
class add extends num
{
    add()
    {
        console.log(this.a +this.b);
    }
    sub()
    {
        console.log(this.a-this.b);
    }
    multy()
    {
        console.log(this.a*this.b);
    }
    div()
    {
        if(this.b==0)
        {
            console.log("So bi chia phai khac 0");
        }
        else
        {
            console.log(this.a/this.b);
        }
    }
}
var run = new add(5,5);
run.sub();
