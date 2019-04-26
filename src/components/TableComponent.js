import React from 'react'

function TableComponent(properties) {

    //Destructuring!!!
    const{datos, columnas} = properties

    return(
        <div>
            <h1>Datos del proveedor</h1>

            <table>
                <thead>
                    <tr>
                        {
                            columnas.map((col) => {
                                return(<th key={col.name}>{col.name}</th>)
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        datos.map((p) => {
                            return(
                                <tr key={p.dniInpector}>
                                    <td>{p.dniInpector}</td>
                                    <td>{p.dsnombreInspector}</td>
                                    <td>{p.dsemailInspector}</td>
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