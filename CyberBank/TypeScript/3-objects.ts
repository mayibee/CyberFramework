// declaring variable of object type
let user: { username: string, points: number, description: string }

// assign value
user = {
    username: 'yusufshakeel',
    points: 9,
    description: 'This is my profile.'
  };

console.log(user.points);

//complex object
let obj: { x: number, y: number, getSum: () => number };

// assign value
obj = {
    x: 10,
    y: 20,
    getSum: function (): number {
      return this.x + this.y;
    }
  };
  
  // call the function getSum()
  console.log("Sum: " + obj.getSum());

  //complex object
  let complex:{data:number[],output:(all:boolean)=>number[]}={
      data:[100,3.99,10],
      output:function(all:boolean):number[]{
          return this.data;
      }
  }

  console.log(complex.output);
  console.log(complex.data[1]);

//type alias : kind of interface create your type and then you can create instance?
type Complex = {data:number[],output:(all:boolean)=>number[]};

let complex2:Complex={
    data:[100,3.99,10],
    output:function(all:boolean):number[]{
        return this.data;
    }
}