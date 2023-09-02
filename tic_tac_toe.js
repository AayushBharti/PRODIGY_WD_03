const boxes=document.getElementsByClassName("cell");
const turnData=document.getElementById("turn-data");
const restartBtn=document.querySelector(".restart-btn");

const cells=Array.from(boxes);
let turn='X';

const wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
]

restartBtn.addEventListener('click',()=>{
    turn= 'X';
    turnData.innerText= `${turn}'s turn`;
    cells.forEach(cell=>{
        cell.innerText=''; 
        cell.classList.remove("line");    
        
    });
});

function startGame(){   
    turnData.innerText= `${turn}'s turn`;
    cells.forEach((elem)=>{
        elem.addEventListener('click',()=>{
            if(elem.innerText===''){
                elem.innerText= turn;
                if(turn==='X'){
                    turn='O';   
                }
                else{
                    turn='X';
                }
                turnData.innerText= `${turn}'s turn`;
            }
            let iswin=Win();
            if(iswin){
                turnData.innerText=`${elem.innerText} wins`;
            }
            let isTie=Tie();
            if(isTie){
                turnData.innerText="It's a tie";
            }
        });
    });
}

function Win(){
    let res=wins.some((eachWin,index)=>{
        let [a,b,c]=wins[index];
        if((cells[a].innerText===cells[b].innerText)&&(cells[b].innerText===cells[c].innerText)&&(cells[a].innerText!='')){
            console.log("win");
            cells[a].classList.add("line");
            cells[b].classList.add("line");
            cells[c].classList.add("line");
            return true;  
        }
    });
    if(res){
        return true;
    }
    else{
        return false;
    }
}

function Tie(){
    let res=cells.every((cell)=>{
        if(cell.innerText==='X' || cell.innerText==='O'){
            return true;
        }
    });
    if(res){
        return true;
    }
    else{
        return false;
    }
}

startGame();