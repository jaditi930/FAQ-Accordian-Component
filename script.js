function toggle_ans(id)
{

let ans=document.getElementById(`ans_${id}`);
console.log(ans)

    if(ans.state=="off")
    {
        ans.style.display="block";
        ans.state="on";
        document.getElementById(`img_${id}`).src="./assets/images/icon-minus.svg"
    }
    else
    {
        ans.style.display="none";
        ans.state="off";
        document.getElementById(`img_${id}`).src="./assets/images/icon-plus.svg"
    }

}