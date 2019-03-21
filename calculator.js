class test {
    testdata(numa,numb){
            numa = Number(numa);
            numb = Number(numb);
       if (Number.isNaN(numa)  || Number.isNaN(numb)){
           console.log('Du Lieu Nhap Vao Khong Dung.');
           return false;
       }
       return true;
    }
}

class excute extends test{
    cong(a,b){
	a = Number(a);
	b = Number(b);
        if(this.testdata(a,b)){      
            console.log(a+b);
             return a+b;
        }
    }
    tru(a,b){
        if(this.testdata(a,b)){      
            console.log(a-b);
            return a-b;
        }
    }
    nhan(a,b){
        if(this.testdata(a,b)){          
            console.log(a*b);
            return a*b;
        }
    }
    chia(a,b){
        if(this.testdata(a,b)){
            if(b == 0){
                console.log('so bi chia khong uoc bang 0');
            }else{        
                console.log(a/b);
                return a/b;
            }
        }
    }
}
var run = new excute();
run.chia("20","10");
