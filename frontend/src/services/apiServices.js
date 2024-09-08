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
    try{
        const response = await fetch('http://localhost:8080/api/proveedores');
        const data = await response.json();
        setProveedores(data);
    } catch(error){
        console.error('Error al obtener los proveedores:', error);
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
      const response = await fetch('http://localhost:8080/api/productos');
      if (response.ok) {
        const data = await response.json();
        // Filtrar los productos inactivos aquí si es necesario
        const productosActivos = data.filter(producto => producto.activo);
        setProductos(productosActivos);
      } else {
        console.error('Error fetching productos');
      }
    } catch (error) {
      console.error('Error fetching productos:', error);
    }
};

export const fetchCompras = async (setCompras) => {
  try {
    const response = await fetch('http://localhost:8080/api/compras');
    if(response.ok){
      const data = await response.json();
      const comprasActivas = data.filter(compra => compra.activo);
      setCompras(comprasActivas);
    } else{
      console.error('Error fetching compras');
    }
    
  } catch (error) {
    console.error('Error fetching compras', error);
    
  }
  
};

