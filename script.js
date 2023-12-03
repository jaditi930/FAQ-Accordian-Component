function toggle_ans(id)
{
let ans=document.getElementById(`ans_${id}`);

    if(ans.dataset.state==="off")
    {
        ans.classList.remove("hide")
        ans.dataset.state="on";
        document.getElementById(`img_${id}`).src="./assets/images/icon-minus.svg"
    }
    else
    {
        ans.classList.add("hide")
        ans.dataset.state="off";
        document.getElementById(`img_${id}`).src="./assets/images/icon-plus.svg"
    }

}