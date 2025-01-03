function listar(){
    let txtTarefa = document.querySelector('input#txtTarefa');
    let resultado = document.querySelector('ol#listar-tarefas');

    

    if(txtTarefa.value == ''){
        alert('Insira a tarefa')
    }else{
        
        let li = document.createElement('li');

        let textoTarefa = document.createElement('span');
        textoTarefa.textContent = txtTarefa.value;
        textoTarefa.style.fontWeight = "600";
        textoTarefa.style.textAlign = 'center';

        
        let item = document.createElement('input');
        item.setAttribute('type' , 'checkbox');
        item.style.marginRight = '10px';

        

        item.addEventListener('change' , () =>{
            textoTarefa.classList.toggle('checked', item.checked);
        } )

        let btn = document.createElement('input');
        btn.setAttribute('type' , 'button');
        btn.value = '🗑️';
        btn.style.backgroundColor = 'red';
        btn.style.border = "none"
        btn.style.borderRadius = '5px';
        btn.style.padding = "5px"
        btn.style.marginLeft = '10px'
        btn.style.cursor = 'pointer'

        btn.addEventListener('click' , ()=>{
            li.remove();
        })
    
        li.appendChild(item);
        li.appendChild(textoTarefa);
        li.appendChild(btn);
        

       


        

        resultado.appendChild(li);

        txtTarefa.value = "";
        txtTarefa.focus();

        
    }
}