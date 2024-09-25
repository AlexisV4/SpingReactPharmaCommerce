export const fetchCategorias = async (setCategorias) => {
    try{
        const response = await fetch('http://localhost:8080/api/categorias');
        const data = await response.json();
        setCategorias(data);
    } catch(error){
        console.error('Error al obtener las categorías:', error);
    }
    
};

export const fetchProveedores = async (setProveedores) => {
  try {
    const response = await fetch('http://localhost:8080/api/proveedores/activos');
    if (response.ok) {
      const data = await response.json();
      setProveedores(data);
    } else {
      console.error('Error fetching proveedores');
    }
  } catch (error) {
    console.error('Error fetching proveedores:', error);
  }
};

export const fetchEmpleados = async(setEmpleados) =>{
  try {
    const response = await fetch('http://localhost:8080/api/empleados');
    const data = await response.json();
    setEmpleados(data);
  } catch (error) {
    console.error('Error al obtener los empleados:', error);
    
  }
}

export const fetchClientes = async (setClientes) => {
  try {
    const response = await fetch("http://localhost:8080/api/clientes/activos")
    const data = await response.json();
    setClientes(data);
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
  }
  
}

export const fetchMetodoPago = async(setMetodoPago) =>{
  try {
    const response = await fetch('http://localhost:8080/api/metodos_pago');
    const data = await response.json();
    setMetodoPago(data);
  } catch (error) {
    console.error('Error al obtener los metodos de pago:', error);
    
  }
}

export const fetchProductos = async (setProductos) => {
    try {
      const response = await fetch('http://localhost:8080/api/productos/activos');
      if (response.ok) {
        const data = await response.json();
        setProductos(data);
      } else {
        console.error('Error fetching productos');
      }
    } catch (error) {
      console.error('Error fetching productos:', error);
    }
};

export const fetchCompras = async (setCompras) => {
  try {
    const response = await fetch('http://localhost:8080/api/compras/activos');
    if(response.ok){
      const data = await response.json();
      setCompras(data);
    } else{
      console.error('Error fetching compras');
    }
    
  } catch (error) {
    console.error('Error fetching compras', error);
    
  }
  
};

export const fetchCiudades = async (setCiudades) => {
  try {
    const response = await fetch("http://localhost:8080/api/ciudades");
    const data = await response.json();
    setCiudades(data);
  } catch (error) {
    console.error('Error al obtener las ciudades:', error);
    
  }
  
}

export const fetchGeneros = async (setGeneros) => {
  try {
    const response = await fetch("http://localhost:8080/api/generos");
    const data = await response.json();
    setGeneros(data);
  } catch (error) {
    console.error('Error al obtener los generos:', error);
    
  }
  
}

export const fetchRoles = async (setRoles) => {
  try {
    const response = await fetch("http://localhost:8080/api/roles");
    const data = await response.json();
    setRoles(data);
  } catch (error) {
    console.error('Error al obtener los roles:', error);
    
  }
  
}


export const fetchUsuarios = async (setUsuarios) => {
  try {
    const response = await fetch("http://localhost:8080/api/usuarios");
    const data = await response.json();
    setUsuarios(data);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    
  }
  
}

export const fetchEstadosEmpleado = async (setEstadosEmpleado) => {
  try {
    const response = await fetch("http://localhost:8080/api/estados_empleado");
    const data = await response.json();
    setEstadosEmpleado(data);
  } catch (error) {
    console.error('Error al obtener los estados:', error);
    
  }
  
}





