function msg()
{
    try{
        const res=eval(document.getElementById("in").value);
        document.getElementById("in").value=res;
    }
    catch
    {
        document.getElementById("in").value=0;
    }
}

function append(value)
{
   document.getElementById("in").value+=value;
}

function clearInput() {
    document.getElementById("in").value = '';
}


