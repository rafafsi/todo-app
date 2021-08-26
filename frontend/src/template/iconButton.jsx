import React from 'react'
import If from './If'

export default props => ( //se o teste for: NÃO ESTÁ ESCONDIDO, o botão vai ser mostrado
    <If test={!props.hide}>
        <button className={'btn btn-'+ props.style} 
              onClick={props.onClick}>
                  <i className={'fa fa-'+ props.icon}></i>
        </button>
    </If> 
)