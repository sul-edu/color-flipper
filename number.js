let count = 0;

const allBtns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");
// console.log(allBtns);
allBtns.forEach((btn) => {
 console.log(btn);
    btn.addEventListener("click", function (e){
        // console.log(e.currentTarget.classList);
        const style = e.target.value;
        // console.log(style, e.currentTarget);
        if(style === "increase"){
            count++
        }
        else if(style ==='decrease'){
            count-- ;
        }
        else{
            count = 0;
        }
        // const styles = e.currentTarget.classList;
    //    if(styles.contains('decrease')){        
    //      count-- ;
    //    }
    //    else if(styles.contains('increase')){
    //     count++ ;
    //    }
    //    else{
    //     count = 0;
    //    }
    if(count >= 1){
        value.style.color = 'green';
    }
    if(count <= -1){
        value.style.color = 'red';
    }
    if(count === 0){
        value.style.color='blue';
    }
      return  value.textContent = count;
    });
});