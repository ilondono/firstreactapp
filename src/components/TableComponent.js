import React from 'react'

function TableComponent(properties) {

    //Destructuring!!!
    const{datos, columnas} = properties

    return(
        <div>
            <h1>Datos del proveedor</h1>

            <table>
                <thead>
                    {
                        columnas.map((col) => {
                            return(<th key={col.name}>{col.name}</th>)
                        })
                    }
                </thead>
                <tbody>
                    {
                        datos.map((p) => {
                            return(
                                <tr key={p.dniInpector}>
                                    <td>{p.dniInpector}</td>
                                    <td>{p.dsnombreInpector}</td>
                                    <td>{p.dsemailInpector}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>


        </div>
    )

}

export default TableComponent;