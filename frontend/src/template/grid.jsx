import React, { Component } from 'react'

export default class Grid extends Component {
    toCssClasses(number) {
        const cols = number ? number.split('') : [] //separando os números e colocando em uma array
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}` //se tiver só um número, será ele o primeiro elemento da array //celular
        if(cols[1]) classes += `col-sm-${cols[1]}` //se tiver dois, o resultado vai ser as duas cols [0] e [1] //dispositivos médios
        if(cols[2]) classes += `col-md-${cols[2]}` // 1/4 da tela
        if(cols[3]) classes += `col-lg-${cols[3]}` // 1/12 da tela large device

        return classes
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}

/*
    o toCssClasses vai converter no máximo 4 elementos uma lista de números separados

    12 mobile
    9 small devices
    10 medium devices

    cols = columns
*/