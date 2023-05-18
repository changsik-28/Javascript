function Marin(level,name,종족,life){
    this.life=life;
    this.name=name;
    this.level=level;
    this.종족=종족;
    this.fire=function(){
        this.level += 1;
        if (this.level<3){
            document.write(this.name+"이 공격합니다.");
        }else{
            document.write(this.name+ "스팀팩을 창착했습니다.")
        }
    }
    this.defend=function(){
        this.life -= -5;
        if(this.left==0)
        document.write("마린이 전사했습니다.")
    }
}
var 마린1=new Marin(1,"마린","테란",10);
마린1.fire();마린1.fire();마린1.fire();마린1.fire();